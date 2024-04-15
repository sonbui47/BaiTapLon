// Hàm xử lý Họ
function validateFirstName() {
    var txtfname = document.getElementById('txtfname');
    var err_fname = document.getElementById('err_fname');
    var pattern = /^[A-Z][a-z]*$/;

    if (txtfname.value.trim() == '') {
        err_fname.innerHTML = "Vui lòng nhập!";
        return false
    } else if (!pattern.test(txtfname.value.trim())) {
        err_fname.innerHTML = "Họ bắt đầu bằng ký tự chữ hoa";
        return false
    } else {
        err_fname.innerHTML = '(*)';
        return true;
    }
}

// Hàm xử lý Tên
function validateLastName() {
    var txtlname = document.getElementById('txtlname');
    var err_lname = document.getElementById('err_lname');
    var pattern = /^[A-Z][a-z]*$/;

    if (txtlname.value.trim() == '') {
        err_lname.innerHTML = "Vui lòng nhập!";
        return false
    } else if (!pattern.test(txtlname.value.trim())) {
        err_lname.innerHTML = "Tên bắt đầu bằng ký tự chữ hoa";
        return false
    } else {
        err_lname.innerHTML = '(*)';
        return true;
    }
}

// Hàm xử lý Số điện thoại
function validatePhoneNumber() {
    var txtsdt = document.getElementById('txtsdt');
    var err_sdt = document.getElementById('err_sdt');
    var pattern = /^0[0-9]{9}$/;

    if (txtsdt.value.trim() == '') {
        err_sdt.innerHTML = "Vui lòng nhập!";
        return false
    } else if (!pattern.test(txtsdt.value.trim())) {
        err_sdt.innerHTML = "Số điện thoại 10 số ";
        return false
    } else {
        err_sdt.innerHTML = '(*)';
        return true;
    }
}

// Bắt sự kiện khi mất focus cho từng trường
document.getElementById('txtfname').addEventListener('blur', validateFirstName);
document.getElementById('txtlname').addEventListener('blur', validateLastName);
document.getElementById('txtsdt').addEventListener('blur', validatePhoneNumber);

function openModal(){
    if(!validateFirstName()|| !validateLastName() || !validatePhoneNumber()){
        alert("Điền đầy đủ thông tin!!!");
        return false;
    }else{
        document.getElementById('openModalBtn').addEventListener('click', function () {
            // Lấy đối tượng modal bằng ID
            var myModal = new bootstrap.Modal(document.getElementById('modelId'));
            // Hiển thị modal
            myModal.show();
        });
        return true;
    }

    }
