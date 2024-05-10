<?php
$user = 'B231210355@ogr.sakarya.edu.tr'; 
$pass = '123456';

if(isset($_POST['kullaniciadi']) && isset($_POST['sifre'])) {
    $kullaniciadi = $_POST['kullaniciadi'];
    $sifre = $_POST['sifre'];

  
    if(empty($kullaniciadi) || empty($sifre)) {
        echo "Kullanıcı adı veya şifre boş bırakılamaz. Lütfen tekrar deneyin!";
        header("refresh:5;url=login.html");
        exit();
    }

   
    if(!filter_var($kullaniciadi, FILTER_VALIDATE_EMAIL)) {
        echo "Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin!";
        header("refresh:5;url=login.html");
        exit();
    }

    if($user == $kullaniciadi && $pass == $sifre) {
        echo("Hoşgeldiniz... <br>");
        echo("Kullanıcı Adı : B231210355 <br>");
        echo("Şifre : 123456 <br>");
        header("refresh:5;url=index.html");
        exit();
    } else {
        echo "Kullanıcı adı veya şifre hatalı. Login sayfasına yönlendiriliyorsunuz ... ";
        header("refresh:5;url=login.html");
    }
}
?>
