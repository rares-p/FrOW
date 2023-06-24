function learn(){
    window.location.href = "./learn.html";
}

function highscores(){
    window.location.href = "./highscores.html";
}

function difficultyMenu(){
    window.location.href = "./difficultyPage.html";
}

function about(){
    window.location.href = "./about.html";
}

function login(){
    window.location.href = './login.html';
}

function profile(){
    window.location.href = "./profile2.html";
}

let startButton = document.getElementById("startButton");

console.log(document.getElementById("startButton"));

if(localStorage.getItem("username") == null)
{
    startButton.setAttribute("onclick", "login()");
    startButton.innerText = "LOGIN";
}
else
{
    document.getElementById("menuButtons").innerHTML += '\
    <div class="containerButton">\
        <button id="aboutButton" onclick="profile()">\
            PROFILE\
        </button>\
        <img id="aboutImage" class="buttonImg" src="src/media/logo.png">\
        \
    </div>';
}

function generateLogoutButton()
{
    console.log("am ajuns");
    const menuButtonsDiv = document.getElementById("menuButtons");
    console.log("verific existenta");
    if(!("username" in localStorage))
        return;
    
    console.log("exista existenta");

    menuButtonsDiv.innerHTML += `
    <div class="containerButton">
    <button id="logoutButton" onclick='(function(){ 
             localStorage.removeItem("username");
             localStorage.removeItem("token");
             localStorage.removeItem("admin");
             location.reload(); })();'>
        LOGOUT
    </button>
    <img id="startImage" class="buttonImg" src="src/media/logo.png">
    </div>`;
    
    // menuButtonsDiv.lastChild.addEventListener("click", () => {
    //     localStorage.removeItem(`username`);
    //     localStorage.removeItem(`token`);
    //     location.reload();
    // });
}

function generateAdminButton()
{
    const menuButtonsDiv = document.getElementById("menuButtons");
    if(!("admin" in localStorage))
        return;

    menuButtonsDiv.innerHTML += `
    <div class="containerButton">
    <button id="adminPageButton" onclick='(function(){ window.location.href = "./admin.html"; })();'>
        ADMIN PAGE
    </button>
    <img id="startImage" class="buttonImg" src="src/media/logo.png">
    </div>`;
    
    // menuButtonsDiv.lastChild.addEventListener("click", () => {
    //     window.location.href = "./admin.html";
    // });
}

generateAdminButton();
generateLogoutButton();