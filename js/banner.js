1 //获取DOM节点
var $box=$(".box");
var $items=$box.find(".items");
var $imgs=$items.find("img");
var $prev=$box.find(".controls").find(".prev")
var $next=$box.find(".controls").find(".next")
var $points=$box.find(".points");
//获取图片总个数
var len=$imgs.length;

//获取当前的索引值
var activeIndex=0
//点击下一页按钮
$next.on("click",function(){
    activeIndex++;
   if(activeIndex==len){ //边界值
    activeIndex=0
   }
    $imgs.eq(activeIndex).fadeIn(500).siblings().fadeOut(500);
    $points.find("li").eq(activeIndex).addClass("active").siblings()
    .removeClass("active")
})


//点击上一页按钮
$prev.on("click",function(){
    activeIndex--;
   if(activeIndex==-1){ //边界值
    activeIndex=len-1
   }
    $imgs.eq(activeIndex).fadeIn(500).siblings().fadeOut(500);
    $points.find("li").eq(activeIndex).addClass("active").siblings()
    .removeClass("active")

})

//添加
var str=""
for (var i=0;i<len;i++){
  //console.log(i)
  str +=`<li></li>`
}
$points.html(str)
$points.find("li").eq(0).addClass("active")
//划过小圆点切换图片
$points.find("li").on("mouseenter",function(){
    var index=$(this).index()//获取划过的索引值
    activeIndex=index;
    $imgs.eq(activeIndex).stop().fadeIn(500).siblings().stop().fadeOut(500);
    $points.find("li").eq(activeIndex).addClass("active").siblings()
    .removeClass("active")

})






//自动轮播
var timer=null;
var timer=setInterval(function(){
    $next.click()
},3000);
//鼠标移入轮播图 停止自动轮播
//onmouseover / onmouseout  xxxx  事件冒泡
//onmouseenter / onmouseleave √
//hover  √
$box.hover(function(){
    clearInterval(timer)
},function(){
timer=setInterval(function(){

    $next.click()
},2000)
})