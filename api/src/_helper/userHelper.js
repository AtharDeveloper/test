const jwt = require('jsonwebtoken');
const { compareSync } = require('bcryptjs');
const { auth } = require('../config/message')
const { security } = require('../config/config')
const sign = (data, expTime) => {
    return jwt.sign({ ...data }, security.secretKey, { expiresIn: expTime || security.expTime });
}

const comparePassword = (inputPassword, savedPassword) => {
    try {
        return compareSync(inputPassword, savedPassword);
    } catch (error) {
        console.log(error)
        return false
    }
}


const verify = (token) => {
    if (token) {
        return jwt.verify(token, security.secretKey)

    } else {
        return (auth.unauthorized)
    }
}


module.exports = {
    comparePassword,
    sign,
    verify
}