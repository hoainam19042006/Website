//==============================
// HOME PAGE
//==============================

const loginButton = document.getElementById("loginButton");

const searchInput = document.getElementById("searchInput");

const newsletterEmail = document.getElementById("newsletterEmail");

const newsletterBtn = document.getElementById("newsletterBtn");


//==============================
// Hiển thị người dùng
//==============================

window.addEventListener("DOMContentLoaded", () => {

    const isLogin = localStorage.getItem("isLogin");
    const currentUser = localStorage.getItem("currentUser");

    if (isLogin === "true" && loginButton) {
        loginButton.innerHTML = `👋 ${currentUser}`;
        loginButton.href = "#";
    }

});