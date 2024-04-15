
    // Hàm xử lý Tên người dùng
    function validateUsername() {
    var txtUsername = document.getElementById('txtUsername');
    var errorUsername = document.getElementById('errorUsername');
    var pattern = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()-_+=<>?.,;:'"/\\[\]{}|`~]+$/;

    if (txtUsername.value.trim() == '') {
        errorUsername.innerHTML = "Vui lòng nhập!";
        return false;
    } else if (!pattern.test(txtUsername.value.trim())) {
        errorUsername.innerHTML = "Bắt đầu bằng chữ cái, có ký tự số, Không có khoảng trắng";
        return false;
    } else {
        errorUsername.innerHTML = '(*)';
        return true;
    }
    }

    // Hàm xử lý Mật khẩu
    function validatePassword() {
    var passwordField = document.getElementById('txtpassword');
    var errorPassword = document.getElementById('err_pass');
    var passwordPattern = /^[A-Za-z0-9(!@#$%^&*()_ )]{8,}$/;

    if (passwordField.value.trim() == '') {
        errorPassword.innerHTML = "Vui lòng nhập!";
        return false;
    } else if (!passwordPattern.test(passwordField.value.trim())) {
        errorPassword.innerHTML = "Yêu cầu ít nhất 8 ký tự, có số, chữ cái viết hoa, và ký tự đặc biệt.";
        return false;
    } else {
        errorPassword.innerHTML = '(*)';
        return true;
    }
    }

    // Hàm xử lý Xác nhận Mật khẩu
    function validateConfirmPassword() {
    var confirmPasswordField = document.getElementById('txtconfirmPassword');
    var errorConfirmPassword = document.getElementById('err_confirmPassword');
    var passwordField = document.getElementById('txtpassword');

    if (confirmPasswordField.value.trim() !== passwordField.value.trim()) {
        errorConfirmPassword.innerHTML = "Mật khẩu không khớp";
        return false;
    } else {
        errorConfirmPassword.innerHTML = '(*)';
        return true;
    }
    }

    // Hàm xử lý Họ tên
    function validateFullName() {
    var fullNameField = document.getElementById('txtfullName');
    var errorFullName = document.getElementById('err_fullName');
    var namePattern = /^([A-Z][a-z]+) ([A-Z][a-z]+)$)/;

    if (fullNameField.value.trim() == '') {
    errorFullName.innerHTML = "Vui lòng nhập Họ và Tên!";
    return false;
    } else if (!namePattern.test(fullNameField.value.trim())) {
        errorFullName.innerHTML = "Họ tên phải bắt đầu bằng chữ in hoa và ít nhất Họ và Tên.";
        return false;
    } else {
        errorFullName.innerHTML = '(*)';
        return true;
    }
    }

    // Hàm xử lý Ngày sinh
    function validateDateOfBirth() {
    var dobField = document.getElementById('dob');
    var err_dob = document.getElementById('err_dob');
    var dob = new Date(dobField.value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();

    if (age < 16) {
        err_dob.innerHTML = "Bạn phải đủ 16 tuổi trở lên.";
        return false;
    } else {
        err_dob.innerHTML = '(*)';
        return true;
    }
    }

    // Hàm xử lý Địa chỉ
    function validateAddress() {
    var addressField = document.getElementById('address');
    var err_address = document.getElementById('err_address');

    if (addressField.value.trim() === '') {
        err_address.innerHTML = "Vui lòng nhập địa chỉ!";
        return false;
    } else {
        err_address.innerHTML = '(*)';
        return true;
    }
    }

    // Hàm xử lý Số điện thoại
    function validatePhoneNumber() {
    var phoneField = document.getElementById('phone');
    var errorPhone = document.getElementById('err_phone');
    var phonePattern = /\d{10}/
    ;

    if (phoneField.value.trim() === '' || !phonePattern.test(phoneField.value)) {
        errorPhone.innerHTML = "Số điện thoại không hợp lệ!";
        return false;
    } else {
        errorPhone.innerHTML = '(*)';
        return true;
    }
    }

    // Hàm xử lý Email
    function validateEmail() {
    var emailField = document.getElementById('email');
    var err_email = document.getElementById('err_email');
    var emailPattern = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailField.value.trim() === '' || !emailPattern.test(emailField.value)) {
        err_email.innerHTML = "Địa chỉ email không hợp lệ!";
        return false;
    } else {
        err_email.innerHTML = '(*)';
        return true;
    }
    }

    // Bắt sự kiện khi mất focus cho từng trường
    document.getElementById('txtUsername').addEventListener('blur', validateUsername);
    document.getElementById('txtpassword').addEventListener('blur', validatePassword);
    document.getElementById('txtconfirmPassword').addEventListener('blur', validateConfirmPassword);
    document.getElementById('txtfullName').addEventListener('blur', validateFullName);
    document.getElementById('dob').addEventListener('blur', validateDateOfBirth);
    document.getElementById('address').addEventListener('blur', validateAddress);
    document.getElementById('phone').addEventListener('blur', validatePhoneNumber);
    document.getElementById('email').addEventListener('blur', validateEmail);

    function register() {
        if (
            !validateUsername() ||
            !validatePassword() ||
            !validateConfirmPassword() ||
            !validateFullName() ||
            !validateDateOfBirth() ||
            !validateAddress() ||
            !validatePhoneNumber() ||
            !validateEmail()
            ) {
            // Nếu có ít nhất một điều kiện không thỏa mãn, thực hiện mã nếu cần
                alert("Có lỗi xảy ra. Vui lòng kiểm tra lại thông tin.");
                return false;
            }
        var username = document.getElementById("txtUsername").value;
        var password = document.getElementById("txtpassword").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        var ngaysinh = document.getElementById("dob").value;
        var fullName = document.getElementById("txtfullName").value;
        let sex = ""
        var genderElements = document.getElementsByName("gender");
        for (var i = 0; i < genderElements.length; i++) {
            if (genderElements[i].checked) {
                sex = genderElements[i].value;
                break;
            }
        }
        if (sex == ""){
            alert("Bạn đã không chọn giới tính")
            return false;
        }
        // Kiểm tra xem tên người dùng đã tồn tại chưa
        if (localStorage.getItem(username)) {
            alert("Tên người dùng đã tồn tại. Hãy chọn tên khác.");
            return;
        }

        // Lưu thông tin người dùng vào localStorage
        var user = {
            username: username,
            password: password,
            name: fullName,
            sex: sex,
            phone: phone,
            address: address,
            email: email,
            ngaysinh: ngaysinh
        };

        localStorage.setItem(username, JSON.stringify(user));
        window.location.href = "../html/dangnhap.html";
        alert("Đăng ký thành công!");
        return true;

    }
