import Header from './components/Header.js'
import GameData from './components/GameData.js'

const baseURL = "http://192.168.1.137:5000"

function changeStats(difficulty, averageTime, averageBoardSize, gamesPlayed, averageScore)
{
    const msgContainerElem = document.getElementById("txtMsgContainer");
    msgContainerElem.childNodes[0].innerText = `WOW !! You played ${gamesPlayed} games of difficulty ${difficulty} `;
    msgContainerElem.childNodes[2].innerText = `You were really fast, ${averageTime.substring(0,4)}% !!! Your average board size was ${averageBoardSize} and your score ${averageScore} !!! ;)`;
}

let difficulty = 0;
async function getStatatisticsForDifficulty(difficulty)
{
    const username = sessionStorage.getItem("username");
    const data = {username, difficulty};

    const response = await fetch(baseURL + "/getAverage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

async function changeDifficulty()
{
    difficulty ++;
    if(difficulty == 5)
        difficulty = 1;
    const values = await getStatatisticsForDifficulty(difficulty);
    console.log(values);
    changeStats(difficulty, values.averagetime, values.averageboardsize, values.gamesplayed, values.averagescore);
    

}
setTimeout(() =>
changeDifficulty(), 1000);

function AppProfile() {

    const header = document.createElement('header')
    header.innerHTML = `
    ${Header()}
  `;

    

    const profileContainer = document.createElement('div');
    profileContainer.setAttribute('id', 'profileContainer');


    let profileContainerHtml = `<div id="profileContainer">`;

    profileContainerHtml += `
    <div id="msgContainer">
        <img id = "msgBeginImg" src="src/media/msgBegin.png">
        <div id="msgContainerSmaller">
            <div id = "txtMsgContainer">
                <div class="msgTxt">WOW !! You played 0 games of difficulty 0 </div>
                <div class="msgTxt">Here are some averages: </div>
                <div class="msgTxt">You were really fast, 0.08% !!! Your average board size was 6 and your score 113 !!! ;)</div>
            </div>
            <img id = "msgEndImg" src="src/media/msgEnd.png">
        </div>
    </div>
    `;

    for (let i = 0; i < 5; i++) {
        profileContainerHtml += `${GameData()}`;
    }
    profileContainerHtml += `</div>`;
    

    profileContainer.innerHTML = profileContainerHtml;
    document.body.appendChild(profileContainer);

    return header.cloneNode(true);
}

export default AppProfile;