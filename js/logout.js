document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra xem có thông tin người dùng trong sessionStorage hay không
  if (sessionStorage.getItem("userInfo") === null) {
    // Nếu không có, hiển thị nút Sign in và Register
    document.querySelector(".function").innerHTML = `
      <div class="sign"><a href="./login.html">Sign in</a></div>
      <div class="regis active"><a href="./register.html">Register</a></div>`;
  } else {
    // Nếu có, hiển thị avatar và nút Sign out
    document.querySelector(".function").innerHTML = `
      <a href="#" class="avatar"><img src="../assets/icons/avatar.png" alt="" /></a>
      <ul class="dropdown_func">
        <li class="sign_out"><a href="#">Sign out <i class="bi bi-box-arrow-right"></i></a></li>
      </ul>`;

    // Thêm sự kiện cho nút Sign out
    document.querySelector(".sign_out").addEventListener("click", function (e) {
      e.preventDefault();

      // Xóa thông tin người dùng từ sessionStorage
      sessionStorage.removeItem("userInfo");

      // Tải lại trang
      location.reload();
    });
  }
});

