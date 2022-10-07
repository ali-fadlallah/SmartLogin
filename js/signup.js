

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var btnSignUp = document.getElementById("btnSignUp");
var alertElement = document.getElementById("alert");
var alertName = document.getElementById("alertName");
var alertEmail = document.getElementById("alertEmail");
var localStorageName = "sharedData";
var regexName = /^[a-zA-Z]{3,20}$/;
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var usersList = [];

btnSignUp.addEventListener("click", createUser);
function createUser() {

    alertElement.classList.add("d-none");

    if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {

        alertElement.innerHTML = "All fields are required";
        alertElement.classList.remove("d-none");
        alertEmail.classList.add("d-none");
        alertName.classList.add("d-none");

    } else {

        if (!regexName.test(nameInput.value)) {

            alertName.classList.remove("d-none");
            nameInput.classList.add("is-invalid");
            nameInput.classList.remove("is-valid");
            alertEmail.classList.add("d-none");


        } else if (!emailRegex.test(emailInput.value)) {

            alertName.classList.add("d-none");
            nameInput.classList.add("is-valid");
            nameInput.classList.remove("is-invalid");

            alertEmail.classList.remove("d-none");
            emailInput.classList.add("is-invalid");

        } else {

            if (checkAlreadyAdded()) {

                alertEmail.classList.remove("d-none");
                nameInput.classList.add("is-valid");
                alertEmail.innerHTML = "Sorry, this email is already registered";
                alertName.classList.add("d-none");

            } else {

                alertEmail.classList.add("d-none");

                alertElement.classList.remove("d-none");
                alertElement.classList.replace("alert-danger", "alert-success");
                alertElement.innerHTML = "Congratulation, your account has been created successfully";

                var users = {

                    name: nameInput.value,
                    email: emailInput.value,
                    password: passwordInput.value,

                }

                usersList.push(users);
                localStorage.setItem(localStorageName, JSON.stringify(usersList));

            }





        }

    }
}

function checkAlreadyAdded() {

    if (localStorage.getItem(localStorageName) != null) {

        usersList = JSON.parse(localStorage.getItem(localStorageName))

        var checkByEmailInput = emailInput.value.toLowerCase();

        for (var i = 0; i < usersList.length; i++) {

            if (usersList[i].email.toLowerCase().includes(checkByEmailInput)) {

                return true;
            }
        }

    }
}