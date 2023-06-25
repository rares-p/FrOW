import UserController from "../controllers/userController.js";
import httpStatus from "http-status";
import {validatePassword, validateUsername} from "../validators/userValidators.js";
import {verifyToken} from "../middlewares/jwtAuth.js";
import {getQueryParamAsNumber, getQueryParamAsString} from "../validators/querry.js";


const userRouter = async (req, res) => {
    if (res.writableEnded)
        return;
    const body = req.body ?? {};

    if (req.method === "POST") {
        if (req.url === "/register") {
            const valid = await validateUsername(req, res) && await validatePassword(req, res);
            if (valid === false)
                return;
            if (body.firstName === undefined || body.lastName === undefined) {
                res.writeHead(httpStatus.BAD_REQUEST, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Wrong request body"}));
                return;
            }
            await UserController.register(body, res);
        } else if (req.url === "/login") {
            const valid = await validateUsername(req, res) && await validatePassword(req, res);
            if (valid === false)
                return;
            if (body.username === undefined || body.password === undefined) {
                res.writeHead(httpStatus.BAD_REQUEST, {"Content-Type": "application/json"});
                res.end(JSON.stringify({message: "Wrong request body"}));
                return;
            }
            await UserController.login(body, res);
        }
    } else if (req.method === "GET") {
        if (req.url === "/users") {
            const username = await verifyToken(req, res);
            if (username === false) {
                console.log("TOKEN VALIDATION FAILED");
                return;
            }
            body.username = username;

            await UserController.getAllUsers(body, res);
        }
    } else if (req.method === "DELETE") {
        if (req.url.startsWith("/users")) {
            const username = await verifyToken(req, res);
            if (username === false) {
                console.log("TOKEN VALIDATION FAILED");
                return;
            }

            const usernameToDelete = getQueryParamAsString(req.url, "username");
            await UserController.deleteUser(username, usernameToDelete, res);
        }
    } else if (req.method === "PUT") {
        if (req.url === "/users"){
            const username = await verifyToken(req, res);
            if (username === false) {
                console.log("TOKEN VALIDATION FAILED");
                return;
            }

            const usernameToMakeAdmin = body.username;
            await UserController.makeUserAdmin(username, usernameToMakeAdmin, res);
        }
    }
}

export default userRouter;