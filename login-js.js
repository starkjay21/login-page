const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("error");
var curr_name = "starkjay";
var curr_password = "1234";
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === curr_name && password === curr_password) {
        alert("Congrats! Login Successful");
        location.reload();
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
})