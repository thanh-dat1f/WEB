document.addEventListener("DOMContentLoaded", () => {
    let currentIndex2 = 0;
    const imgsToShow2 = 3; // Số lượng hình muốn hiển thị cùng lúc
    const totalImgs2 = document.querySelectorAll('.list-imgs2 a').length; // Tổng số thẻ <a>
    const imgWidth2 = 250 + 10; // Chiều rộng mỗi hình cộng với khoảng cách (gap)

    // Nút chuyển ảnh tiếp theo
    document.getElementById('nextBtn2').addEventListener('click', () => {
        currentIndex2 = (currentIndex2 + 1) % totalImgs2; // Tăng chỉ số và tuần hoàn
        updateSlider();
    });

    // Nút quay lại ảnh trước đó
    document.getElementById('prevBtn2').addEventListener('click', () => {
        currentIndex2 = (currentIndex2 - 1 + totalImgs2) % totalImgs2; // Giảm chỉ số và tuần hoàn
        updateSlider();
    });

    function updateSlider() {
        const offset = currentIndex2 * imgWidth2; // Tính toán độ lệch
        document.querySelector('.list-imgs2').style.transform = `translateX(-${offset}px)`;
    }
});
