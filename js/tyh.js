let p = document.querySelector('.header-right p');
let backTop = document.getElementById('backTop');
let $shades = $('#shades li');
let shades = document.querySelectorAll('#shades li');
// document.cookie = `username=${username}`;
// document.cookie = `password=${password}`;
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


window.onscroll = function() {
	if (document.documentElement.scrollTop >= 250) {
		backTop.style.display = 'block';
	}
}
backTop.onclick = function() {
	var timer = setInterval(function() {
		if (document.documentElement.scrollTop === 0) {
			clearInterval(timer);
		}
		document.documentElement.scrollTop -= 50;
	}, 20)
}
$shades.hover(function() {
	$(this).stop().animate({
		width: 700
	}).siblings().stop().animate({
		width: 272
	})
}, function() {
	$shades.stop().animate({
		width: 379
	})
})
