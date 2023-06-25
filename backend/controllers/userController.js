import UserService from "../services/userService.js";
import httpStatus from "http-status";

const UserController = {

    register: async (userData, res) => {
        let response;
        try {
            response = await UserService.createNewUser(
                userData.username, userData.password, userData.firstName, userData.lastName);
        } catch (e) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }
        res.writeHead(response.status, {"Content-Type": "application/json"});
        if (response.status === httpStatus.CREATED) {
            res.end(JSON.stringify({token: response.token}));
        } else if (response.status === httpStatus.BAD_REQUEST) {
            res.end(JSON.stringify({message: "Username is taken"}));
        } else if (response.status === httpStatus.INTERNAL_SERVER_ERROR) {
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    },

    login: async (userData, res) => {
        let response;
        try {
            response = await UserService.login(userData.username, userData.password);
        } catch (e) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }
        res.writeHead(response.status, {"Content-Type": "application/json"});
        if (response.status === httpStatus.FORBIDDEN) {
            res.end(JSON.stringify({message: "Password does not match"}));
        } else if (response.status === httpStatus.OK) {

            res.end(JSON.stringify({
                token: response.token,
                isAdmin: response.isAdmin
            }));
        } else if (response.status === httpStatus.NOT_FOUND) {
            res.end(JSON.stringify({message: "User with username not found"}));
        } else if (response.status === httpStatus.INTERNAL_SERVER_ERROR) {
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    },

    getAllUsers: async (userData, res) => {
        let response;

        try {
            response = await UserService.getALlUsers(userData.username);
        } catch (e) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }

        res.writeHead(response.status, {"Content-Type": "application/json"});
        if (response.status === httpStatus.FORBIDDEN) {
            res.end(JSON.stringify({message: "You do no have admin privileges"}));
        } else if (response.status === httpStatus.OK) {

            res.end(JSON.stringify({
                users: response.users
            }));
        } else if (response.status === httpStatus.INTERNAL_SERVER_ERROR) {
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    },

    deleteUser: async (username, usernameToDelete, res) => {
        let response;

        try {
            response = await UserService.deleteUserByUsername(username, usernameToDelete);
        } catch (e) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }

        res.writeHead(response.status, {"Content-Type": "application/json"});
        if (response.status === httpStatus.FORBIDDEN) {
            res.end(JSON.stringify({message: "You do no have admin privileges"}));
        } else if (response.status === httpStatus.OK) {
            res.end();
        } else if (response.status === httpStatus.INTERNAL_SERVER_ERROR) {
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    },

    makeUserAdmin: async (username, usernameToMakeAdmin, res) => {
        let response;

        try {
            response = await UserService.makeUserAdmin(username, usernameToMakeAdmin);
        } catch (e) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Internal server error!"}));
            return;
        }

        res.writeHead(response.status, {"Content-Type": "application/json"});
        if (response.status === httpStatus.FORBIDDEN) {
            res.end(JSON.stringify({message: "You do no have admin privileges"}));
        } else if (response.status === httpStatus.OK) {
            res.end();
        } else if (response.status === httpStatus.INTERNAL_SERVER_ERROR) {
            res.end(JSON.stringify({message: "Internal server error!"}));
        }
    }
}

export default UserController;
