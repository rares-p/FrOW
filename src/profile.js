//document.getElementById("formContainer").innerHTML += 
import dotenv from "dotenv";
dotenv.config();
const baseURL = process.env.BASE_URL;

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

function changeStats(difficulty, averageTime, averageBoardSize, gamesPlayed, averageScore)
{
    document.getElementById("difficultyStats").innerHTML = `\
    <div class="field">Difficulty: ${difficulty}</div>\
    <div class="field">Average Time: ${averageTime}</div>\
    <div class="field">Average Board Size: ${averageBoardSize}</div>\
    <div class="field">Games Played: ${gamesPlayed}</div>\
    <div class="field">Average Score: ${averageScore}</div>`;
}

function changeAttempts(startdate, timetaken, maxtime, columns, rows, score, index)
{
    document.getElementById("difficultyStats").innerHTML += `<h2>NR: ${index}</h2><div>\
    Start Date: ${startdate}\
    \
    Time taken: ${timetaken}\
    \
    Max Time: ${maxtime}\
    \
    Columns: ${columns}\
    \
    Rows: ${rows}\
    \
    Score: ${score}</div>`;
}

async function changeDifficulty()
{
    difficulty ++;
    if(difficulty == 5)
        difficulty = 1;
    const values = await getStatatisticsForDifficulty(difficulty);
    console.log(values);
    changeStats(difficulty, values.averagetime, values.averageboardsize, values.gamesplayed, values.averagescore);
    const attempts = await getAllAttempts(difficulty);
    //document.getElementById("difficultyStats").innerHTML = "";
    for(let i = 0; i < attempts.length; i ++)
        changeAttempts(attempts[i].startdate, attempts[i].timetaken, attempts[i].maxtime, attempts[i].columns, attempts[i].rows, attempts[i].score, i);
    console.log(attempts);
}
setTimeout(() =>
changeDifficulty(), 1000);

async function getAllAttempts(difficulty)
{
    const username = sessionStorage.getItem("username");
    const data = {username, difficulty};

    const response = await fetch(baseURL + "/getAttempt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    console.log("raspuns la average stats: " + response);
    return response.json();
}


