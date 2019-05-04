<?php
 
if(isset($_POST["name"]))
{
        if(isset($_POST["name"]))
        {
                $name = $_POST["name"];
        }
        if(isset($_POST["phone"]))
        {
                $phone= $_POST["phone"];
        }
 
        if($phone=="")
        { // Проверяем на заполненность всех полей.
                echo "Пожалуйста, введите номер телефона";
        }
        else
        {
                
               
                $to = "bastgroom-promo@yandex.ru"; // Ваш email адрес
                $subject = "Сообщение c сайта bastgroom-promo"; // тема письма
                $headers .= "Content-Type: text/html;
                ";
                $headers .= "Отправитель: Посетитель сайта"; // Отправитель письма
                $message = "
                Имя: $name<br>
                Телефоны: $phone<br>
                ";
 
                $send = mail($to, $subject, $message, $headers);
                if ($send == "true")
                {
                        echo "Ваша заявка отправлена. Мы перезвоним Вам в ближайшее время.";
                }
                else
                {
                        echo "Не удалось отправить, попробуйте снова!";
                }
        }
}
 
?>