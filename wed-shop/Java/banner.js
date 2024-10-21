let currentIndex = 0;
const images = document.querySelectorAll('.list-imgs img');
const totalImages = images.length;

function showImage(index) {
    const offset = -index * 100;
    document.querySelector('.list-imgs').style.transform = `translateX(${offset}%)`;
}

document.getElementById('nextBtn').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

// Tự động chuyển ảnh mỗi 3 giây
setInterval(function () {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}, 3000); // Thay đổi 3000 thành khoảng thời gian bạn muốn (đơn vị: miligiây)
