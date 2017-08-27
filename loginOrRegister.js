//登录注册界面的显隐
var login = document.getElementById("login");
var register = document.getElementById("register");

function loginOrRegister(value) {
	if(value == 1) {
		register.style.display = "none";
		login.style.display = "block";
	} else if(value == 2) {
		register.style.display = "block";
		login.style.display = "none";
	}
}
function cancel(){
	document.getElementById("login").style.display="none";
	document.getElementById("register").style.display="none";
}
//登录或者注册成功后提示信息发生变化
var tabs = document.getElementById("tabs");
var user = "";
var email = "";
var pwd = "";
var cpwd = "";

function getName(str) {
	user = str;
}

function getPwd(str) {
	pwd = str;
}

function getEmail(str) {
	email = str;
}


function getCPwd(str) {
	cpwd = str;
	if(pwd != cpwd) {
		document.getElementById("errtaps").innerHTML = "两次输入的密码不一样";
	} else {
		document.getElementById("errtaps").innerHTML = "";
	}
}
//ajax
//登录界面
function showtabs() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Micrsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var msg = xmlhttp.responseText;
			if(msg.indexOf("欢迎您") != -1) {
				userState=1;
				user=msg;
				document.getElementById("tabs").innerHTML = msg;
				document.getElementById("login").style.display = "none";
				document.getElementById("errtaps").innerHTML = "";
				document.getElementById("goto").style.display="block"
				setTimeout("window.open('main.html','_self')",3000);
			} else {
				document.getElementById("errtaps").innerHTML = msg;
			}
		}
	}
	xmlhttp.open("GET", "login.php?user=" + user + "&pwd=" + pwd, true);
	//				xmlhttp.open("POST","login.php?user="+user+"&pwd="+pwd,true);
	xmlhttp.send();
}
//注册界面
function regis() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Micrsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var msg = xmlhttp.responseText;
			if(msg.indexOf("欢迎您") != -1) {
				document.getElementById("tabs").innerHTML = msg;
				document.getElementById("register").style.display = "none";
				document.getElementById("errtaps2").innerHTML = "";
				document.getElementById("goto").style.display="block"
				setTimeout("window.open('main.html')",3000);
			} else {
				document.getElementById("errtaps2").innerHTML = msg;
			}
		}
	}
	xmlhttp.open("GET", "register.php?user=" + user + "&pwd=" + pwd + "&cpwd=" + cpwd + "&email=" + email, true);
	//				xmlhttp.open("POST","login.php?user="+user+"&pwd="+pwd,true);
	xmlhttp.send();
}