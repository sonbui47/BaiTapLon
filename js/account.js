
// Hàm kiểm tra thông tin người dùng và chuyển hướng
function checkUserInfoAndRedirect() {
    // Kiểm tra nếu thông tin người dùng không tồn tại trong sessionStorage
    if (sessionStorage.getItem("userInfo") === null) {
        document.getElementById("account")
      $(document).ready(function(){
        // Sự kiện click cho nút có id là "account"
        $("#account").click(function(){
            // Chuyển đến trang HTML khác (đặt URL mới)
            window.location.href = "../html/dangnhap.html";
        });
    });
    } else {
        document.getElementById("account").style.color = "red";
        document.getElementById("account").addEventListener("click", function() {
            window.location.href = "../html/thongtinuser.html";
        });
    }
}

// Gọi hàm ngay sau khi trang được load
checkUserInfoAndRedirect();


