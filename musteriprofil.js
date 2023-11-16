document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    // Alan kontrolleri
    if (password !== confirmPassword) {
        alert("Parolalar uyuşmuyor. Lütfen kontrol edin.");
    } else {
        // Profil güncelleme işlemleri burada gerçekleştirilir

        // Başarılı güncelleme durumunda kullanıcıya bilgilendirici pop-up gösterilebilir
        alert("Güncelleme işleminiz başarıyla gerçekleştirilmiştir.");

        // Güncellenen bilgileri localStorage'e kaydetme
        var updatedUserData = {
            name: name,
            surname: surname,
            email: email,
            address: address
        };

        localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
});


document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    // Alan kontrolleri
    if (password !== confirmPassword) {
        showErrorPopup("Parolalar uyuşmuyor. Lütfen kontrol edin.");
    } else {
        // Profil güncelleme işlemleri burada gerçekleştirilir

        // Başarılı güncelleme durumunda kullanıcıya bilgilendirici pop-up gösterilebilir
        showSuccessPopup("Güncelleme işleminiz başarıyla gerçekleştirilmiştir.");

        // Güncellenen bilgileri localStorage'e kaydetme
        var updatedUserData = {
            name: name,
            surname: surname,
            email: email,
            address: address
        };

        localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
});
//güncelleme başarılı pop up
function showErrorPopup(message) {
    var errorPopup = document.createElement("div");
    errorPopup.className = "popup error-popup";
    errorPopup.innerHTML = message;
    document.body.appendChild(errorPopup);

    setTimeout(function() {
        errorPopup.remove();
    }, 3000);
}

function showSuccessPopup(message) {
    var successPopup = document.createElement("div");
    successPopup.className = "popup success-popup";
    successPopup.innerHTML = message;
    document.body.appendChild(successPopup);

    setTimeout(function() {
        successPopup.remove();
    }, 3000);
}
