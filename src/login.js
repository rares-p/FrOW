const baseURL = "http://10.20.0.31:5000";


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
    //const json = await response.text();
    console.log(response.status);
    if(response.status === 200)
        sessionStorage.setItem("username", username);
}

async function register(firstName, lastName, username, password)
{
    console.log("datele: " + username + ", " + password);
    const data = {"firstName": firstName, "lastName": lastName,"username" : username, "password" : password};
    const response = await fetch(baseURL + "/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    //const json = await response.text();
    console.log(response.status);
}

function switchToLogin()
{
    document.getElementById("formContainer").innerHTML = '\
    <label for=\"username\">Username:</label>\
    <input type="text" id="username" name="username"><br><br>\
    <label for="password">Password:</label>\
    <input type="text" id="password" name="password"><br><br>\
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
    <input type="text" id="password" name="password"><br><br>\
    <div id="submitButton">\
        <button onclick="register(document.getElementById(\'firstName\').value, document.getElementById(\'lastName\').value, document.getElementById(\'username\').value, document.getElementById(\'password\').value)">Register!</button>\
    </div>\
    <button id="switchToLogin" onclick="switchToLogin()">Go to login</button>';
}