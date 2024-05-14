
        <?php
        if (isset($_POST['submit'])) {
            $adsoyad = $_POST['ad'];
            $adsoyad = $_POST['soyad'];
            $cinsiyet = $_POST['cinsiyet'];
            $dg = $_POST['dg'];
            $dosya = $_POST['dosyam'];
            $renk = $_POST['renk'];
            
            $sehir = $_POST['sehir'];
            $uni = $_POST['uni'];
            $tel = $_POST['tel'];
            $email = $_POST['email'];
            $mesaj = $_POST['mesaj'];
            echo ("AD: $ad<br>");
            echo ("SOYAD: $soyad<br>");
            echo ("CİNSİYET: $cinsiyet<br>");
            echo ("DOĞUM GÜNÜ: $dg<br>");
            echo ("DOSYA: $dosyam<br>");
            echo ("RENK: $renk<br>");
            echo ("ŞEHİR: $sehir<br>");
            echo ("ÜNİVERSİTE: $uni<br>");
            echo ("TELEFON NUMARASI: $tel<br>");
            echo ("E POSTA ADRESİ: $email<br>");
            echo ("MESAJ: $mesaj<br>");


        }
        ?>


</html>