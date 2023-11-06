// KULLANICI TİPİNİ KONTROL EDEN FONKSİYON
//41-90 arasındaydı
function showAdditionalFields(userType) {
    var additionalFields = document.getElementById("additionalFields");
    
    // Ek alanları sıfırlayın
    additionalFields.innerHTML = '';
      
    if (userType === "esnaf") {
        // Esnaf seçildiğinde ekstra alanları görüntüle
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="companyName">Şirket Adı</label>
                <input type="text" class="form-control" id="companyName" placeholder="Şirket Adı"  minlenght="8" maxlenght"20" required>
            </div>
            <div class="form-group">
                <label for="taxNumber">Vergi Numarası</label>
                <input type="number" class="form-control" id="taxNumber" placeholder="Vergi Numarası" minlenght="10" maxlenght=10 required>
            </div>
            
        `;
    } else if (userType === "musteri") {
        // Müşteri seçildiğinde ekstra alanları görüntüle
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="customerName">Adınız</label>
                <input type="text" class="form-control" id="customerName" placeholder="Adınız"  minlenght="3" maxlenght"10" required>
            </div>
            <div class="form-group">
                <label for="customerSurname">Soyadınız</label>
                <input type="text" class="form-control" id="customerSurname" placeholder="Soyadınız" minlenght="3" maxlenght"15" required>
            </div>
        `;
    }
    // Ek alanları görüntülemek için "block" olarak ayarlayın
    additionalFields.style.display = "block";
    if (userType === "musteri") {
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="customerName">Adınız</label>
                <input type="text" class="form-control" id="customerName" placeholder="Adınız" minlength="3" maxlength="10">
            </div>
            <div class="form-group">
                <label for "customerSurname">Soyadınız</label>
                <input type="text" class="form-control" id="customerSurname" placeholder="Soyadınız" minlength="3" maxlength="15">
            </div>
           

        `;
    }
    
}
