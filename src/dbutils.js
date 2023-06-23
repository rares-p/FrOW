const baseURL = "http://192.168.1.137:5000"

async function addNewAttempt(startDate, maxTime, timeTaken, columns, rows,
     score, difficulty, username)
{
    //console.log("datele: " + startDate + ", " + timer);
    const data = {startDate, maxTime, timeTaken, columns, rows, score, difficulty, username};
    console.log(JSON.stringify(data));
    const response = await fetch(baseURL + "/attempt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    //const json = await response.text();
    console.log(response.status);
}

export const Utils = {
    addNewAttempt,
    baseURL
}