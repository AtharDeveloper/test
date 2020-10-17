function serviceResponse(body) {
    this.status = body.status;
    this.result = body.result ? body.result : null;
    this.error = body.error ? body.error.message : null;
    this.version = '1.0'
};

module.exports = serviceResponse;
