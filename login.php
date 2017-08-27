<?php
	header("Content-Type:text/html;charset=utf8");
	error_reporting(0);
	$username=$_GET["user"];
	$password=$_GET["pwd"];
//	$username=$_POST["user"];
//	$password=$_POST["pwd"];
	if($username==""){
		die('用户名不能为空');
	}
	if($password==""){
		die("登录密码不能为空");
	}
	//入库操作
	$host="127.0.0.1";
	$user = "root";
	$pwd = "";
	$dbname = "2605dormintory";
	$connection=mysql_connect($host,$user,$pwd);
	if($connection)
	{
		$password=md5($password);
		mysql_select_db($dbname);
		$sql="SELECT * FROM `userinfo` 	WHERE `UserName`='$username' AND `Password`='$password'";
		$result=mysql_query($sql);
		//判断行数是否大于0，不能直接用$result，因为$result会返回Resource id #4
		if(mysql_num_rows($result)>0){
			
			$response="欢迎您，".$username;
		}
		else{
			$response="用户名或者密码不正确";
		}
	}
	else{
			die('连接失败');
	}
	echo $response;
?>