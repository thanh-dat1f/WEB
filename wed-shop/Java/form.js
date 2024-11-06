function showAlert() {
    // Lấy giá trị từ các trường nhập liệu
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Kiểm tra xem các trường đã được nhập đầy đủ chưa
    if (name && email) {
        alert('Cảm ơn bạn đã gửi phản hồi!');

        // Làm trống các trường sau khi gửi
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('info').value = '';
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}