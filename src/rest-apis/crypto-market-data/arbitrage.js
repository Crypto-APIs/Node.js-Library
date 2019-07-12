const request = require('../../common/request');

class Arbitrage {

    static getLatest(skip = 0, limit = 50) {
        return request.getInstance().get('/arbitrage-rest?skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Arbitrage;
