import Header from './components/Header.js'

const baseURL = "http://192.168.1.137:5000";

function makeUserList()
{
    var element = document.getElementById("adminContainer");
    if (element != null)
        element.parentNode.removeChild(element);

    const adminElement = document.createElement('div');
    let adminElementHtml = `
    `;

    for (let i = 0; i < 5; i++) {
        adminElementHtml += `
        <div class="userAdminContainer">
            <h1 class="userAdmin" > UserRandom${i} </h1>
            <button class="deleteUserButton">Delete User</button>
        </div>
        `;
    }

    adminElementHtml += ``;

    adminElement.innerHTML = adminElementHtml;
    adminElement.setAttribute('id', 'adminContainer');
    document.body.appendChild(adminElement);


    var buttons = document.getElementsByClassName('deleteUserButton');
    for (var i = 0; i < buttons.length; i++)
    {
        let button = buttons[i];
        button.addEventListener("click", function () {
            let parElement = button.parentElement;
            let userName = parElement.children[0].textContent;
            console.log(userName);
        });
    }
}


function AppAdmin() {

    const header = document.createElement('header')
    header.innerHTML = `
    ${Header()}
  `;

    makeUserList();

    return header.cloneNode(true);
}

export default AppAdmin;