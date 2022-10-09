
var localStorageName = "homeName";
var welcomeElement = document.getElementById("welcomeElement");
var btnLogOut = document.getElementById("btnLogOut");

if (localStorage.getItem(localStorageName) != null) {

    console.log(localStorage.getItem(localStorageName));
    welcomeElement.innerHTML = "Welcome " + localStorage.getItem(localStorageName);

} else {

    window.location.href = window.location.href.replace("/home.html", "/index.html");

}



btnLogOut.addEventListener("click", logOut);

function logOut() {

    window.location.href = window.location.href.replace("/home.html" , "/index.html");

}