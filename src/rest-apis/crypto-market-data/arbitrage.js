const request = require('../../common/proxy');

class Arbitrage {

    /**
     * GET /arbitrage-rest?skip={skip}&limit={limit}
     */
    static getLatest(skip = 0, limit = 50) {
        return request.getInstance().get('/arbitrage-rest?skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Arbitrage;
