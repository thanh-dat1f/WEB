let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.slide-item1');
const totalSlides3 = slides3.length;
const slidesToShow3 = 3;

function showSlides3() {
    const slideShow3 = document.querySelector('.list-imgs3');
    slideShow3.style.transform = `translateX(-${currentIndex3 * (100 / slidesToShow3)}%)`;
}

function nextSlide3() {
    currentIndex3 += slidesToShow3;
    if (currentIndex3 >= totalSlides3) {
        currentIndex3 = 0;
    }
    showSlides3();
}

function prevSlide3() {
    currentIndex3 -= slidesToShow3;
    if (currentIndex3 < 0) {
        currentIndex3 = totalSlides3 - slidesToShow3;
    }
    showSlides3();
}

document.getElementById('nextBtn3').addEventListener('click', nextSlide3);
document.getElementById('prevBtn3').addEventListener('click', prevSlide3);

showSlides3();