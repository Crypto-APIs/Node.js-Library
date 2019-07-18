const proxy = require('./proxy');

class BaseAuth {

    constructor(apiKey) {
        this.request = proxy.getInstance(apiKey);
    }
}

module.exports = BaseAuth;
