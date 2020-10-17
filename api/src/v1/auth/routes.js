const Router = require('express').Router()

const serviceResponse = require('../../_helper/serviceResponse');
const { apiStatus: { success, failed } } = require('../../config/constant');
const { login, registration } = require('./controller');

    Router.post('/registration', (req, res) => {

        req.body.ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        registration(req.body)
            .then((result) => {
                res.send(new serviceResponse({ result, status: success }));
            })
            .catch((error) => {
                res.send(new serviceResponse({ error, status: failed }));
            })
    });
  
    Router.post('/login', (req, res) => {

        req.body.ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        login(req.body)
            .then((result) => {
                res.send(new serviceResponse({ result, status: success }));
            })
            .catch((error) => {
                res.send(new serviceResponse({ error, status: failed }));
            })
    });


module.exports = Router

