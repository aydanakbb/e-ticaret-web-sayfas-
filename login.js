// Giriş formunu dinleyin ve form gönderildiğinde "girisYap" fonksiyonunu çağırın
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();//Bu kod, "loginForm" adlı HTML formuna bir dinleyici ekler ve bu form gönderildiğinde bir işlem yapar. Bu işlemi yapmak için bir anonim fonksiyon kullanılır.

  // Giriş için kullanıcının girdiği bilgileri alın
  const email = document.getElementById('email').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Daha önce kaydedilmiş kullanıcı bilgilerini localStorage'den alın
  var eskiKullaniciJSON = localStorage.getItem('kullanici');
  var eskiKullaniciBilgileri = eskiKullaniciJSON ? JSON.parse(eskiKullaniciJSON) : [];

  // Kullanıcı adı ve şifreyi doğrula
  var girisBasarili = false;//Bu satır, giriş işleminin başarılı olup olmadığını takip etmek için bir bayrak (flag) oluşturur. Başlangıçta bu bayrak "false" olarak ayarlanır.
  for (var i = 0; i < eskiKullaniciBilgileri.length; i++) {//Bu satır, eski kullanıcı bilgileri üzerinde bir döngü oluşturur. 
                                                           //Bu döngü, kullanıcı adı ve şifre kombinasyonunu doğrulamak için kullanılır.
      if (email === eskiKullaniciBilgileri[i].email && loginPassword === eskiKullaniciBilgileri[i].password) {
          girisBasarili = true;
          break;
      }
//(yukarıdaki satır için)Bu satır, kullanıcının girdiği kullanıcı adı ve şifresini, eski kullanıcı bilgileri ile karşılaştırır.
//Eğer eşleşen bir kullanıcı adı ve şifre bulunursa, "girisBasarili" bayrağı "true" olarak ayarlanır ve döngüden çıkılır.
  }

  if (girisBasarili) {

  alert('Girişiniz başarıyla gerçekleştirilmiştir.');
      window.location.href = 'anasayfa.html'; // Giriş başarılıysa yönlendirilecek sayfa
  } else {
      alert('Yanlış / Eksik bilgi girişi gerçekleştirilmiştir.');
  }
  //Bu satırlar, girişin başarılı olup olmadığını kontrol eder. 
    //Eğer giriş başarılıysa, kullanıcıya bir bildirim gösterilir ve "index.html" adlı sayfaya yönlendirilir.
    // Aksi halde, kullanıcıya geçersiz kullanıcı adı veya şifre girdiğini belirten bir hata mesajı gösterilir.
});

 // Eğer çözümleme başarılıysa ve kullanıcının girdiği bilgiler ile localStorage'daki bilgiler eşleşiyorsa
 if (storedUser && loginemail === storedUser.email && loginPassword === storedUser.password) {
  // Kullanıcı tipine göre yönlendirme yap
  if (storedUser.userType === 'musteri') {
    // Müşteri kullanıcı, müşteri sayfasına yönlendir
    alert('Müşteri girişi başarılı!');
    window.location.href = 'anasayfamusteri.html';
  } else if (storedUser.userType === 'esnaf') {
    // Esnaf kullanıcı, esnaf sayfasına yönlendir
    alert('Esnaf girişi başarılı!');
    window.location.href = 'anasayfaesnaf.html';
  }
};

