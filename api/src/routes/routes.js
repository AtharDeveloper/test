module.exports = function (app) {

    app.use('/v1/auth/', require('../v1/auth/routes'));
    
}
