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