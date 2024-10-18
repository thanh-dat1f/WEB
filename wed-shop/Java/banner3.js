let currentIndex = 0;
const items = document.querySelectorAll('.slide-item1');
const totalItems = items.length;
const itemsPerSlide = 3;

function showSlides(index) {
    items.forEach((item, i) => {
        item.style.display = (i >= index && i < index + itemsPerSlide) ? 'block' : 'none';
    });
}

document.getElementById('nextBtn3').addEventListener('click', function () {
    currentIndex += itemsPerSlide;
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    showSlides(currentIndex);
});

document.getElementById('prevBtn3').addEventListener('click', function () {
    currentIndex -= itemsPerSlide;
    if (currentIndex < 0) {
        currentIndex = totalItems - itemsPerSlide;
    }
    showSlides(currentIndex);
});

showSlides(currentIndex);