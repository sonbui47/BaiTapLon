const product = document.querySelector(".product");
const cartIdList = [];
let products = [];

// Sử dụng Fetch API để lấy dữ liệu từ file JSON
fetch("../json/data.json")
  .then(response => response.json())
  .then(data => {
    products = data;

    products.forEach(productItem => {
      product.innerHTML += `
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
  })
  .catch(error => console.error('Error fetching data:', error));



function setProduct(productId) {
  sessionStorage.setItem("productId", `[${productId}]`);
}
