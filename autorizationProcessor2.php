<?php
header('Content-Type:text/html;charset=utf-8');
$mysqli=mysqli_connect("localhost", "a0538154_sdo0407", "123456", "a0538154_sdo0407");

if ($mysqli == false) {
    print("error" . mysqli_connect_error());
    } else {

        $login =$_POST['email'];
        $pass=$_POST['pass'];
    // echo "User $login  sucessfully logged in <br>
    //     with secret password :$pass"
        
        $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email' AND'pass' = '$pass');
        if ($result->num_rows != 0) {
                    print("ok");
        } else {
              print("incorrect");
        };s
    }

?>