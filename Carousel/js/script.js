const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(slideIndex) {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.childElementCount;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.childElementCount) % slides.childElementCount;
    showSlide(currentSlide);
}

showSlide(currentSlide);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

setInterval(nextSlide, 5000); // Troca de slide automática a cada 5 segundos
