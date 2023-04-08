

function HighscoreButtons(nrPages, startValue)
{
    return `
    <div class = "highscoresButtonContainerDiv">
    <div class = "highscoresButtonContainer">
        <button class="buttonHighscoresPage" id="buttonLeft"> < </button>
        <button class="buttonHighscoresPage">${startValue}</button>
        <button class="buttonHighscoresPage">${parseInt(startValue)+1}</button>
        <button class="buttonHighscoresPage">${parseInt(startValue)+2}</button>

        <div class = "pointsContainer">
            <div class = "point"></div>
            <div class = "point"></div>
            <div class = "point"></div>
        </div>

        <button class="buttonHighscoresPage">${nrPages - 1}</button>
        <button class="buttonHighscoresPage">${nrPages}</button>
        <button class="buttonHighscoresPage" id="buttonRight"> > </button>

        <div class = "gotoContainer">
                <label for="pageNumber">Go to:</label>
                <input type="number" id="pageNumber" name="pageNumber">
            <button class="buttonHighscoresPage" id="pageNumberButton"> Go </button>
        </div>

    </div>
    </div>  
    `;
}

export default HighscoreButtons;