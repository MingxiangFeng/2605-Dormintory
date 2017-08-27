<?php
	header("Content-Type:text/html;charset=bg2312");
//	error_reporting(0);
	$content=$_GET['content'];
	$statement=$_GET['statement'];
	
	$host = "127.0.0.1";
	$user = "root";
	$pwd = "";
	$dbname = "2605dormintory";
	$connection=mysql_connect($host,$user,$pwd);
	if($connection){
		mysql_select_db($dbname);
		$sql="INSERT INTO `chat`(`Content`)	VALUES('$content')";
		$result=mysql_query($sql);
		if($result){
		}
		else{
			die('发表失败');
		}
	}
	else{
		die('连接失败');
	}
?>