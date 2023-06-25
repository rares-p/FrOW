import db from '../database.js';

const UserModel = {
    QUERY_TEXT_GET_USER_ID_BY_USERNAME: {
        text: "SELECT userid FROM users WHERE username = $1 LIMIT 1"
    },
    QUERY_TEXT_GET_USERNAME_BY_USER_ID: {
        text: "SELECT username FROM users WHERE userid = $1 LIMIT 1"
    },
    QUERY_TEXT_CREATE_USER: {
        text: "INSERT INTO users(firstname, lastname, username, password) VALUES($1, $2, $3, $4)"
    },
    QUERY_TEXT_CREATE_LOGIN_DATA: {
        text: "INSERT INTO login_data(username, password) VALUES($2, $3)"
    },
    QUERY_TEXT_GET_PASSWORD_BY_USERNAME: {
        text: "SELECT password FROM users WHERE username = $1"
    },
    QUERY_TEXT_CHECK_IF_USERNAME_EXISTS: {
        text: "SELECT exists (SELECT 1 FROM  users WHERE username = $1 LIMIT 1)"
    },
    QUERY_TEXT_IS_ADMIN: {
        text: "SELECT admin FROM users WHERE userid = $1"
    },
    QUERY_TEXT_GET_ALL_USERS: {
        text: "SELECT userid, username, firstname, lastname, admin FROM users"
    },
    QUERY_TEXT_DELETE_USER: {
        text: "DELETE FROM users WHERE username = $1"
    },
    QUERY_TEXT_MAKE_ADMIN: {
        text: "UPDATE users SET admin = true WHERE username = $1"
    },


    getUserIdByUsername: async (username) => {
        const values = [username];

        return db.query(UserModel.QUERY_TEXT_GET_USER_ID_BY_USERNAME, values).then(queryResult => queryResult.rows[0].userid);
    },
    getUsernameByUserId: async (userid) => {
        const values = [userid];

        return db.query(UserModel.QUERY_TEXT_GET_USERNAME_BY_USER_ID, values).then(queryResult => queryResult.rows[0].username);
    },
    getUsers: async () => {
        return db.query(UserModel.QUERY_TEXT_GET_ALL_USERS).then(queryResult => queryResult.rows)
    },
    getIsAdmin: async (userid) => {
        const values = [userid];

        return db.query(UserModel.QUERY_TEXT_IS_ADMIN, values).then(queryResult => queryResult.rows[0].admin);
    },
    checkIfUsernameExists: async (username) => {
        const values = [username];

        return db.query(UserModel.QUERY_TEXT_CHECK_IF_USERNAME_EXISTS, values).then(queryResult => queryResult.rows[0].exists);
    },
    createNewUser: async (firstName, lastName, username, password) => {
        const values = [firstName, lastName, username, password];

        return db.query(UserModel.QUERY_TEXT_CREATE_USER, values).then(queryResult => queryResult);
    },
    getPasswordByUsername: async (username) => {
        const values = [username];

        return db.query(UserModel.QUERY_TEXT_GET_PASSWORD_BY_USERNAME, values).then(queryResult => queryResult.rows[0].password);
    },
    deleteUserByUsername: async (username) => {
        const values = [username];

        return db.query(UserModel.QUERY_TEXT_DELETE_USER, values).then(queryResult => queryResult.rows);
    },
    makeAdmin: async (username) => {
        const values = [username];

        return db.query(UserModel.QUERY_TEXT_MAKE_ADMIN, values).then(queryResult => queryResult.rows);
    }
}

export default UserModel;
