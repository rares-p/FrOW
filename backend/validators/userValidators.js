import httpStatus from 'http-status';


/*
    User validators:
    username: must be present
             between 6 and 24 characters
             must not have the characters: ' " \ * =
    password: must be present
              between 6 and 32 characters
              must not have the characters: ' " \ * =
 */
const validateUsername = async (req, res) => {
    const userName = req.body['username'];
    if (userName === undefined) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "Field user_name is not present in body of request!"}));
        return false;
    }
    if (userName.length < 6) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "User name is too short!"}));
        return false;
    }
    if (userName.length > 24) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "User name is too long!"}));
        return false;
    }
    if (userName.includes("'") || userName.includes('"') || userName.includes("\\") || userName.includes("*") || userName.includes("=")) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "User name contains invalid characters!"}));
        return false;
    }

    return true;
};

const validatePassword = async (req, res) => {
    const password = req.body['password'];
    if (password === undefined) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "Field password is not present in body of request!"}));
        return false;
    }
    if (password.length < 6) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "Password is too short!"}));
        return false;
    }
    if (password.length > 32) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "Password is too long!"}));
        return false;
    }
    if (password.includes("'") || password.includes('"') || password.includes("\\") || password.includes("*") || password.includes("=")) {
        res.writeHead(httpStatus.BAD_REQUEST, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "User name contains invalid characters!"}));
        return false;
    }

    return true;
};


export {
    validatePassword, validateUsername
};
