

var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var btnLogin = document.getElementById("btnLogin");
var alertEmail = document.getElementById("alertEmail");
var alertEmailPassword = document.getElementById("alertEmailPassword");
var localStorageName = "sharedData";

var usersList = [];

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if (localStorage.getItem(localStorageName) != null) {

    usersList = JSON.parse(localStorage.getItem(localStorageName));

} else {

    usersList = [];

}


btnLogin.addEventListener("click", checkUsers);

function checkUsers() {

    if (emailInput.value == "" || passwordInput.value == "") {

        alertEmailPassword.innerHTML = "All fields are required";
        alertEmailPassword.classList.remove("d-none");

    } else if (!emailRegex.test(emailInput.value)) {

        alertEmail.innerHTML = "Invalid Email Address";
        alertEmail.classList.remove("d-none");

        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");

    } else if (localStorage.getItem(localStorageName) == null) {

        alert("Please create your account firstly");
        window.location.href = window.location.href.replace("/index.html", "/signup.html");

    } else {

        if (emailRegex.test(emailInput.value)) {

            alertEmailPassword.innerHTML = "Invalid Email Address or Password";
            alertEmailPassword.classList.remove("d-none");
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
            alertEmail.classList.add("d-none");

            var checkByEmailInput = emailInput.value.toLowerCase();
            var checkByPasswordInput = passwordInput.value.toLowerCase();

            for (var i = 0; i < usersList.length; i++) {

                if (usersList[i].email.toLowerCase().includes(checkByEmailInput) && usersList[i].password.toLowerCase().includes(checkByPasswordInput)) {

                    localStorage.setItem("homeName", usersList[i].name);
                    window.location.href = window.location.href.replace("/index.html", "/home.html");

                }

            }

        } else {

            emailInput.classList.add("is-invalid");
            alertEmail.classList.remove("d-none");
        }


    }

}