const baseURL = "http://192.168.1.137:5000" 

async function login(username, password)
{
    console.log("datele: " + username + ", " + password);
    const data = {"username" : username, "password" : password};
    const response = await fetch(baseURL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    const jsonResponse = await response.json();
    if(response.status !== 200)
    {
        console.log("eroarea");
        addErrorMessage(jsonResponse.message !== undefined ? jsonResponse.message : "Login failed!");
        return;
    }
    
    if(jsonResponse.token === undefined)
    {
        alert("Login failed");
        return;
    }

    if(jsonResponse.isAdmin === true)
        localStorage.setItem("admin", true);

    console.log(response.status);
    console.log("tokenul:" + jsonResponse.token);
    localStorage.setItem("username", username);
    localStorage.setItem("token", jsonResponse.token);
    window.location.replace("../index.html");
}

async function register(firstName, lastName, username, password)
{
    console.log("datele: " + username + ", " + password);
    const data = {"firstName": firstName, "lastName": lastName,"username" : username, "password" : password};
    const response = await fetch(baseURL + "/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    

    const jsonResponse = await response.json();
    if(response.status !== 201)
    {
        addErrorMessage(jsonResponse.message !== undefined ? jsonResponse.message : "Register failed!");
        return;
    }
    
    if(jsonResponse.token === undefined)
    {
        alert("Auto - Login failed");
        return;
    }

    console.log(response.status);
    console.log("tokenul:" + jsonResponse.token);
    localStorage.setItem("username", username);
    localStorage.setItem("token", jsonResponse.token);
    window.location.replace("../index.html");
}

function switchToLogin()
{
    document.getElementById("formContainer").innerHTML = '\
    <label for=\"username\">Username:</label>\
    <input type="text" id="username" name="username"><br><br>\
    <label for="password">Password:</label>\
    <input type="password" id="password" name="password"><br><br>\
    <div id="submitButton">\
        <button onclick="login(document.getElementById(\'username\').value, document.getElementById(\'password\').value)">Login!</button>\
    </div>\
    <button id="switchLoginRegister" onclick="switchToRegister()">Go to register</button>';
}

function switchToRegister()
{
    document.getElementById("formContainer").innerHTML = '\
    <label for=\"username\">First Name:</label>\
    <input type="text" id="firstName" name="firstName"><br><br>\
    <label for=\"username\">Last Name:</label>\
    <input type="text" id="lastName" name="lastName"><br><br>\
    <label for=\"username\">Username:</label>\
    <input type="text" id="username" name="username"><br><br>\
    <label for="password">Password:</label>\
    <input type="password" id="password" name="password"><br><br>\
    <div id="submitButton">\
        <button onclick="register(document.getElementById(\'firstName\').value, document.getElementById(\'lastName\').value, document.getElementById(\'username\').value, document.getElementById(\'password\').value)">Register!</button>\
    </div>\
    <button id="switchToLogin" onclick="switchToLogin()">Go to login</button>';
}

function addErrorMessage(error)
{
    const formContainer = document.getElementById("formContainer");
    const errorParagraph = document.getElementById("errorMessage");
    if(errorParagraph !== null && errorParagraph !== undefined)
        errorParagraph.remove();
    
    document.getElementById("formContainer").innerHTML += `<p id="errorMessage">${error}</p>`;
}