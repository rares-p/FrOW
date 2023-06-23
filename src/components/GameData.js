

function GameData() {
    let data = "22-06-2023";
    let time = "8 sec / 90 sec";
    let board = "3 Col x 2 Rows";
    let score = "113";

    return `
    <div class='gameDataContainer'>
        <div class = "highscoreDecorationContainer" >
            <img class = "decorationImg" src="src/media/decoration2.png">
            <h1 class = "indexGameData"> ${1}</h1>
        </div>
        <div class = "infoContainer" >
            <img class = "infoImg" src="src/media/calendarSmall.png">
            <h1 class = "infoText"> ${data}</h1>
        </div>
        <div class = "infoContainer" >
            <img class = "infoImg" src="src/media/clockSmall.png">
            <h1 class = "infoText"> ${time}</h1>
        </div>
        <div class = "infoContainer" >
            <img class = "infoImg" src="src/media/boardSmall.png">
            <h1 class = "infoText"> ${board}</h1>
        </div>
        <div class = "infoContainer" >
            <img class = "infoImg" src="src/media/trophySmall.png">
            <h1 class = "infoText"> ${score}</h1>
        </div>
    </div>
    `;
}

export default GameData;