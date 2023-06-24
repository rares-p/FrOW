import Header from './components/Header.js'
import GameData from './components/GameData.js'

const baseURL = "http://192.168.1.137:5000"

function changeStats(difficulty, averageTime, averageBoardSize, gamesPlayed, averageScore)
{
    const msgContainerElem = document.getElementById("txtMsgContainer");
    console.log(msgContainerElem.childNodes[2]);
    msgContainerElem.childNodes[1].textContent = `WOW !! You played ${gamesPlayed} games of difficulty ${difficulty} `;
    msgContainerElem.childNodes[5].textContent = `You were really fast: ${averageTime.toString().substring(0,4)}% !!! Your average board size was ${averageBoardSize} and your score ${averageScore}!!! 😲`;
}

let difficulty = 0;
async function getStatatisticsForDifficulty(difficulty)
{
    const response = await fetch(baseURL + `/attempt/average?difficulty=${difficulty}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        }
    });

    return await response.json();
}

async function getAllAttempts(difficulty)
{
    const response = await fetch(baseURL + `/attempt?difficulty=${difficulty}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        }
    });
    console.log("raspuns la average stats: " + response);
    return response.json();
}

function makeAttempts(attempts)
{
    var element = document.getElementById("profileContainer");
    if (element != null)
        element.parentNode.removeChild(element);
    
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

    for (let i = 0; i < attempts.length; i++) {
        
        profileContainerHtml += `${GameData(attempts[i].startdate, attempts[i].timetaken, attempts[i].maxtime, attempts[i].columns, attempts[i].rows, attempts[i].score, i)}`;
    }
    profileContainerHtml += `</div>`;
    

    profileContainer.innerHTML = profileContainerHtml;
    document.body.appendChild(profileContainer);
}

async function changeDifficulty()
{
    difficulty ++;
    if(difficulty == 5)
        difficulty = 1;
    const values = await getStatatisticsForDifficulty(difficulty);
    console.log(values);
    
    const attempts = await getAllAttempts(difficulty);
    makeAttempts(attempts);
    console.log(attempts);

    changeStats(difficulty, values.averagetime, values.averageboardsize, values.gamesplayed, values.averagescore);

}
setTimeout(() =>
changeDifficulty(), 1000);

function AppProfile() {

    const header = document.createElement('header')
    header.innerHTML = `
    ${Header()}
  `;


    return header.cloneNode(true);
}

export default AppProfile;