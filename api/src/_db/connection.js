
const { url, dbName } = require('../config/config')
const { MongoClient, } = require('mongodb');

module.exports = (collectionName) => {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                console.log('DataBase Connected  Successfully.');

                resolve(client.db(dbName).collection(collectionName))

            }
        })
    });
}
