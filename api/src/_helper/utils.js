
const parseObject = (obj) => {
    let newObj = {}
    for (const [k, v] of Object.entries(obj)) {
        newObj[k] = v;
        if ((!!v) && (v.constructor === Array)) {
            newObj[k] = v.map((value) => {
                if (value.constructor === String) {
                    try {
                        return JSON.parse(value)
                    } catch (error) {
                        console.log('utill fun Json parse Error :', error);
                        return value
                    }
                }
                else
                    return value
            })
        }
    }
    return newObj
}



module.exports = {
    parseObject
}