import {decodeToken} from '../utils/jwtUtils.js';
import httpStatus from 'http-status';


const verifyToken = async (req, res) => {
    const token = req.headers["authorization"];
    if (!token){
        res.writeHead(httpStatus.FORBIDDEN, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "No token provided!"}));
        return false;
    }

    try {
        const message = decodeToken(token);
        if (message === null) {
            res.writeHead(httpStatus.UNAUTHORIZED, { "Content-Type": "application/json" });
            res.end(JSON.stringify({message: "Unauthorized"}));
            return false;
        }

        return message;
    } catch (e){
        res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "Error decoding token"}));

        return false;
    }
};


export {
    verifyToken
};
