<?php
session_start();
header('Content-Type:text/html;charset=utf-8');
$mysqli=mysqli_connect("localhost", "a0538154_sdo0407", "123456", "a0538154_sdo0407");

if ($mysqli==false) {
    print("error" . mysqli_connect_error());
    } else {

        $email =trim(mb_strtolower($_POST['email']));
        $pass=trim($_POST['pass']);
    // echo "User $login  sucessfully logged in <br>
    //     with secret password :$pass"
        
        $result=$mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");

        $result=$result->fetch_assoc();
        
        if (password_verify($pass,$result["pass"])){
            print("ok");
            $_SESSION['name']=$result['name'];
            $_SESSION['lastname']=$result['name'];
            $_SESSION['name']=$result['lastname'];
            $_SESSION['email']=$result['email'];
            $_SESSION['id']=$result['id'];
        }else{
            print("incorrect");
        }
        // var_dump($result);

        // if ($result->num_rows != 0) {
        //             print("ok");
        // } else {
        //       print("incorrect");
        // };
    }

?>