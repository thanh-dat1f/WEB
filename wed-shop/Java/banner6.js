const container = document.querySelector('.notification-list');
const notifications = Array.from(container.children);
const visibleItems = 3; // Số lượng thông báo hiển thị mỗi lần
const notificationWidth = 260; // Chiều rộng của mỗi thông báo (phù hợp với CSS)
const slideAmount = visibleItems * notificationWidth; // Khoảng cách dịch chuyển mỗi lần
let currentOffset = 0;

function updateSlide() {
    container.style.transform = `translateX(${currentOffset}px)`;
}

document.getElementById('next-button').addEventListener('click', () => {
    if (Math.abs(currentOffset) + slideAmount < notifications.length * notificationWidth) {
        currentOffset -= slideAmount;
    } else {
        currentOffset = 0; // Quay lại đầu nếu hết phần tử
    }
    updateSlide();
});

document.getElementById('previous-button').addEventListener('click', () => {
    if (currentOffset < 0) {
        currentOffset += slideAmount;
    } else {
        currentOffset = -(notifications.length * notificationWidth - slideAmount); // Đến phần tử cuối
    }
    updateSlide();
});
