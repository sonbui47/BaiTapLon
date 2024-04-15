

const id = JSON.parse(sessionStorage.getItem("productId"))[0];

const productDetails = document.querySelector(".product_details");

fetch("../json/data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const products = data;
    const product = products.find(product => product.id === id);

    if (product) {
      productDetails.innerHTML += `
            <div class="row mt-5">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 pb-2" src=${product.productImage}  id="MainImg" alt="">
            </div>
            <div class="col-lg-5 col-md-12 col-12">
              <h6> Home / Trang Sức</h6>
              <h3 class="py-4">${product.productName}</h3>
              <h2>${product.productPriceCurrent}</h2>
               
      
                <input type="number" name="soluong" id="soluong" value="1">
                <button class="buy-btn btncart"  onclick="addCartIdList(${product.id})">Thêm vào giỏ</button>
                <h4 class="mt-5 mb-5">Mô tả sản phẩm</h4>
                <span>
                ${product.description}
                </span>
            </div>
        </div>
      `;

    } else {
      productDetails.innerHTML = '<h2>Sản phẩm không tồn tại.</h2>';
    }
  })







