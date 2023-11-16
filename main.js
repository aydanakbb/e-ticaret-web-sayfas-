//Esnaf seçildiği zaman sosyal medya ikonlarının  kaybolmasını sağlayan kod satırları
$(document).ready(function () {
    // Kullanıcı türü değiştiğinde sosyal ikon alanını kontrol eder
    $('input[name="userType"]').on('change', function () {
        var userType = $('input[name="userType"]:checked').val();
        // Esnaf seçildiyse sosyal ikonları gösteren alanı gizler
        if (userType === 'esnaf') {
            hideSocialIcons();
        } else {
            // Müşteri seçildiyse sosyal ikonları gösteren alanı göster
            showSocialIcons();
        }
    });
});
// Sosyal ikonları gösteren alanı gizle
function hideSocialIcons() {
    $('.social-icons').hide();
}
// Sosyal ikonları gösteren alanı göster
function showSocialIcons() {
    $('.social-icons').show();
}

//LOCALSTORAGE KAYIT İŞLEMLERİ
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Kullanıcı girdilerini alınz
    var username = document.getElementById("kadi").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userType = document.querySelector('input[name="userType"]:checked').value;
    var taxNumber = document.getElementById("taxNumber") ? document.getElementById("taxNumber").value : null; // VKN numarasını aldık
    var additionalInfo = {};

    if (userType === "esnaf") {
        additionalInfo.companyName = document.getElementById("companyName").value;
        additionalInfo.taxNumber = document.getElementById("taxNumber").value;
    } else if (userType === "musteri") {
        additionalInfo.customerName = document.getElementById("customerName").value;
        additionalInfo.customerSurname = document.getElementById("customerSurname").value;
    }

    var eskiKullaniciJSON = localStorage.getItem('kullanici');
    var eskiKullaniciBilgileri = eskiKullaniciJSON ? JSON.parse(eskiKullaniciJSON) : [];
    
    if (eskiKullaniciBilgileri.length === 0) {
        var yeniKullaniciBilgileri = {
            username: username,
            password: password,
            userType: userType,
            additionalInfo: additionalInfo,
            email: email,
        };
        eskiKullaniciBilgileri.push(yeniKullaniciBilgileri);
        var kullaniciJSON = JSON.stringify(eskiKullaniciBilgileri);
        localStorage.setItem('kullanici', kullaniciJSON);
    } else {
        checkIfUniqueValueExists(username, password, userType, additionalInfo, email, event);
    };

});
// VKN numarası veya kullanıcı adının daha önce kayıt edilip edilmediğini kontrol eden işlev
function checkIfUniqueValueExists(username, password, userType, additionalInfo, email,event) {
    var kullaniciVarmi = false;
    var eskiKullaniciBilgileri = JSON.parse(localStorage.getItem('kullanici')) || [];

    for (var i = 0; i < eskiKullaniciBilgileri.length; i++) {
        var storedUser = eskiKullaniciBilgileri[i];

        if (storedUser) {
            if (userType === "esnaf" && storedUser.additionalInfo && storedUser.additionalInfo.taxNumber === additionalInfo.taxNumber) {
                kullaniciVarmi = true;
                break; // Eğer bir eşleşme bulunduysa döngüyü sonlandır
            } else if (userType === "musteri" && storedUser.username === username) {
                kullaniciVarmi = true;
                break; // Eğer bir eşleşme bulunduysa döngüyü sonlandır
            }
        }
    }

    if (kullaniciVarmi) {
        alert("Mevcut Kullanici");
        event.preventDefault();
    } else {
        var yeniKullaniciBilgileri = {
            username: username,
            password: password,
            userType: userType,
            additionalInfo: additionalInfo,
            email: email,
        };
        eskiKullaniciBilgileri.push(yeniKullaniciBilgileri);
        var kullaniciJSON = JSON.stringify(eskiKullaniciBilgileri);
        localStorage.setItem('kullanici', kullaniciJSON);
    }
}
$(document).ready(function () {

    $('input[type=password]').keyup(function () {
        var pswd = $(this).val();

        //validate the length
        if (pswd.length < 8) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }

        //validate letter
        if (pswd.match(/[A-z]/)) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if (pswd.match(/[A-Z]/)) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if (pswd.match(/\d/)) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }

        //validate space
        if (pswd.match(/[^a-zA-Z0-9\-\/]/)) {
            $('#space').removeClass('invalid').addClass('valid');
        } else {
            $('#space').removeClass('valid').addClass('invalid');
        }

    }).focus(function () {
        $('#pswd_info').show();
    }).blur(function () {
        $('#pswd_info').hide();
    });

});
document.getElementById('confirmPassword').addEventListener('input', function () {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordError = document.getElementById('passwordError');

    // Şifrelerin birbiriyle uyumlu olup olmadığını kontrol et
    if (password === confirmPassword) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Şifreler uyuşmuyor.';
    }
});
function showErrorModal() {
    // Hatalı kayıt olduğunda çalışacak kod
    $('#errorModal').modal('show'); // Hata pop-up'ı göster
}