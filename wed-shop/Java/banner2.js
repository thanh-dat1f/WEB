let currentIndex = 0;
const imgs = document.querySelectorAll('.list-imgs2 > div');
const totalImgs = imgs.length;

document.getElementById('nextBtn2').onclick = function () {
  nextImage();
};

document.getElementById('prevBtn2').onclick = function () {
  prevImage();
};

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImgs; // Tăng chỉ số và tuần hoàn về 0 nếu vượt quá
  updateSlideShow();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImgs) % totalImgs; // Giảm chỉ số và tuần hoàn
  updateSlideShow();
}

function updateSlideShow() {
  const offset = -currentIndex * (250 + 10); // 250 width + 10 gap
  document.querySelector('.list-imgs2').style.transform = `translateX(${offset}px)`;
}
