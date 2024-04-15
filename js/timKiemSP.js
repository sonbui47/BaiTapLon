
const searchInput = document.getElementById('search_input');
const searchButton = document.querySelector('.search_icons'); // nút tìm kiếm

searchButton.addEventListener('click', function() {
    const searchValue = searchInput.value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường

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

