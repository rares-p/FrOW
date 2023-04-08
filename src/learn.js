let index = 1;
const noCards = 16;
updateDescription();

function updateDescription(){
    fetch(location.protocol + "//" + location.host + "/src/data/about.json")
    .then(response => response.json())
    .then(json => {
        console.log(json.fruits[index - 1]);
        document.getElementById("fruitName").innerText = json.fruits[index - 1].name;
        document.getElementById("description").innerText = json.fruits[index - 1].paragraph;
        document.getElementById("vitamins").innerText = json.fruits[index - 1].vitamins;
    });
}

function nextImage()
{
    index ++;
    if(index > noCards)
        index = 1;
    console.log(index);
    let img = document.getElementById("fruitCard");
    img.src = "src/media/FaceCard" + index + ".png";
    updateDescription();
}

function previousImage()
{
    index --;
    if(index == 0)
        index = noCards;
    console.log(index);
    let img = document.getElementById("fruitCard");
    img.src = "src/media/FaceCard" + index + ".png";
    updateDescription();
}