let index = 1;
const noCards = 16;
var fruitNames = [];

setup();

async function setup()
{
    await populateFruitNames();
    updateDescription();
}

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

function populateFruitNames()
{
    fetch(location.protocol + "//" + location.host + "/src/data/about.json")
    .then(response => response.json())
    .then(json => {
        for(let i = 0; i < noCards; i ++)
            fruitNames[i] = json.fruits[i].name.toLowerCase();
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

function updateSearch(text)
{
    console.log("am cautat " + text);
    document.getElementById("fruitOptions").innerHTML = '';
    if(text == "")
        return;
    let options = [];
    fruitNames.forEach(fruit => {
        if(fruit.startsWith(text))
            options.push(fruit);
    });
    console.log("optiuni " + options);
    document.getElementById("searchBar").style.display = options[0];
    options.forEach(fruit => {
        document.getElementById("fruitOptions").innerHTML += '<option>' + fruit + '</option>';
    });
}

function searchFruitOnSubmit(value)
{
    console.log("caut fructul " + value);
    for(let i = 0; i < fruitNames.length; i ++) 
    {
        if(fruitNames[i] === value)
        {
            index = i + 1;
            console.log("lam gasit la " + index);
            let img = document.getElementById("fruitCard");
            img.src = "./src/media/FaceCard" + index + ".png";
            updateDescription();
            return;
        }
    }
}