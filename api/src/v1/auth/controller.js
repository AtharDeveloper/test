const { Model } = require('./model'); 
const db = require('../../_db/connection')
const message = require('../../config/message')
const { collection } = require('../../config/constant')
const { comparePassword, sign } = require('../../_helper/userHelper')

const registration = async (body) => {
    try {
        const value = Model(body);
        const _ = await db(collection.user);
        const user = await _.findOne({ $or: [{ emailId: value.emailId }, { mobile: value.mobile }] })
        if (user)
            return Promise.reject({ message: message.auth.userExist })
        else {
            const res = await _.insertOne(value);          
            delete res.ops[0].password;
            const token = await sign(res.ops[0]);
            return ({ token });
        }
    } catch (error) {
        console.log('registration Error : ', error)
        return Promise.reject(error)
    }
}

const login = async ({ userId, password }) => {
    try {
        if ((userId == undefined || userId == 'undefined') || (password == undefined || password == 'undefined')) {
            return Promise.reject({ message: message.auth.paramMissing })
        } else {
            const _ = await db(collection.user);
            res = await _.findOne({ $or: [{ emailId: userId }, { mobile: userId }] })
            if (res != null) {
                if (comparePassword(password, res.password)) {
                    delete res.password;
                    const token = await sign(res);
                    return ({ token });
                }
                else
                    return Promise.reject({ message: message.auth.pasNMatch });
            } else {
                return Promise.reject({ message: message.auth.userNotExist })
            }
        }

    } catch (error) {
        console.log("login Error : ", error)
        return Promise.reject(error)
    }

}


module.exports = {
    login,
    registration
}
