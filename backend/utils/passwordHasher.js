import bcrypt from 'bcrypt'


const encrypt = password => {
    const saltRounds = 8;

    return bcrypt.hash(password, saltRounds);
};
const compare = (password, hash) => {
    return bcrypt.compare(password, hash);
};


export {
    encrypt, compare
};