
$(document).ready(function () {
    let cart = $(".cart");

    $(".cart-num").html(JSON.parse(localStorage.getItem("cartIdList").split(",")).length);
  
    if (!localStorage.getItem("cartIdList")) {
      localStorage.setItem("cartIdList", "[]");
    }
  
  
    cart.click(function () {
      const check = sessionStorage.getItem("userInfo");
      if (check) {
        window.location.href = "../html/giohang.html";
      } else {
        alert("Đăng nhập để mua hàng");
        window.location.href = "../html/dangnhap.html";
      }
    });
  });
  

