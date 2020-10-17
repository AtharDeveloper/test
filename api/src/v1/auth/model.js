const bcrypt = require('bcryptjs');
const {  parseObject } = require('../../_helper/utils')

const Model = (model) => {
    const res = {
        name: model.name,
        mobile: model.mobile,
        emailId: model.emailId,
        password: bcrypt.hashSync(model.password, bcrypt.genSaltSync(10)),
    }

    return parseObject(res)
}
module.exports = {
    Model
}

