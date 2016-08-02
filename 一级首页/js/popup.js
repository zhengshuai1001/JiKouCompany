var oMask = document.getElementById("mask");
var oLogin = document.getElementById("login2");

function displayNone() {
	// oMask.style.display = "none";
	// oLogin.style.display = "none";
	$(oMask).fadeOut(500);
	$(oLogin).fadeOut(500);
}

function displayBlock() {
	// oMask.style.display = "block";
	// oLogin.style.display = "block";
	$(oMask).fadeIn(500);
	$(oLogin).fadeIn(500);
}

function openNewLogin() {
	var sHeight = document.documentElement.scrollHeight;
	var sWidth = document.documentElement.scrollWidth;
	var wHeight = document.documentElement.clientHeight;
	oMask.style.height = sHeight + "px";
	oMask.style.width = sWidth + "px";
	displayBlock();
	var dHeight = oLogin.offsetHeight;
	var dWidth = oLogin.offsetWidth;
	oLogin.style.left = (sWidth - dWidth) / 2 + "px";
	oLogin.style.top = (wHeight - dHeight) / 2 + "px";
	var oClose = document.getElementById("close");
	oMask.onclick = oClose.onclick = function () {
		displayNone();
	}
}
$(document).ready(function (e) {
	$('#b03').unslider({
		dots: true,
		speed: 300,
		keys: false,
		delay: 3000,
		fluid: true,
	});
});
window.onload = function () {
	// displayNone();
	// var oBtn = document.getElementById("popupLogin");
	var oBtn = document.getElementsByClassName("popupLogin")[0];
	oBtn.onclick = function () {
		openNewLogin();
	}
}
