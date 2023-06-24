
function Button() {
    const adminText = localStorage.getItem("admin") !== null && localStorage.getItem("admin") !== undefined ? `  (admin)` : ""; 
    return `
        <div id="buttonContainer">
            <div id="userName">${localStorage.getItem("username") + adminText}</div>
            <button onclick={location.replace("./index.html")}>
                <img id="profileDecorationImg" src="../src/media/profileDecoration.png">
            </button>
        </div>

    `
}

export default Button;