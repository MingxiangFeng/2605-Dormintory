<?php
	header("Content-Type:text/html;charset=utf8");
	error_reporting(0);
	$username=$_GET["user"];
	$password=$_GET["pwd"];
	$password2=$_GET['cpwd'];
	$email=$_GET['email'];
	
	if($username==""){
		die("用户名不能为空");
	}
	if($email==""){
		die("邮箱不能为空");
	}
	if($password==""){
		die("登录密码不能为空");
	}
	if($password2==""){
		die("确认密码不能为空");
	}
	if($password!=$password2){
		die("两次输入的密码不一样");
	}
	//入库操作
	$host="127.0.0.1";
	$user = "root";
	$pwd = "";
	$dbname = "2605dormintory";
	$connection=mysql_connect($host,$user,$pwd);
	if($connection){
		$password=md5($password);
		mysql_select_db($dbname);
		$sql="INSERT INTO `userinfo`(`UserName`,`Password`,`Email`) VALUES('$username','$password','$email')";
		$result=mysql_query($sql);
		if($result){
			$response="欢迎您，".$username;
		}	
		else{
			$response='注册失败';
		}
	}
	else{
		die('连接失败');
	}
	echo $response;
?> 