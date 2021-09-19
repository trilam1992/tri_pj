<?php
    session_start();
	
	$page = 'index.php';
	
	mysql_connect('mysql.cs.rmit.edu.au:4020','s3342031','PPrQCx9n') or die(mysql_error());
	mysql_select_db('s3342031') or die(mysql_error());
?>