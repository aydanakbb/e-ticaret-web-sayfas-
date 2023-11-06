document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;
  
  for (var i = 0; i < localStorage.length; i++) { 
    var key = localStorage.key(i);
    var storedUser = JSON.parse(localStorage.getItem(key));
    if (storedUser) {
      if (loginUsername === storedUser.username && loginPassword === storedUser.password) {
        if (storedUser.userType === 'musteri') {
          // Müşteri kullanıcı, müşteri sayfasına yönlendir
          alert('Müşteri girişi başarılı!');
          window.location.href = 'anasayfamusteri.html';
        } else if (storedUser.userType === 'esnaf') {
          // Esnaf kullanıcı, esnaf sayfasına yönlendir
          alert('Esnaf girişi başarılı!');
          window.location.href = 'anasayfaesnaf.html';
        }
        break; // Döngüyü sonlandır
      } else {
        alert('Giriş başarısız! Hatalı şifre veya kullanıcı adı.');
      }
    }
  }
});
