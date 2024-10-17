let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.slide-item');
const totalSlides2 = slides2.length;
const slidesToShow = 3;

function showSlides2() {
    const slideShow2 = document.querySelector('.list-imgs2');
    slideShow2.style.transform = `translateX(-${currentIndex2 * (100 / slidesToShow)}%)`;
}

function nextSlide() {
    currentIndex2 += slidesToShow;
    if (currentIndex2 > totalSlides2 - slidesToShow) {
        currentIndex2 = 0;
    }
    showSlides2();
}

function prevSlide() {
    currentIndex2 -= slidesToShow;
    if (currentIndex2 < 0) {
        currentIndex2 = totalSlides2 - slidesToShow;
    }
    showSlides2();
}

document.getElementById('nextBtn2').addEventListener('click', nextSlide);
document.getElementById('prevBtn2').addEventListener('click', prevSlide);

// Hiển thị slide đầu tiên
showSlides2();
