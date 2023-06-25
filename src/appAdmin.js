import Header from './components/Header.js'

const baseURL = "http://192.168.1.137:5000";

function makeUserList(userList)
{
    console.log(userList.users[0]);
    var element = document.getElementById("adminContainer");
    if (element != null)
        element.parentNode.removeChild(element);

    const adminElement = document.createElement('div');
    let adminElementHtml = `
    `;

    for (let i = 0; i < userList.users.length; i++) {
        console.log(userList.users[i]);
        const adminText = userList.users[i].admin ? `<h1 class="userAdmin">(admin)</h1>` : "";
        adminElementHtml += `
        <div class="userAdminContainer">
            <h1 class="userAdmin" > ${userList.users[i].username} </h1>
            ${adminText}
            <button class="deleteUserButton">Delete User</button>
            <button class="makeAdminButton">Make User Admin</button>
        </div>
        `;
    }

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
            console.log("apelez delete [" + userName + "]");
            deleteUser(userName);
        });
    }
    
    var buttons = document.getElementsByClassName('makeAdminButton');
    for (var i = 0; i < buttons.length; i++)
    {
        let button = buttons[i];
        button.addEventListener("click", function () {
            let parElement = button.parentElement;
            let userName = parElement.children[0].textContent;
            console.log(userName);
            makeUserAdmin(userName);
        });
    }
}

async function deleteUser(username)
{
    const response = await fetch(baseURL + `/users?username=${username.trim()}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        }
    });

    location.reload();
}

async function makeUserAdmin(username)
{
    const response = await fetch(baseURL + `/users`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        },
        body: JSON.stringify({username: username.trim()})
    });

    location.reload();
}

async function getAllUsers()
{
    const response = await fetch(baseURL + `/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
        }
    });

    if(response.status !== 200)
        return;

    return await response.json();
}

function AppAdmin() {

    const header = document.createElement('header')
    header.innerHTML = `
    ${Header()}
  `;

    getAllUsers().then(
        users => {
            console.log(users.users[0].username);
            makeUserList(users);
        }
    )

    return header.cloneNode(true);
}

export default AppAdmin;