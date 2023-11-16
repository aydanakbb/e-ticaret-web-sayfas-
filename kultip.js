// KULLANICI TİPİNİ KONTROL EDEN FONKSİYON
function showAdditionalFields(userType) {
    var additionalFields = document.getElementById("additionalFields");
    // Ek alanları sıfırlayın
    additionalFields.innerHTML = '';
    if (userType === "esnaf") {
        // Esnaf seçildiğinde ekstra alanları görüntüle
        additionalFields.innerHTML = `
        <div class="form-group"> 
        <label for="companyName">Şirket Adı</label> 
        <input type="text" class="form-control" id="companyName" placeholder="Şirket Adı" minlength="8" maxlength="20" required> 
    
    </div> 
            <div class="form-group">
            <label for="taxNumber">Vergi Numarası</label>
            <input type="text" class="form-control" id="taxNumber" name="taxNumber" placeholder="Vergi Numarası" pattern="[0-9]{10}" min required>
        </div>
        <div class="form-group">
        <label for="email">E-posta </label>
        <input type="email" class="form-control" id="email" placeholder="E-posta"  required>
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
        <label for="email">E-posta </label>
        <input type="email" class="form-control" id="email" placeholder="E-posta"  required>
    </div>
    <div class="form-group"> 
    <label  for ="customerName"> Adınız</label> 
<input type="customerName" class="form-control" id="customerName" name="textOnlyInput" 
oninput="this.value = this.value.replace(/[^a-zA-Z\s]/g, '');" 
minlength="3" maxlength="10" placeholder="Adınız" required> </div>
            
            <div class="form-group"> 
                <label  for ="customerName"> Soyadınız </label> 
            <input type="customerSurname" class="form-control" id="customerSurname" customerSurname="textOnlyInput" 
            oninput="this.value = this.value.replace(/[^a-zA-Z\s]/g, '');" 
            minlength="3" maxlength="10" placeholder="Soyadınız" required> </div>
        `;
    }
    
}
