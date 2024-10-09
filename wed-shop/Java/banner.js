let currentIndex = 0;
const images = document.querySelectorAll('.list-imgs img');
const totalImages = images.length;

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    document.querySelector('.list-imgs').style.transform = `translateX(${offset}%)`;
}

let autoSlide = setInterval(() => changeSlide(1), 3000);

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    changeSlide(-1);
    autoSlide = setInterval(() => changeSlide(1), 3000);
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide);
    changeSlide(1);
    autoSlide = setInterval(() => changeSlide(1), 3000);
});