const BaseAuth = require('../../common/base-auth');

class Arbitrage extends BaseAuth {

    /**
     * GET /arbitrage-rest?skip={skip}&limit={limit}
     */
    getLatest(skip = 0, limit = 50) {
        return this.request.get('/arbitrage-rest?skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Arbitrage;
