35satır
/*if (userTypeElement) {
    var userType = userTypeElement.value;
    if (userType === "esnaf") {
        taxNumber = document.getElementById("taxNumber").value;
    }
} else {
    // Hiçbir userType'ın seçilmediği durumu ele alın (uygun hata işlemeyi eklemek isteyebilirsiniz)
    console.error("User type not selected!");
}
   // Öncelikle VKN numarasını (esnaf) veya kullanıcı adını (müşteri) kullanarak kayıt olup olmadığınızı kontrol edin
if (checkIfUniqueValueExists(userType, taxNumber, username, email)) {
    alert("Bu " + (userType === "esnaf" ? "VKN numarası" : "kullanıcı adı") + " zaten kayıtlı.");
    return;
}*/

var additionalInfo = {};

if (userType === "esnaf") {
    additionalInfo.companyName = document.getElementById("companyName").value;
    additionalInfo.taxNumber = document.getElementById("taxNumber").value;
    additionalInfo.email = document.getElementById("email").value;
} else if (userType === "musteri") {
    additionalInfo.customerName = document.getElementById("customerName").value;
    additionalInfo.customerSurname = document.getElementById("customerSurname").value;
    additionalInfo.customerEmail = document.getElementById("email").value;
}

// Her kayıt için benzersiz bir anahtar oluşturun (UUID gibi bir şey kullanılabilir)
var userKey = "user_" + Date.now();

// Kullanıcı bilgilerini JSON olarak saklayın
var user = {
    username: username,
    taxNumber: taxNumber,
    password: password,
    userType: userType,
    additionalInfo: additionalInfo,
    email: email, // "Email" yerine "email" olarak değiştirildi
};

// JSON verisini localStorage'e kaydedin, farklı anahtarlar kullanarak
localStorage.setItem(userKey, JSON.stringify(user));

// Kayıt işlemi tamamlandıktan sonra başka bir sayfaya yönlendirme vb. işlemleri burada yapabilirsiniz.
// Örneğin: window.location.href = "kayit-tamamlandi.html";


// VKN numarası veya kullanıcı adının daha önce kayıt edilip edilmediğini kontrol eden işlev
function checkIfUniqueValueExists(userType, taxNumber, username) {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storedUser = JSON.parse(localStorage.getItem(key));
        if (storedUser) {
            if (userType === "esnaf" && storedUser.taxNumber === taxNumber) {
                return true; // VKN numarası zaten kayıtlı
            } else if (userType === "musteri" && storedUser.username === username) {
                return true; // Kullanıcı adı zaten kayıtlı
            }
        }
    }
    return false; // VKN numarası veya kullanıcı adı kayıtlı değil
}
});

//LOCALSTORAGE KAYIT İŞLEMLERİ
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Kullanıcı girdilerini alın
    var username = document.getElementById("kadi").value;
    var password = document.getElementById("password").value;
   // var city = document.getElementById("city").value;
    //var district = document.getElementById("district").value;
    var userType = document.querySelector('input[name="userType"]:checked').value;
    var email = document.getElementById("email").value;
    //email doğrulaması
    function isValidEmail(email) {
        // Basit bir e-posta doğrulama regex'i kullanarak kontrol yapalım
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    // Kullanım örneği:
    const emailToCheck = "example@email.com";
    if (isValidEmail(emailToCheck)) {
        console.log("Geçerli bir e-posta adresi.");
    } else {
        console.log("Geçerli bir e-posta adresi değil.");
    }
    
var additionalInfo = {};
if (userType === "esnaf") {
    additionalInfo.companyName = document.getElementById("companyName").value;
    additionalInfo.taxNumber = document.getElementById("taxNumber").value;
    additionalInfo.email = document.getElementById("email").value;
} else if (userType === "musteri") {
    additionalInfo.customerName = document.getElementById("customerName").value;
    additionalInfo.customerSurname = document.getElementById("customerSurname").value;
    additionalInfo.customerEmail = document.getElementById("email").value;
}

if (kayitBasarili) {
    $('#successModal').modal('show'); // Başarılı mesajı
} else {
    $('#errorModal').modal('show'); // Başarısız mesajı
}

    function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        //var city = document.getElementById("city").value;
        //var district = document.getElementById("district").value;
         var email = document.getElementById("email").value;
         var userType = document.querySelector('input[name="userType"]:checked');
       
        if (!username || !password || !userType || email) { // || bu işaretin kullanılma sebebi hepsi doğruysa 
            alert("Eksik / Yanlış bilgi girişi gerçekleştirilmiştir.");
            return false;
        }

        if (userType.value === "esnaf") {
            var companyName = document.getElementById("companyName").value; // Company şirket veya esnaflar için kullanılır
            var taxNumber = document.getElementById("taxNumber").value;
            var email = document.getElementById("email").value;
            if (!companyName || !taxNumber || email) {
                alert("Eksik / Yanlış bilgi girişi gerçekleştirilmiştir.");
                return false;
            }
        } else if (userType.value === "musteri") {
            var customerName = document.getElementById("customerName").value; //customer müşteri bilgileri için kullanılır
            var customerSurname = document.getElementById("customerSurname").value;
            if (!customerName || !customerSurname || email) {
                alert("Eksik / Yanlış bilgi girişi gerçekleştirilmiştir.");
                return false;
            }
        }
        alert("Kayıt işleminiz başarıyla gerçekleştirilmiştir.");
        return true;
    }
     // Her kayıt için benzersiz bir anahtar oluşturun (UUID gibi bir şey kullanılabilir)
     var userKey = "user_" + Date.now(); // Tarih ve saat kullanarak benzersiz bir anahtar oluşturduk.
    // Kullanıcı bilgilerini JSON olarak saklayın
    var user = {
        username: username,
        password: password,
        //city: city,
        //district: district,
        userType: userType,
        additionalInfo: additionalInfo,
        email: email,
    };
    // JSON verisini localStorage'e kayıt eder.
    localStorage.setItem("user", JSON.stringify(user));
});
// VKN numarası veya kullanıcı adının daha önce kayıt edilip edilmediğini kontrol eden işlev// VKN numarası veya kullanıcı adının daha önce kayıt edilip edilmediğini kontrol eden işlev
/*function checkIfUniqueValueExists(userType, email, username, taxNumber) {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var User = JSON.parse(localStorage.getItem(key));
        if (storedUser) {
            if (userType === "esnaf" && storedUser.taxNumber === taxNumber) {
                return true; // VKN numarası zaten kayıtlı
            } else if (userType === "musteri" && storedUser.additionalInfo.customerEmail === email) {
                return true; // Eposta zaten kayıtlı
            } else if (userType === "musteri" && storedUser.username === username) {
                return true; // Kullanıcı adı zaten kayıtlı
            }
        }
    }
    return false; // VKN numarası, eposta veya kullanıcı adı kayıtlı değil
}*/

////////////////////////Kayıt formundaki submit 
$('#registrationForm').submit(function(event) {
    // Kayıt işlemleri burada yapılır
    // Başarılı kayıt durumunda:
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için formun default davranışını engelleyin
    showSuccessModal();
  });
  
  // Örnek: Kayıt işlemi başarılı olduğunda
var kayitBasarili = true; // Bu değeri gerçek sonuçlara göre değiştirin
document.getElementById('confirmPassword').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordError = document.getElementById('passwordError');

    // Şifrelerin birbiriyle uyumlu olup olmadığını kontrol eder.
    if (password === confirmPassword) { 
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Şifreler uyuşmuyor.'; // Şifre uyuşmadığını gösterir.
    }
});

function showErrorModal() {
    // Hatalı kayıt olduğunda çalışacak kod
    $('#errorModal').modal('show'); // Hata pop-up'ı göster
}