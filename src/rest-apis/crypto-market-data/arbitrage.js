const BaseAuth = require('../../common/base-auth');

class Arbitrage extends BaseAuth {

    /**
     * Arbitrage
     *
     * @async
     * @desc Get latest quote updates for up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatest(skip = 0, limit = 50) {
        return this.request.get('/arbitrage-rest?skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Arbitrage;
