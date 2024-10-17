let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.slide-item1'); // Cập nhật selector
const totalSlides3 = slides3.length;
const slidesToShow = 3;

function showSlides3() {
    const slideShow3 = document.querySelector('.list-imgs3');
    const offset = currentIndex3 * (250 + 10); // 250px (width) + 10px (gap)
    slideShow3.style.transform = `translateX(-${offset}px)`; // Di chuyển slide
}

function nextSlide() {
    currentIndex3 += 1;
    if (currentIndex3 > totalSlides3 - slidesToShow) {
        currentIndex3 = 0; // Quay lại slide đầu
    }
    showSlides3();
}

function prevSlide() {
    currentIndex3 -= 1;
    if (currentIndex3 < 0) {
        currentIndex3 = totalSlides3 - slidesToShow; // Quay về slide cuối
    }
    showSlides3();
}

document.getElementById('nextBtn3').addEventListener('click', nextSlide);
document.getElementById('prevBtn3').addEventListener('click', prevSlide);

// Hiển thị slide đầu tiên
showSlides3();
