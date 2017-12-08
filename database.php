<?php
$servername = 'localhost';
$dbname = 'make10';
$dsn = "mysql:host=$servername;dbname=$dbname";
$user = 'make10';
$passw = 'make10';
$conn = new PDO($dsn, $user, $passw);
?>