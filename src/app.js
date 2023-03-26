import Header from './components/Header.js'

function App() {
    const header = document.createElement('header')
    header.innerHTML = `
    <div id="headerContainer">
      ${Header()}
    </div>
    <div id="uiContainer">
        <div  class="timer">
            <h1>24</h1>
        </div>
        <div class="score">
            <h1>Score:650</h1>
        </div>
        <div class="level">
            <h1>Level:</h1>
        </div>
    </div>
  `;

    console.log("Template is " + header.innerHTML)
    return header.cloneNode(true);
}

export default App;