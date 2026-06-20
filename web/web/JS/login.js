// ==============================
// LOGIN
// ==============================

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const remember = document.getElementById("remember");
const loginBtn = document.getElementById("loginBtn");


// ==============================
// Load Email nếu Remember
// ==============================

window.onload = function () {

    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {

        emailInput.value = savedEmail;

        remember.checked = true;

    }

};


// ==============================
// Validate Email
// ==============================

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}


// ==============================
// Login
// ==============================

loginBtn.addEventListener("click", function () {


    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();


    if (email == "") {

        alert("Vui lòng nhập Email");

        emailInput.focus();

        return;

    }


    if (!validateEmail(email)) {

        alert("Email không hợp lệ");

        emailInput.focus();

        return;

    }


    if (password == "") {

        alert("Vui lòng nhập mật khẩu");

        passwordInput.focus();

        return;

    }


    if (password.length < 6) {

        alert("Mật khẩu phải từ 6 ký tự");

        passwordInput.focus();

        return;

    }


    // Đọc user trong LocalStorage

    const user = JSON.parse(localStorage.getItem("user"));


    if (user == null) {

        alert("Bạn chưa đăng ký tài khoản!");

        return;

    }


    if (email != user.email) {

        alert("Email không tồn tại");

        return;

    }


    if (password != user.password) {

        alert("Sai mật khẩu");

        return;

    }


    if (remember.checked) {

        localStorage.setItem("rememberEmail", email);

    }

    else {

        localStorage.removeItem("rememberEmail");

    }


    localStorage.setItem("isLogin", "true");

    localStorage.setItem("currentUser", user.name);


    alert("Đăng nhập thành công!");

    window.location.href = "Trangchu.html";


});