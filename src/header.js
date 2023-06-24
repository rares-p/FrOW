import Header from './components/Header.js';

const header = () => {
    const test = document.createElement('header');
    test.innerHTML = Header();
    document.body.appendChild(test.cloneNode(true));
}

header();