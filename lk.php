<?php session_start()?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <title>Profile</title>
  </head>
  <body>
  <style>

.edit-btn {
color: #de3545;
cursor: pointer;
}
.save-btn {
color: orange;
cursor: pointer;
}
.cancel-btn {
color: red;
cursor: pointer;
}

.edit-btn:hover, .cancel-btn:hover, .save-btn:hover, {
color: darkgrey;
}


</style>
    
  <div class="container">
    <p>Имя: 
    <span><?=$_SESSION['name']?></span>
    <span class="edit-btn">[Изменить]</span>
    <span class="save-btn" hidden>[Сохранить]</span>
    <span class="cancel-btn" hidden>[Отменить]</span>
    </p>

    <p>Фамилия: <span><?=$_SESSION['lastname']?></span>
    <span class="edit-btn">[Изменить]</span>
    <span class="save-btn" hidden>[Сохранить]</span>
    <span class="cancel-btn" hidden>[Отменить]</span>
    </p>

    <p>E-mail:<?= $_SESSION['email']?></p>
    <p>ID:<?=$_SESSION['ID']?></p>

  </div>
  
<script>
  let edit_buttons = document.querySelectorAll(".edit-btn");
  let save_buttons = document.querySelectorAll(".save-btn");
  let cancel_buttons = document.querySelectorAll(".cancel-btn");
  
  for(let i=0;i<edit_buttons.length; i++){
      edit_buttons[i].addEventListener("click", () => {
      let inputValue = edit_buttons[i].previousElementSibling.innerText;
      edit_buttons[i].previousElementSibling.innerHTML = `<input type="text" value="${inputValue}">`;
      save_buttons[i].hidden=false;
      cancel_buttons[i].hidden=false;
      edit_buttons[i].hidden=true;

            cancel_buttons[i].addEventListener("click", () => {
            edit_buttons[i].previousElementSibling.innerHTML = `<span>${inputValue}</span>`;
            save_buttons[i].hidden=true;
            cancel_buttons[i].hidden=true;
            edit_buttons[i].hidden=false;
            });

            save_buttons[i].addEventListener("click", () => {
              let newValue=edit_buttons[i].previousElementSibling.childNodes[0].value
              let newValue2=edit_buttons[i].previousElementSibling.childNodes[0].innerText
              if (newValue!= undefined) {
                edit_buttons[i].previousElementSibling.innerHTML = `<span>${newValue}</span>`;
              } else edit_buttons[i].previousElementSibling.innerHTML = `<span>${newValue2}</span>`;
            save_buttons[i].hidden=true;
            cancel_buttons[i].hidden=true;
            edit_buttons[i].hidden=false;
            });
      
      });
   }
  // for(let i=0;i<edit_buttons.length; i++){
  //   edit_buttons[i].addEventListener("click", () => {
  //   let inputValue = edit_buttons[i].previousElementSibling.innerText;
  //   edit_buttons[i].previousElementSibling.innerHTML = `<input type="text" value="${inputValue}">`;
  //   save_buttons[i].hidden=false;
  //   cancel_buttons[i].hidden=false;
  //   edit_buttons[i].hidden=true;

  //     cancel_buttons[i].addEventListener("click", () => {
  //     edit_buttons[i].previousElementSibling.innerHTML = inputValue;
  //     save_buttons[i].hidden=true;
  //     cancel_buttons[i].hidden=true;
  //     edit_buttons[i].hidden=false;
  //     });

  //     save_buttons[i].addEventListener("click", () => {
  //     save_buttons[i].hidden=true;
  //     cancel_buttons[i].hidden=true;
  //     edit_buttons[i].hidden=false;
  //     });
    
  //   });



 
</script>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    // <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    // <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
    // -->
  </body>
</html>