import UserModel from "../models/userModel.js";
import {compare, encrypt} from "../utils/passwordHasher.js";
import {createToken} from "../utils/jwtUtils.js"
import httpStatus from "http-status";
import userModel from "../models/userModel.js";

const UserService = {

    createNewUser: async(username, password, firstName, lastName) => {
        let isUsernameTaken;
        try{
            isUsernameTaken = await UserModel.checkIfUsernameExists(username)
        }catch (e){
            console.log("Error when checking if username exists!");
            return {
                status: httpStatus.INTERNAL_SERVER_ERROR
            };
        }
        if (isUsernameTaken)
            return {
                status: httpStatus.BAD_REQUEST
            };
        try {
            password = await encrypt(password);
        } catch (e){
            console.log(`Error when trying to encrypt password! Error message:${e.message}\nstack:${e.stack}`);
            return {
                status: httpStatus.INTERNAL_SERVER_ERROR
            };
        }
        try {
            const response = await UserModel.createNewUser(firstName, lastName, username, password);
            const userId = await UserModel.getUserIdByUsername(username)
            const token = await createToken(username);

            return {
                status: httpStatus.CREATED,
                token: token

            };
        } catch (e) {
            return {
                status: httpStatus.INTERNAL_SERVER_ERROR
            };
        }
    },
    login: async(username, password) => {
        let dbPassword;
        try {
            dbPassword = await UserModel.getPasswordByUsername(username);
        }catch (e){
            console.log(`User with given username does not exist!`);
            return {
                status: httpStatus.NOT_FOUND
            };
        }
        let doesPasswordMatch;
        try{
            doesPasswordMatch = await compare(password, dbPassword);
        }catch (e){
            console.log(`Error when trying to decrypt password! Error message:${e.message}\nstack:${e.stack}`);
            return {
                status: httpStatus.INTERNAL_SERVER_ERROR
            };
        }
        if (doesPasswordMatch === true){
            try {
                const userId = await UserModel.getUserIdByUsername(username)
                const token = await createToken(username);
                const isAdmin = await UserModel.getIsAdmin(userId);

                return {
                    status: httpStatus.OK,
                    token: token,
                    isAdmin: isAdmin
                };
            } catch (e) {
                console.log(`Error when getting userId in login! Error message:${e.message}\nstack:${e.stack}`);
                return {
                    status: httpStatus.INTERNAL_SERVER_ERROR
                }
            }
        }

        return {
            status: httpStatus.FORBIDDEN
        };
    },

    getALlUsers: async(username) => {
        try{
            const userId = await UserModel.getUserIdByUsername(username)
            const isAdmin = await UserModel.getIsAdmin(userId);

            if (isAdmin)
                return {
                    users: await UserModel.getUsers(),
                    status: httpStatus.OK
                };
            return {
                status: httpStatus.FORBIDDEN
            }
        } catch (e) {
            console.log(`Error when getting all users! Error message:${e.message}\nstack:${e.stack}`);
            return {
                status: httpStatus.INTERNAL_SERVER_ERROR
            }
        }
    },

    deleteUserByUsername: async(username, usernameToDelete) => {
        try{
            const userId = await UserModel.getUserIdByUsername(username);
            const isAdmin = await UserModel.getIsAdmin(userId);

            if (isAdmin){
                await UserModel.deleteUserByUsername(usernameToDelete);
                return {
                    status: httpStatus.OK
                }
            }
            return {
                status: httpStatus.FORBIDDEN
            }
        } catch (e) {
            console.log(`Error when deleting user! Error message:${e.message}\nstack:${e.stack}`);
            return {
                status: httpStatus.INTERNAL_SERVER_ERROR
            }
        }
    },

    makeUserAdmin: async(username, usernameToMakeAdmin) => {
        try{
            const userId = await UserModel.getUserIdByUsername(username);
            const isAdmin = await UserModel.getIsAdmin(userId);

            if (isAdmin){
                await UserModel.makeAdmin(usernameToMakeAdmin);
                return {
                    status: httpStatus.OK
                }
            }
            return {
                status: httpStatus.FORBIDDEN
            }
        } catch (e) {
            console.log(`Error when making user admin! Error message:${e.message}\nstack:${e.stack}`);
            return {
                status: httpStatus.INTERNAL_SERVER_ERROR
            }
        }
    }
}

export default UserService;
