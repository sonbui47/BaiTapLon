$(document).ready(function () {
    // Sử dụng fetch để đọc file JSON
    fetch("../json/data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(datajson => {
            // Lấy giá trị từ localStorage
            const listCartId = JSON.parse(localStorage.getItem("cartIdList"));
            const cartItemsContainer = $("#danhsach");

            // Kiểm tra xem có giá trị không
            if (listCartId && listCartId.length > 0) {

                // Duyệt qua mỗi ID trong listCartId
                listCartId.forEach((id, index) => {
                    // Tìm sản phẩm trong datajson có ID tương ứng
                    const idNumber = parseInt(id);
                    const product = datajson.find(product => product.id == idNumber);

                    // Kiểm tra xem sản phẩm có tồn tại không
                    if (product) {
                        // Tạo một dòng mới trong bảng
                        const tableRow = $("<tr>").html(
                            `<td>${danhsach.rows.length + 1}</td>
                            <td><img class="img_productcart" src="${product.productImage}" alt="Hình ảnh sản phẩm"></td>
                            <td>${product.productName}</td>
                            <td id="price_${id}" >${product.productPriceCurrent}</div></td>
                            <td><input type="number" value="1" min="1" id="quantity_${id}" onchange="updateTotal(${id})"></td>
                            <td id="total_${id}">${product.productPriceCurrent}</td>
                            <td><button onclick="removeProduct(${id})">Xóa</button></td>`
                        );

                        // Thêm dòng vào bảng
                        cartItemsContainer.append(tableRow);
                    }
                });
                calculateTotal();
            } else {
                // Nếu không có giá trị, hiển thị thông báo
                $(".cart-num").html(0)
                cartItemsContainer.text("Không có sản phẩm trong giỏ hàng");
            }
        })
        .catch(error => console.error('Error:', error));
});

// Hàm cập nhật tổng khi thay đổi số lượng
function updateTotal(id) {
    const quantity = parseInt($(`#quantity_${id}`).val());
    const productPrice = parseInt($(`#price_${id}`).text().replace('$', '')); // Lấy giá và chuyển đổi sang số
    const total = quantity * productPrice;
    $(`#total_${id}`).html(total + " $") // Hiển thị giá trị mới
    // $(`#total_${id}`).text(`${total}$`); // Hiển thị giá trị mới
    calculateTotal();
}

function calculateTotal() {
    let total = 0;

    // Duyệt qua tất cả các dòng trong bảng
    $('[id^="total_"]').each(function() {
        const value = parseFloat($(this).text().replace('$', ''));
        total += isNaN(value) ? 0 : value;
    });

    // Hiển thị tổng
    // $('#tongTien').text(`$${total}`);
    $('#tongTien').html(total + " $");

}
function removeProduct(id) {
    // Loại bỏ dòng trong bảng có id tương ứng
    $(`#total_${id}`).closest('tr').remove();
    // Xóa id khỏi listCartId trong localStorage
    removeFromCartIdList(id);

    // Cập nhật tổng giá trị
    calculateTotal();
}

function removeFromCartIdList(id) {
    // Lấy giá trị từ localStorage
    const listCartId = JSON.parse(localStorage.getItem("cartIdList"));

    // Loại bỏ id khỏi listCartId
    const updatedList = listCartId.filter(itemId => itemId != id);

    // Cập nhật lại localStorage với danh sách mới
    localStorage.setItem("cartIdList", JSON.stringify(updatedList));
    $(".cart-num").html(JSON.parse(localStorage.getItem("cartIdList").split(",")).length);
}
$(".cart-num").html(JSON.parse(localStorage.getItem("cartIdList").split(",")).length);