export default function generateLogoutButton()
{
    console.log("am ajuns");
    const buttonDiv = document.getElementById("logoutButtonDiv");
    buttonDiv.innerHTML = "";
    console.log("verific existenta");
    if(!("username" in localStorage))
        return;
    
    console.log("exista existenta");
    buttonDiv.innerHTML = '<button id="logoutButton">Logout!</button>';
    buttonDiv.firstChild.addEventListener("click", () => {
        localStorage.removeItem(`username`);
        localStorage.removeItem(`token`);
        location.reload();
    });
}