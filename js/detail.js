let p = document.querySelector('.header-right p');
let bigIMG = document.querySelector("#bigIMG");
let toCart = document.getElementById('toCart');
let buyNow = document.getElementById('buyNow');
let body = document.querySelector('body')
function cookieToJson() {
	let cookieArr = document.cookie.split(";");
	let obj = {}
	cookieArr.forEach((i) => {
		let arr = i.split("=");
		obj[arr[0]] = arr[1];
	});
	return obj;
}

function getCookie(name) {
	let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
	return null;
}

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}
if (document.cookie) {
	var i = cookieToJson();
	p.innerHTML =
		`
	欢迎您！用户${Object.values(i)[1]}<a href="/login.html" id="quit">退出登陆</a>
	`;
	var quit = document.getElementById("quit");
	quit.onclick = function() {
		delCookie("username");
		delCookie("global");
		delCookie("password");
	}
}
let id = window.location.href.slice(29);
let title = document.querySelector('#title h1');
let goods = document.getElementById('goods');
let h1 = document.querySelector('.main-top-right h1');
let goodsP = document.querySelector('.main-top-right p');
let price = document.querySelector('.price')
if (window.location.href.indexOf('?') !== -1) {
	$.getJSON("/server/goods.json", function(data) {
		title.innerHTML = `
			商城首页 > ${data[id - 4].cat_one_id} > ${data[id - 4].cat_id}
		`;
		goods.src = bigIMG.src = data[id - 4].goods_big_logo;
		h1.innerHTML = data[id - 4].goods_name;
		price.innerHTML = `￥${data[id - 4].goods_price}`;
		
	})
}

function dateCount() {
	// 获取现在的时间
	let date = new Date();
	// 2019的第一天
	let until = new Date('2019-12-31 00:00:00');
	// 计算时会发生隐式转换，调用valueOf()方法，转化成时间戳的形式
	let days = (until - date) / 1000 / 3600 / 24;
	// 下面都是简单的数学计算 
	let day = Math.floor(days);
	let hours = (days - day) * 24;
	let hour = Math.floor(hours);
	let minutes = (hours - hour) * 60;
	let minute = Math.floor(minutes);
	let seconds = (minutes - minute) * 60;
	let second = Math.floor(seconds);
	let back = '距离活动结束还剩下' + day + '天' + hour + '小时' + minute + '分钟' + second + '秒';
	return back;
}
let priceRight = document.querySelector('.price-right')
setInterval(function() {
	let text = dateCount();
	priceRight.innerHTML = text;
}, 1000)
let small = document.getElementById('small');

let big = document.querySelector("#big");
let box = document.querySelector("#left");

box.onmouseover = function(e) {
	e = e || window.event;

	big.style.display = "block";
	small.style.display = "block";
	box.onmousemove = function(e) {
		e = e || window.event;
		var left = e.pageX - box.offsetLeft - small.clientWidth / 2;
		var top = e.pageY - box.offsetTop - small.clientHeight / 2;
		if (left < 0) {
			left = 0;
		} else if (left > (box.clientWidth - small.clientWidth)) {
			left = box.clientWidth - small.clientWidth + "px";
		}
		if (top < 0) {
			top = 0;
		} else if (top > (box.clientHeight - small.clientHeight)) {
			top = box.clientHeight - small.clientHeight + "px";
		}
		small.style.left = left + "px";
		bigIMG.style.left = -2 * small.offsetLeft + "px";
		small.style.top = top + "px";
		bigIMG.style.top = -2 * small.offsetTop + "px";
	}
}

box.onmouseout = function() {
	big.style.display = "none";
	small.style.display = "none";
}
toCart.onclick = function() {
	if (localStorage.getItem(id - 4)) {
		localStorage.setItem(id - 4, localStorage.getItem(id - 4) - 0 + 1)
	} else {
		localStorage.setItem(id - 4, 1)
	}
}
buyNow.onclick = function() {
	window.location.href='/cart.html';
}