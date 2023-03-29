import Button from "./Button.js";

const Header = () => {
    return `
    <header id="headerContainer">
        <img id = "logo" src="../src/media/logo.png">
        <h1>Fruits on the web</h1>
        ${Button()}
    </header>
    `;
}

export default Header;