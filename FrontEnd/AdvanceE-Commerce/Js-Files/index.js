const logoutBtn=document.getElementById("logout-bt");
const mainContainer=document.getElementsByClassName("Maincontainer");
let fname=localStorage.getItem("userFirstName");
let lname=localStorage.getItem("userLastName");

console.log(fname);

window.addEventListener("load", async function(){
if(!fname){
window.location.href = "./pages/SignIn.html";

}
})