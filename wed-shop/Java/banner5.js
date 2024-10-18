
let currentIndex5 = 0;
const slides5 = document.querySelectorAll('.slide-item3');
const totalSlides5 = slides5.length;
const slidesToShow5 = 3; // Số ảnh hiển thị mỗi lần

function showSlides5() {
    const slideShow5 = document.querySelector('.list-imgs5');
    slideShow5.style.transform = `translateX(-${currentIndex5 * (100 / slidesToShow5)}%)`;
}

function nextSlide5() {
    currentIndex5 += slidesToShow5;
    if (currentIndex5 >= totalSlides5) {
        currentIndex5 = 0;
    }
    showSlides5();
}

function prevSlide5() {
    currentIndex5 -= slidesToShow5;
    if (currentIndex5 < 0) {
        currentIndex5 = totalSlides5 - slidesToShow5;
    }
    showSlides5();
}

document.getElementById('nextBtn5').addEventListener('click', nextSlide5);
document.getElementById('prevBtn5').addEventListener('click', prevSlide5);

showSlides5();