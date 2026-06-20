// =============================
// REGISTER
// =============================

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const agree = document.getElementById("agree");
const registerBtn = document.getElementById("registerBtn");


// =============================
// Validate Email
// =============================

function validateEmail(emailAddress) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailAddress);

}


// =============================
// Validate Password
// =============================

function validatePassword(password) {

    return password.length >= 6;

}


// =============================
// Register
// =============================

registerBtn.addEventListener("click", function () {


    const name = fullname.value.trim();

    const mail = email.value.trim();

    const pass = password.value.trim();

    const confirm = confirmPassword.value.trim();



    if (name == "") {

        alert("Vui lòng nhập họ tên");

        fullname.focus();

        return;

    }



    if (mail == "") {

        alert("Vui lòng nhập Email");

        email.focus();

        return;

    }



    if (!validateEmail(mail)) {

        alert("Email không hợp lệ");

        email.focus();

        return;

    }



    if (pass == "") {

        alert("Vui lòng nhập mật khẩu");

        password.focus();

        return;

    }



    if (!validatePassword(pass)) {

        alert("Mật khẩu phải từ 6 ký tự trở lên");

        password.focus();

        return;

    }



    if (confirm == "") {

        alert("Vui lòng nhập lại mật khẩu");

        confirmPassword.focus();

        return;

    }



    if (pass != confirm) {

        alert("Mật khẩu xác nhận không khớp");

        confirmPassword.focus();

        return;

    }



    if (!agree.checked) {

        alert("Bạn phải đồng ý điều khoản");

        return;

    }



    // kiểm tra email đã tồn tại

    const oldUser = JSON.parse(localStorage.getItem("user"));



    if (oldUser != null) {

        if (oldUser.email === mail) {

            alert("Email này đã được đăng ký");

            return;

        }

    }



    // tạo user

    const user = {

        name: name,

        email: mail,

        password: pass

    };



    localStorage.setItem("user", JSON.stringify(user));



    alert("Đăng ký thành công!");



    window.location.href = "DangNhap.html";

});