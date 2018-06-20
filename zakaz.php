<?php
$my_url= $_SERVER['HTTP_HOST'];
$to = "fire913n@gmail.com";
$subject = $my_url . " - " . $_POST['title'] . ".";
if($_POST['email']){
	$email_text = ' Email: '.$_POST['email'];
} else {
	$email_text = '';
}

$message = $_POST['title'] . '<br>Имя: '. $_POST['name'] . $email_text . ' Телефон: '.$_POST['tel'].'<br>';
$headers = "Content-type: text/html; charset=UTF-8";
$headers .= "From: " . $my_url;
$result = mail($to, $subject, $message, $headers);
?>