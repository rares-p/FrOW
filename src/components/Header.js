import Button from "./Button.js";

const Header = () => {
    return `
    <header id="headerContainer">
        <input type="image" id="logo" src="../src/media/logo.png" onclick="location.replace('./index.html')">
        <h1>Fruits on the web</h1>
        ${Button()}
    </header>
    `;
}

export default Header;