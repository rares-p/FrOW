import Header from './components/Header.js'
import Card from './components/Card.js'

let numberFlipped = 0;
let gameMap = [];

function makeGame(nrCol, nrLines)
{
    const console = document.getElementById('console');

    // initializarea
    for (let i = 0; i< nrLines; i++)
        for(let j = 0; j< nrCol; j++)
            gameMap[i] = [];
    // adaugarea valori
    for (let i = 0; i < nrLines; i++)
        for (let j = 0; j < nrCol; j++)
            gameMap[i][j] = 0;

    let availableIndexes = new Array(nrCol*nrLines);
    let nrCards = 4;
    for (let i = 0; i < nrCol * nrLines; i++)
        availableIndexes[i] = i;
    while (availableIndexes.length > 0)
    {
        // aleg o carte din cele existente
        let cardIndexRandom = Math.floor(Math.random() * nrCards) + 1;

        // pun cartea in 2 locuri random
        for (let k = 0; k < 2; k++)
        {
            let indexRandom = Math.floor(Math.random() * availableIndexes.length);
            let actualIndex = availableIndexes[indexRandom];
            gameMap[Math.floor(actualIndex/nrCol)][actualIndex%(nrLines+1)] = cardIndexRandom;
            //console.innerText = console.innerText + " " + actualIndex + "(" + cardIndexRandom + ")";
            availableIndexes.splice(indexRandom, 1);
        }
    }

    const game = document.createElement('div');
    let gameHtml = `<div id="game">`;
    for (let i = 0; i < nrCol; i++)
    {
        const row = document.createElement('div');
        row.classList.add('cardsRow');
        gameHtml += `
        <div class="cardsRow">
        `;

        for (let j = 0; j < nrLines; j++)
        {
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

function checkForMatch()
{
    const cards = document.querySelectorAll(".card.is-flipped");
    let idFirstCard = cards[0].childNodes[3].src;
    let idSecondCard = cards[1].childNodes[3].src;
    if (idFirstCard == idSecondCard)
    {
        cards.forEach((card) => {
            // sa dispara front si back si sa apara outline
            card.childNodes[1].style.opacity = '0';
            card.childNodes[3].style.opacity = '0';
            card.childNodes[5].style.opacity = '1';
        });
    }

    cards.forEach((card) => {
        card.classList.remove("is-flipped");
    });

    numberFlipped = 0;
}

function App() {

    const header = document.createElement('header')
    header.innerHTML = `
    <div id="headerContainer">
      ${Header()}
    </div>
    <div id="uiContainer">
        <div  class="timer">
            <h1>24</h1>
        </div>
        <div class="score">
            <h1>Score:650</h1>
        </div>
        <div class="level">
            <h1>Level:</h1>
        </div>
    </div>
  `;

    makeGame(4, 3);

    // INTERACTIUNE 
    const cards = document.querySelectorAll(".card");

    //const console = document.getElementById('console');

    cards.forEach((card) => {
    card.addEventListener("click", function(){
        let opacity = card.childNodes[3].style.opacity;
        // dam flip la card doar daca nu sunt deja flipped2, daca nu a disparut deja si daca nu este deja flipped
        if (numberFlipped < 2 && opacity == 1 && (!card.classList.contains('is-flipped')))
        {
            card.classList.toggle("is-flipped");
        
            if (card.classList.contains("is-flipped"))
            {    
                numberFlipped ++;
                if (numberFlipped == 2) // am deschis 2
                {
                    setTimeout(() => {
                        checkForMatch();
                    }, "2000");
                }
            }
        }

        
    });
    });

    console.log("Template is " + header.innerHTML)
    return header.cloneNode(true);
}

export default App;