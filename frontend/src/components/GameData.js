

function GameData(startdate, timetaken, maxtime, columns, rows, score, index) {
    let data = startdate.substring(0, startdate.indexOf("T"));
    let time = timetaken + " sec / " + maxtime + " sec";
    let board = columns + " Col x " + rows + " Rows";

    return `
    <div class='gameDataContainer'>
        <div class = "highscoreDecorationContainer" >
            <img class = "decorationImg" src="src/media/decoration2.png">
            <h1 class = "indexGameData"> ${index+1}</h1>
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