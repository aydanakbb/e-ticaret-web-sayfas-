document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      alert('Giriş başarılı!');
      window.location.href = 'index.html';
    } else {
      alert('Geçersiz kullanıcı adı veya şifre.');
    }
  });
  