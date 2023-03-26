import Button from "./Button.js";

const Header = () => {
    return `
    <header class="headerContainer">
        <h1>Fruits on the web</h1>
        ${Button()}
    </header>
    `;
}

export default Header;