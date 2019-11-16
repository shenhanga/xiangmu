var oyh=document.getElementById("btn1")
//console.log(oyh)
var odl=document.getElementById("btn2")
//console.log(odl)
var oqr=document.getElementById("btn3")
//console.log(oqr)
var osj=document.getElementById("btn4")
var oyz=document.getElementById("btn5")
var ozc=document.getElementById("btn7")
//var y=d=q=s=z=false



oyh.onblur=function(){
 var reg=/^[a-zA-Z0-9_-]{6,20}$/;
 if(reg.test(this.value)){
      this.nextElementSibling.innerHTML="用户名成功";
      y=true; //y用户
      localStorage.setItem('name', this.value)
 }else{
      this.nextElementSibling.innerHTML="6-20位字符、支持字母、数字";
      y=false;
 }   
}

odl.onblur=function(){
  var a=b=c=0;
  var aReg=/\d/;
    if(aReg.test(this.value)){
        a=1;
    }
  var bReg=/[a-zA-Z]/  
    if(bReg.test(this.value)){
        b=1;
    }
  var cReg=/[\W]/  
    if(cReg.test(this.value)){
        c=1;
 }
   switch(a+b+c){
        case 1:
            this.nextElementSibling.innerHTML="简单";break;
        case 2:
            this.nextElementSibling.innerHTML="一般";break;
        case 3:
            this.nextElementSibling.innerHTML="困难";break;
             
   }
   localStorage.setItem('password', this.value)
   d=true; //d登录
}
oyz.onblur=function(){
    
    var SReg = /^\d{4}$/;
    if(SReg.test(this.value)){
        this.nextElementSibling.innerHTML="验证码成功";
        z=true;//d验证
   }else{
        this.nextElementSibling.innerHTML="4位纯数字";
        z=false;
   }   
}
osj.onblur=function(){
    var cReg = /^1[345789]\d{9}$/;
    if(cReg.test(this.value)){
        this.nextElementSibling.innerHTML="手机输入成功";
        s=true;//s手机
   }else{
        this.nextElementSibling.innerHTML="11纯数字";
        s=false;
   }   
}

oqr.onblur=function(){
   if(this.value===odl.value){
        this.nextElementSibling.innerHTML="一致";
        q=true;//q确手机
    }else{
        this.nextElementSibling.innerHTML="不一致"; 
        q=false;
    }
    
}



// if(window.localStorage.userArr){//判断是否存在
//     var array = JSON.parse(window.localStorage.userArr);
// }else{
//     array = [];//创建一个新数组
// }


// ozc.onclick = function(){
// var  useval2  = oyh.value;
// var  passval2 = odl.value;
// for(var i =0;i<array.length;i++){
// //判断是否有相同账号
// if(useval==array[i].useval){
//     alert("该账号已存在");
//     return;
// }
// }
//创建对象


// if(y && d ){
    
//     alert("注册成功")

//     var obj = {useval:useval2,passval:passval2,score:0}
//     //console.log(useval)
//     array.push(obj);
//     window.localStorage.userArr=JSON.stringify(array);
//     window.location.href = "http://localhost/xmzy/dl.html";
// }else{
//     alert("请填写完整信息")
// }

// }
