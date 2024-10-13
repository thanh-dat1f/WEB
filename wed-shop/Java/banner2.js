let index = 0;
const images = document.querySelectorAll('.list-imgs2 img');
const totalImages = images.length;
const slideWrapper = document.querySelector('.list-imgs2');
const imgWidth = 250; // chiều rộng của mỗi ảnh
const imgGap = 10; // khoảng cách giữa các ảnh

document.getElementById('nextBtn2').addEventListener('click', () => {
  index++;
  if (index >= totalImages) {
    index = totalImages - 1; // Dừng lại ở ảnh cuối cùng
  }
  slideWrapper.style.transform = `translateX(${-index * (imgWidth + imgGap)}px)`;
});

document.getElementById('prevBtn2').addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = 0; // Dừng lại ở ảnh đầu tiên
  }
  slideWrapper.style.transform = `translateX(${-index * (imgWidth + imgGap)}px)`;
});
