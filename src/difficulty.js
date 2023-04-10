import Header from "./components/Header.js";

let rowSlider = document.getElementById("rowRange");
const colSlider = document.getElementById("colRange");
const timeSlider = document.getElementById("timeRange");

let rowValue = document.getElementById("rowValue");
let colValue = document.getElementById("colValue");
let timeValue = document.getElementById("timeValue");

rowSlider.oninput = function () {
    rowValue.innerHTML = "Rows: " + this.value;
}
colSlider.oninput = function () {
    colValue.innerHTML = "Columns: " + this.value;
}
timeSlider.oninput = function () {
    let minutes = Math.floor(this.value / 60);
    let seconds = this.value % 60;
    let extraZero = "";
    if (seconds<10)
        extraZero = "0"
    timeValue.innerHTML = "Time: " + minutes + ":" + extraZero + seconds;
}

const header = document.createElement('header')
header.innerHTML = `
    ${Header()}
    `

document.getElementById("difficultyHeader").appendChild(header.cloneNode(true))