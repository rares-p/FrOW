function startGame(rows, cols, time){
    if ((rows * cols) % 2 === 1){
        alert("Uneven number of cards!");
        return;
    }
    location.replace("./game.html");
    sessionStorage.setItem("rows", rows);
    sessionStorage.setItem("cols", cols);
    sessionStorage.setItem("time", time);
}

function learn(){
    location.replace("./learn.html");
}

function highscores(){
    location.replace("./highscores.html")
}

function difficultyMenu(){
    location.replace("./difficultyPage.html");
}

function about(){
    location.replace("./about.html")
}