<?php
require 'database.php';
if(isset($_COOKIE["name"])) {
    if(isset($_COOKIE["points"])) {
        $name = $_COOKIE["name"];
        $points = $_COOKIE["points"];
        $sql = "INSERT INTO `scoreboard`(`points`, `name`) VALUES ($points,'$name')";
        $conn->exec ($sql);
        $conn = null;
        header("Location: scoreboard.php");
    }
}
?>