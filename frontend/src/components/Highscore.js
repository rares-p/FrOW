function Highscore(indexPlace, nameUser, scoreUser)
{
    return `
        <div class = "highscore">
            <h1 class = "txtHighscore"> ${indexPlace}.</h1>
            <div class = "highscoreDecorationContainer" >
                <img class = "decorationImg" src="src/media/decoration2.png">
                <h1 class = "highscoreUserName"> ${nameUser} ( ${scoreUser} ) </h1>
            </div>
        </div>
    `;
}

export default Highscore;