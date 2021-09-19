<?php
    
    function make_password($length){
	$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	$password='';
	for ($i=1;$i<=$length;$i++){
		$password = $password. $chars[rand(0, strlen($chars)-1)];
	}
	return $password;
	}
?>