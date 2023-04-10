import Button from "./Button.js";

const Header = () => {
    return `
    <header id="headerContainer">
        <a href='./index.html'><img id="logo" src="../src/media/logo.png"></a>
        <h1>Fruits on the web</h1>
        ${Button()}
    </header>
    <img id="bar" src="src/media/bar.png">
    
    `;
}

export default Header;