let currentIndex4 = 0;
const slides4 = document.querySelectorAll('.slide-item2');
const totalSlides4 = slides4.length;
const slidesToShow4 = 3;  // Số ảnh hiển thị mỗi lần

function showSlides4() {
    const slideShow4 = document.querySelector('.list-imgs4');
    slideShow4.style.transform = `translateX(-${currentIndex4 * (100 / slidesToShow4)}%)`;
}

function nextSlide4() {
    currentIndex4 += slidesToShow4;
    if (currentIndex4 >= totalSlides4) {
        currentIndex4 = 0;
    }
    showSlides4();
}

function prevSlide4() {
    currentIndex4 -= slidesToShow4;
    if (currentIndex4 < 0) {
        currentIndex4 = totalSlides4 - slidesToShow4;
    }
    showSlides4();
}

document.getElementById('nextBtn4').addEventListener('click', nextSlide4);
document.getElementById('prevBtn4').addEventListener('click', prevSlide4);

showSlides4();