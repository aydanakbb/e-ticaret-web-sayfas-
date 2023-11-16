document.getElementById("resetButton").addEventListener("click", function () {
    resetPassword();
});
function resetPassword() { 
    var form = document.getElementById("forgotPassword");
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var eskiKullaniciJSON = localStorage.getItem('kullanici');
    var totalBilgiler = eskiKullaniciJSON ? JSON.parse(eskiKullaniciJSON) : [];
    emailVarmi = false;
    for (var i = 0; i < totalBilgiler.length; i++) {
        if (email === totalBilgiler[i].email) {
            emailVarmi=true;
            if (newPassword === confirmPassword) {
                totalBilgiler[i].password = newPassword;
                localStorage.setItem('kullanici', JSON.stringify(totalBilgiler))
                alert("Şifre güncellemesi başarılı");
                clearFields(form);
            } else {
                alert("Aynı şifreleri girin");
            }
        }
    }
    if (emailVarmi == false)
    {
        alert("E-posta adresi kayıtlı değil!");
    }
}

function clearFields(form) {
    form.reset();//Bu satır, form değişkeni ile temsil edilen formun içindeki tüm input alanlarını sıfırlar, yani bu alanlardaki değerleri temizler. 
    //Bu, kullanıcıya şifre sıfırlama işleminden sonra input alanlarını temizler.
}