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