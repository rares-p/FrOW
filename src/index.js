import dotenv from "dotenv";
dotenv.config();

import App from './app.js';
const app =  () => {
    document.getElementById('app').appendChild(App());
};

app();