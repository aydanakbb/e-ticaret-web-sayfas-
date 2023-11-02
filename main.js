
// İL-İLÇE SEÇİMİ FONKSİYONU
function populateDistricts() {
    var citySelect = document.getElementById("city");
    var districtSelect = document.getElementById("district");
    var selectedCity = citySelect.value;

    // İlçe seçimini sıfırla
    districtSelect.innerHTML = '<option value="">İlçe Seçin</option>';

    if (selectedCity === "istanbul") {
        // İstanbul ilçelerini ekleyin
        var istanbulDistricts = ["Bağcılar", "Esenler", "Yeşilyurt"];
        istanbulDistricts.forEach(function (district) {
            var option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    } else if (selectedCity === "ankara") {
        // Ankara ilçelerini ekleyin
        var ankaraDistricts = ["Etimesgut", "Sincan", "Yenimahalle"];
        ankaraDistricts.forEach(function (district) {
            var option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    } else if (selectedCity === "izmir") {
        // İzmir ilçelerini ekleyin
        var izmirDistricts = ["Konak", "Gaziemir", "Bucak"];
        izmirDistricts.forEach(function (district) {
            var option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    }
}



//LOCALSTORAGE KAYIT İŞLEMLERİ
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Kullanıcı girdilerini alın
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var city = document.getElementById("city").value;
    var district = document.getElementById("district").value;
    var userType = document.querySelector('input[name="userType"]:checked').value;


    var additionalInfo = {};
    if (userType === "esnaf") {
        additionalInfo.companyName = document.getElementById("companyName").value;
        additionalInfo.taxNumber = document.getElementById("taxNumber").value;
    } else if (userType === "musteri") {
        additionalInfo.customerName = document.getElementById("customerName").value;
        additionalInfo.customerSurname = document.getElementById("customerSurname").value;

    }
    if (kayitBasarili) {
        $('#successModal').modal('show');
      } else {

        $('#errorModal').modal('show');
      }
      
    function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var city = document.getElementById("city").value;
        var district = document.getElementById("district").value;
        var userType = document.querySelector('input[name="userType"]:checked');
    
        if (!username || !password || !city || !district || !userType) {
            alert("Eksik / Yanlış bilgi girişi gerçekleştirilmiştir.");
            return false;
        }
    
        if (userType.value === "esnaf") {
            var companyName = document.getElementById("companyName").value;
            var taxNumber = document.getElementById("taxNumber").value;
            if (!companyName || !taxNumber) {
                alert("Eksik / Yanlış bilgi girişi gerçekleştirilmiştir.");
                return false;
            }
        } else if (userType.value === "musteri") {
            var customerName = document.getElementById("customerName").value;
            var customerSurname = document.getElementById("customerSurname").value;
            if (!customerName || !customerSurname) {
                alert("Eksik / Yanlış bilgi girişi gerçekleştirilmiştir.");
                return false;
            }
        }
    
        alert("Kayıt işleminiz başarıyla gerçekleştirilmiştir.");
        return true;
        
    }
    
    // Kullanıcı bilgilerini JSON olarak saklayın
    var user = {
        username: username,
        password: password,
        city: city,
        district: district,
        userType: userType,
        additionalInfo: additionalInfo
    };

    // JSON verisini localStorage'e kaydedin
    localStorage.setItem("user", JSON.stringify(user));

    // Kayıt işlemi tamamlandıktan sonra başka bir sayfaya yönlendirme vb. işlemleri burada yapabilirsiniz.
    // Örneğin: window.location.href = "kayit-tamamlandi.html";
});

$(document).ready(function(){
	
	$('input[type=password]').keyup(function() {
		var pswd = $(this).val();
		
		//validate the length
		if ( pswd.length < 8 ) {
			$('#length').removeClass('valid').addClass('invalid');
		} else {
			$('#length').removeClass('invalid').addClass('valid');
		}
		
		//validate letter
		if ( pswd.match(/[A-z]/) ) {
			$('#letter').removeClass('invalid').addClass('valid');
		} else {
			$('#letter').removeClass('valid').addClass('invalid');
		}

		//validate capital letter
		if ( pswd.match(/[A-Z]/) ) {
			$('#capital').removeClass('invalid').addClass('valid');
		} else {
			$('#capital').removeClass('valid').addClass('invalid');
		}

		//validate number
		if ( pswd.match(/\d/) ) {
			$('#number').removeClass('invalid').addClass('valid');
		} else {
			$('#number').removeClass('valid').addClass('invalid');
		}
		
		//validate space
		if ( pswd.match(/[^a-zA-Z0-9\-\/]/) ) {
			$('#space').removeClass('invalid').addClass('valid');
		} else {
			$('#space').removeClass('valid').addClass('invalid');
		}
		
	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	});
	
});

// Kayıt formu submit işlemi
$('#registrationForm').submit(function(event) {
    // Kayıt işlemleri burada yapılır
    // Başarılı kayıt durumunda:
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için formun default davranışını engelleyin
    showSuccessModal();
  });
  
  // Örnek: Kayıt işlemi başarılı olduğunda
var kayitBasarili = true; // Bu değeri gerçek sonuçlara göre değiştirin

//Giriş işlemleri için


document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    var userType = document.querySelector('input[name="userType"]:checked').value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.querySelector('input[name="remember"]').checked;

    // Form verilerini işleme veya localStorage'a kaydetme işlemleri burada yapılabilir

    if (userType && username && password) {
        // Başarılı kayıt popup'ı göster
        $('#successModal').modal('show');

        // Eğer "Beni Hatırla" seçeneği işaretliyse, localStorage'a kaydet
        if (rememberMe) {
            localStorage.setItem("userType", userType);
            localStorage.setItem("username", username);
        }
    } else {
        // Hata popup'ı göster
        $('#errorModal').modal('show');
    }
});
