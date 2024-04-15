const searchCayPhongThuy = document.getElementById('searchCayPhongThuy');
const searchTrangSuc = document.getElementById('searchTrangSuc');
const searchTuong = document.getElementById('searchTuong');
const searchSach = document.getElementById('searchSach');

// const searchButton = document.querySelector('.search_icons'); // nút tìm kiếm

searchCayPhongThuy.addEventListener('click', function() {
    const searchValue = "Cây phong thuỷ"; // Lấy giá trị nhập vào và chuyển thành chữ thường

    // Đọc dữ liệu từ file JSON
    fetch('../json/data.json')
        .then(response => response.json())
        .then(data => {
            // Tìm kiếm sản phẩm theo tên
            const results = data.filter(product => product.productName.toLowerCase().includes(searchValue));

            // Lưu kết quả tìm kiếm vào localStorage
            localStorage.setItem('searchResults', JSON.stringify(results));

            // Chuyển hướng sang trang mới
            window.location.href = '../html/timkiemsp.html';
        })
        .catch(error => console.error('Lỗi:', error));
});

searchTrangSuc.addEventListener('click', function() {
    const searchValue = "trang sức"; // Lấy giá trị nhập vào và chuyển thành chữ thường

    // Đọc dữ liệu từ file JSON
    fetch('../json/data.json')
        .then(response => response.json())
        .then(data => {
            // Tìm kiếm sản phẩm theo tên
            const results = data.filter(product => product.productName.toLowerCase().includes(searchValue));

            // Lưu kết quả tìm kiếm vào localStorage
            localStorage.setItem('searchResults', JSON.stringify(results));

            // Chuyển hướng sang trang mới
            window.location.href = '../html/timkiemsp.html';
        })
        .catch(error => console.error('Lỗi:', error));
});

searchTuong.addEventListener('click', function() {
    const searchValue = "Tượng"; // Lấy giá trị nhập vào và chuyển thành chữ thường

    // Đọc dữ liệu từ file JSON
    fetch('../json/data.json')
        .then(response => response.json())
        .then(data => {
            // Tìm kiếm sản phẩm theo tên
            const results = data.filter(product => product.productName.toLowerCase().includes(searchValue));

            // Lưu kết quả tìm kiếm vào localStorage
            localStorage.setItem('searchResults', JSON.stringify(results));

            // Chuyển hướng sang trang mới
            window.location.href = '../html/timkiemsp.html';
        })
        .catch(error => console.error('Lỗi:', error));
});

searchSach.addEventListener('click', function() {
    const searchValue = "Sách"; // Lấy giá trị nhập vào và chuyển thành chữ thường

    // Đọc dữ liệu từ file JSON
    fetch('../json/data.json')
        .then(response => response.json())
        .then(data => {
            // Tìm kiếm sản phẩm theo tên
            const results = data.filter(product => product.productName.toLowerCase().includes(searchValue));

            // Lưu kết quả tìm kiếm vào localStorage
            localStorage.setItem('searchResults', JSON.stringify(results));

            // Chuyển hướng sang trang mới
            window.location.href = '../html/timkiemsp.html';
        })
        .catch(error => console.error('Lỗi:', error));
});