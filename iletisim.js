function formKontrol() {
    var ad = document.forms["iletisim"]["ad"].value;
    var soyad = document.forms["iletisim"]["soyad"].value;
    var erkek = document.getElementById("erkek").checked;
    var kadin = document.getElementById("kadin").checked;
    var dg = document.forms["iletisim"]["dg"].value;
    var dosya = document.forms["iletisim"]["dosyam"].value;
    var renk = document.forms["iletisim"]["renk"].value;
    var sehir = document.forms["iletisim"]["sehir"].value;
    var uni = document.forms["iletisim"]["uni"].value;
    var tel = document.forms["iletisim"]["tel"].value;
    var email = document.forms["iletisim"]["email"].value;
    var mesaj = document.forms["iletisim"]["mesaj"].value;
    var emailFormat = /\S+@\S+\.\S+/;
    var telefonFormat = /^[0-9]{10}$/;

    if (ad === "" || soyad === "" || dg === "" || renk === ""  || sehir === "" || uni === "" || (!erkek && !kadin) || email === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurunuz.");
        return false;
    } else if (!emailFormat.test(email)) {
        alert("Lütfen e-posta adresinizi doğru formatta giriniz.");
        return false;
    } else if (!telefonFormat.test(tel)) {
        alert("Lütfen telefon numaranızı kontrol ediniz.");
        return false;
    } else {
        alert("Sorun Yok.");
        return true;
    }
}
