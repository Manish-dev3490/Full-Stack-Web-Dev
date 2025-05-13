const logoutBtn = document.getElementById("logout-bt");
const mainContainer = document.getElementsByClassName("Maincontainer");
let fname = localStorage.getItem("userFirstName");
let lname = localStorage.getItem("userLastName");
const userLogo = document.querySelector("#user-logo");
const logOutButton = document.getElementById("logout-btn");
console.log(fname);

window.addEventListener("load", async function () {
    if (!fname) {
        window.location.href = "./pages/SignIn.html";
    }

    userLogo.addEventListener("click", function () {
        const currentDisplay = getComputedStyle(logOutButton).display;
        if (currentDisplay === "none") {
            logOutButton.style.display = "block";
        } else {
            logOutButton.style.display = "none";
        }
    });
})