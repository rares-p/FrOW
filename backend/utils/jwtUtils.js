import jwt from 'jsonwebtoken';


const jwtKey = process.env.JWT_SECRET;

// TODO: Implementation is not final
const createToken = payload => {
    return jwt.sign(payload, jwtKey);
};

const decodeToken = token => {
    return jwt.decode(token, jwtKey);
};


export {
    createToken, decodeToken
}
