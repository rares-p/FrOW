
function Button() {
    return `
        <div id="buttonContainer">
            <div id="userName">Casu</div>
            <button onclick={location.replace("./index.html")}>
                <img id="profileDecorationImg" src="../src/media/profileDecoration.png">
            </button>
        </div>

    `
}

export default Button;