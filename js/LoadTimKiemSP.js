
// Lấy kết quả tìm kiếm từ localStorage
const searchResults = JSON.parse(localStorage.getItem('searchResults'));

// Kiểm tra và hiển thị kết quả tìm kiếm
if (searchResults) {
    const productContainer = document.querySelector('.productSearch'); // Thẻ chứa sản phẩm trên trang timkiemsanpham.html

    // Xóa tất cả sản phẩm hiện có
    productContainer.innerHTML = '';

    // Hiển thị kết quả tìm kiếm
    searchResults.forEach(productItem => {
        productContainer.innerHTML += `
        <div class="product-item text-center col-lg-3 col-md-4 col-12">
              <div class="product-item-image-wrapper">
              <a 
              href="../html/chitietsp.html"
              style="display: block; height: 60%"
              onclick="setProduct(${productItem.id})"
              >
              <img class="product-item-image" src=${productItem.productImage} alt="">
              </a>
          </div>
            
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h5 class="p-name">${productItem.productName}</h5>
            <h4 class="p-price">${productItem.productPriceCurrent}</h4>
            <button class="btn btncart cart-btn w-75" onclick="addCartIdList(${productItem.id})"><i class="fa-solid fa-cart-shopping"></i></button>
          
        </div>`;
    });
}
function setProduct(productId) {
  sessionStorage.setItem("productId", `[${productId}]`);
}
