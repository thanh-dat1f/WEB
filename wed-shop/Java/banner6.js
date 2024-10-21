let currentIndex = 0;
const slides = document.querySelectorAll('.notification-item');
const totalSlides = slides.length;
const slidesToShow = 3; // Hiển thị 3 thông báo một lần
const slideWidth = 100 / slidesToShow; // Tính phần trăm chiều rộng cho mỗi thông báo

document.querySelector('.notification-list').style.width = `${totalSlides * slideWidth}%`; // Cài đặt chiều rộng cho danh sách

// Hàm hiển thị thông báo hiện tại
function showSlides() {
    const list = document.querySelector('.notification-list');
    list.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// Nút chuyển tiếp
function nextSlide() {
    if (currentIndex < totalSlides - slidesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0; // Quay lại đầu nếu đã đến cuối danh sách
    }
    showSlides();
}

// Nút quay lại
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - slidesToShow; // Quay lại cuối danh sách nếu đang ở đầu
    }
    showSlides();
}

// Gắn sự kiện click cho nút điều hướng
document.getElementById('next-button').addEventListener('click', nextSlide);
document.getElementById('previous-button').addEventListener('click', prevSlide);

// Hiển thị slide đầu tiên khi tải trang
showSlides();
