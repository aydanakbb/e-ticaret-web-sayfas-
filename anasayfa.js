let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 1000); // Otomatik olarak 3 saniyede bir kaydır

document.getElementById("product1").addEventListener("click", function() {
    window.location.href = "product.html";
});

//açılır pencere


