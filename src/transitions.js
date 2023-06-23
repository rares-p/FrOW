function startGame(rows, cols, time){
    if ((rows * cols) % 2 === 1){
        alert("Uneven number of cards!");
        return;
    }
    window.location.href = "./game.html";
    sessionStorage.setItem("rows", rows);
    sessionStorage.setItem("cols", cols);
    sessionStorage.setItem("time", time);
}

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
    window.location.href = "./login.html";
}

function profile(){
    window.location.href = "./profile.html";
}

let startButton = document.getElementById("startButton");

console.log(document.getElementById("startButton"));

if(sessionStorage.getItem("username") == null)
{
    startButton.onclick = login;
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