import Header from './components/Header.js'
import Card from './components/Card.js'

let matchesNeeded = 0; // number of matches needed to win the game
let numberFlipped = 0;
let gameMap = [];

let START_TIME = 0;
let currentTime;
let timerInterval;
let difficulty;

let score = 0;
let bonusScore = 15; // each wrong guess reduces this by 5, resets on guess
let timeSinceLastGuess = 10; // each second passed reduces this by 1, resets on guess

const ANIMATION_DURATION = 1400 // duration to flip card and to return from being flipped
function makeGame(nrCol, nrLines, startTime) {
    //const console = document.getElementById('console');
    if (nrCol % 2 === 1 && nrLines % 2 === 1) {
        alert("Uneven number of lines and columns!");
    }
    matchesNeeded = (nrCol * nrLines) / 2;
    START_TIME = startTime;
    currentTime = startTime;
    if ( (startTime / matchesNeeded) > 10)
        difficulty = 1;
    else if ( (startTime / matchesNeeded)  > 7)
        difficulty = 2;
    else
        difficulty = 3;


    // initializarea
    for (let i = 0; i < nrLines; i++)
        for (let j = 0; j < nrCol; j++)
            gameMap[i] = [];
    // adaugarea valori
    for (let i = 0; i < nrLines; i++)
        for (let j = 0; j < nrCol; j++)
            gameMap[i][j] = 0;

    let availableIndexes = new Array(nrCol * nrLines);
    let nrCards = 17;
    for (let i = 0; i < nrCol * nrLines; i++)
        availableIndexes[i] = i;
    while (availableIndexes.length > 0) {
        // aleg o carte din cele existente
        let cardIndexRandom = Math.floor(Math.random() * nrCards) + 1;

        // pun cartea in 2 locuri random
        for (let k = 0; k < 2; k++) {
            let indexRandom = Math.floor(Math.random() * availableIndexes.length);
            let actualIndex = availableIndexes[indexRandom];
            gameMap[Math.floor(actualIndex / nrCol)][actualIndex % nrCol] = cardIndexRandom;
            //console.innerText = console.innerText + " " + actualIndex + "(" + cardIndexRandom + ")";
            availableIndexes.splice(indexRandom, 1);
        }
    }

    const game = document.createElement('div');
    let gameHtml = `<div id="game">`;
    for (let i = 0; i < nrCol; i++) {
        const row = document.createElement('div');
        row.classList.add('cardsRow');
        gameHtml += `
        <div class="cardsRow">
        `;

        for (let j = 0; j < nrLines; j++) {
            let indexCard = Math.floor(Math.random() * 2) + 1;
            indexCard = gameMap[j][i];
            gameHtml += `
                ${Card(indexCard)}
            `;
        }

        gameHtml += `
        </div>
        `;
    }
    gameHtml += `</div>`;
    game.innerHTML = gameHtml;
    document.body.appendChild(game);
}

function checkForMatch() {
    const cards = document.querySelectorAll(".card.is-flipped");
    let idFirstCard = cards[0].childNodes[3].src;
    let idSecondCard = cards[1].childNodes[3].src;
    if (idFirstCard == idSecondCard) {
        addScore(15 + bonusScore + Math.max(timeSinceLastGuess, 0));
        console.log("Bonus:" + bonusScore + "Time:" + Math.max(timeSinceLastGuess, 0));
        cards.forEach((card) => {
            // sa dispara front si back si sa apara outline
            card.childNodes[1].style.opacity = '0';
            card.childNodes[3].style.opacity = '0';
            card.childNodes[5].style.opacity = '1';
        });
        timeSinceLastGuess = 10;
        bonusScore = 15;
        matchesNeeded --;
        if (matchesNeeded === 0)
            setTimeout(()=>alert("Won game!"), 1000);
    } else {
        if (bonusScore > 0)
            bonusScore -= 5;
    }

    cards.forEach((card) => {
        card.classList.remove("is-flipped");
    });

    numberFlipped = 0;
}

function addScore(value) {
    let scoreObj = document.getElementById("score");
    score = score + value;
    if (score < 0)
        score = 0;

    let cifra1 = Math.floor(score / 1000);
    let cifra2 = Math.floor(score % 1000 / 100);
    let cifra3 = Math.floor(score % 100 / 10);
    let cifra4 = Math.floor(score % 10);

    if (cifra1 === 0)
        scoreObj.childNodes[3].src = "../src/media/empty.png";
    else
        scoreObj.childNodes[3].src = "../src/media/nr" + cifra1 + ".png";

    if (cifra2 === 0 && cifra1 === 0)
        scoreObj.childNodes[5].src = "../src/media/empty.png";
    else
        scoreObj.childNodes[5].src = "../src/media/nr" + cifra2 + ".png";

    if (cifra3 === 0 && cifra2 === 0 && cifra1 === 0)
        scoreObj.childNodes[7].src = "../src/media/empty.png";
    else
        scoreObj.childNodes[7].src = "../src/media/nr" + cifra3 + ".png";

    if (cifra4 === 0 && cifra3 === 0 && cifra2 === 0 && cifra1 === 0)
        scoreObj.childNodes[9].src = "../src/media/empty.png";
    else
        scoreObj.childNodes[9].src = "../src/media/nr" + cifra4 + ".png";

    scoreObj.classList.add("wobble");
    setTimeout(function () {
        scoreObj.classList.remove("wobble");
    }, 1000);

}


function startTimer() {
    timerInterval = setInterval(function () {
        updateTimer();
        if (currentTime === 0 || matchesNeeded === 0)
            clearInterval(timerInterval);
    }, 1000);
}

function updateTimer() {
    let timerObj = document.getElementById("timer");
    currentTime--;
    timeSinceLastGuess -= 1;
    let cifra1 = Math.floor(currentTime / 100);
    let cifra2 = Math.floor(currentTime % 100 / 10);
    let cifra3 = Math.floor(currentTime % 10);

    if (cifra1 === 0)
        timerObj.childNodes[3].src = "../src/media/empty.png";
    else
        timerObj.childNodes[3].src = "../src/media/nr" + cifra1 + ".png";

    if (cifra2 === 0 && cifra1 === 0)
        timerObj.childNodes[5].src = "../src/media/empty.png";
    else
        timerObj.childNodes[5].src = "../src/media/nr" + cifra2 + ".png";

    if (cifra3 === 0 && cifra2 === 0 && cifra1 === 0)
        timerObj.childNodes[7].src = "../src/media/empty.png";
    else
        timerObj.childNodes[7].src = "../src/media/nr" + cifra3 + ".png";

    if (cifra3 === 0 || (currentTime < START_TIME / 6 && currentTime % 2 === 0))
        timerObj.classList.add("wobble");
    else
        timerObj.classList.remove("wobble");

    if (currentTime <= Math.floor(START_TIME / 6)) {
        // turns timer red
        timerObj.childNodes[3].style.filter = "hue-rotate(315deg) contrast(120%) saturate(500%)";
        timerObj.childNodes[5].style.filter = "hue-rotate(315deg) contrast(120%) saturate(500%)";
        timerObj.childNodes[7].style.filter = "hue-rotate(315deg) contrast(120%) saturate(500%)";
        // TODO: Add some spacing or remove enlargement
        timerObj.childNodes[3].style.scale = "110%";
        timerObj.childNodes[5].style.scale = "110%"
        timerObj.childNodes[7].style.scale = "110%"
    }
}

function App() {
    makeGame(4, 4, 90);
    // calculate the start time
    let cifra1 = Math.floor(currentTime / 100);
    let cifra2 = Math.floor(currentTime % 100 / 10);
    let cifra3 = Math.floor(currentTime % 10);
    if (cifra1 === 0)
        cifra1 = "empty.png";
    else
        cifra1 = "nr" + cifra1 + ".png";

    if (cifra2 === 0 && cifra1 === "empty.png")
        cifra2 = "empty.png"
    else
        cifra2 = "nr" + cifra2 + ".png";

    if (cifra3 === 0 && cifra2 === "empty.png" && cifra1 === "empty.png")
        cifra3 = "empty.png";
    else
        cifra3 = "nr" + cifra3 + ".png";
    // calculate difficulty
    let level2 = "hidden";
    let level3 = "hidden";
    if (difficulty > 1)
        level2 = "visible";
    if (difficulty > 2)
        level3 = "visible";

    const header = document.createElement('header')
    header.innerHTML = `
    ${Header()}
    <img id="bar" src="src/media/bar.png">
    <div id="uiContainer">
        <div  id="timer">
            <img class="cifra" src="src/media/timer.png">
            <img class="cifra" src=${"src/media/" + cifra1}>
            <img class="cifra" src=${"src/media/" + cifra2}>
            <img class="cifra" src=${"src/media/" + cifra3}>
        </div>
        <div id="score">
            <h1>Score:</h1>
            <img class="cifra" src="src/media/empty.png">
            <img class="cifra" src="src/media/empty.png">
            <img class="cifra" src="src/media/empty.png">
            <img class="cifra" src="src/media/empty.png">
        </div>
        <div id="level">
            <h1>Level:</h1>
            <img class="cifra" src="src/media/levelHard.png">
            <img class="cifra" src="src/media/levelHard.png" style="visibility: ${level2}">
            <img class="cifra" src="src/media/levelHard.png" style="visibility: ${level3}">
        </div>
    </div>
  `;



    // INTERACTIUNE 
    const cards = document.querySelectorAll(".card");

    //const console = document.getElementById('console');

    cards.forEach((card) => {
        card.addEventListener("click", function () {

            // start timer at first click
            if (timerInterval == null)
                startTimer();

            let opacity = card.childNodes[3].style.opacity;
            // dam flip la card doar daca nu sunt deja flipped2, daca nu a disparut deja si daca nu este deja flipped
            if (numberFlipped < 2 && opacity === "1" && (!card.classList.contains('is-flipped'))) {
                card.classList.toggle("is-flipped");

                if (card.classList.contains("is-flipped")) {
                    numberFlipped++;
                    if (numberFlipped === 2) // am deschis 2
                    {
                        setTimeout(() => {
                            checkForMatch();
                        }, ANIMATION_DURATION);
                    }
                }
            }


        });
    });

    return header.cloneNode(true);
}

export default App;