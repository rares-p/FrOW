import Header from './components/Header.js'
import Highscore from './components/Highscore.js'
import HighscoreButtons from './components/HighscoreButtons.js';

let currentPage = 1;
let nrPages = 45;

function makeHighscores(nrUsers, listOfUsers, nrPages, startPage)
{
    var element = document.getElementById("highScoresElement");
    if (element != null)
        element.parentNode.removeChild(element);

    const highScoresElement = document.createElement('div');
    let highScoresHtml = `
    <div class = "highscoreHeaderContainer">
        <div class = "achievmentContainer">
            <img class = "decorationImgAchievment" src="src/media/decoration2.png">
            <img class = "achievmentImg" src="src/media/achievment.png">
        </div>
        <h1 class = "achievmentTxt"> HIGHSCORES </h1>
    </div>
    <div class="highscoresDivContainer">
        <div class="highscoresContainer">
    `;

    for (var i = 0; i < nrUsers; i++)
    {
        highScoresHtml += Highscore(listOfUsers[i].indexUser, listOfUsers[i].userName, listOfUsers[i].userScore);
    }

    highScoresHtml += `
        <p id="pageText">Page ${currentPage}/${nrPages} </p>
        </div>
    </div>
    `;

    if (startPage == nrPages)
        highScoresHtml += HighscoreButtons(nrPages, startPage-4);
    else
    if (startPage == nrPages-1)
        highScoresHtml += HighscoreButtons(nrPages, startPage-3);
    else
    highScoresHtml += HighscoreButtons(nrPages, startPage);

    highScoresElement.innerHTML = highScoresHtml;
    highScoresElement.setAttribute('id', 'highScoresElement');
    document.body.appendChild(highScoresElement);
}

function changePage(button)
{
    let user1 = {
        indexUser: 1,
        userName: "UserRandom",
        userScore: 450000
    }
    let listOfUsers = []
    for (var i = 0; i < 5; i++)
        listOfUsers[i] = user1;
    
    let newValue = currentPage;

    if (button.getAttribute('id') == 'buttonLeft')
    {
        if (currentPage > 1)
            newValue = currentPage - 1;
    }

    if (button.getAttribute('id') == 'buttonRight')
    {
        if (currentPage < nrPages)
            newValue = currentPage + 1;
    }

    if (button.getAttribute('id') == 'pageNumberButton')
    {
        let value = document.getElementById('pageNumber').value;
        if (value >= 1 && value <= nrPages)
            newValue = value;
    }

    if (button.getAttribute('id') == null)
    {
        let value = parseInt(button.innerText);
        if (value >= 1 && value <= nrPages)
            newValue = value;
    }

    currentPage = newValue;
    makeHighscores(5, listOfUsers, nrPages, currentPage);


    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++)
    {
        let button = buttons[i];
        button.addEventListener("click", function () {
            button.classList.add("jello");

            setTimeout(() => {
                button.classList.remove("jello");
                changePage(button);
            }, 900);
        });
    }
}

function AppHighscores() {

    const header = document.createElement('header')
    header.innerHTML = `
    ${Header()}
  `;

  let user1 = {
    indexUser: 1,
    userName: "UserRandom",
    userScore: 450000
    }
    let listOfUsers = []
    for (var i = 0; i < 5; i++)
        listOfUsers[i] = user1;

    makeHighscores(5, listOfUsers, nrPages, currentPage);

    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++)
    {
        let button = buttons[i];
        button.addEventListener("click", function () {
            button.classList.add("jello");

            setTimeout(() => {
                button.classList.remove("jello");
                changePage(button);
            }, 900);
        });
    }
    

    return header.cloneNode(true);
}

export default AppHighscores;