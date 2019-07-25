const BaseAuth = require('../../common/base-auth');

class Meta extends BaseAuth {

    /**
     * List All Exchanges
     *
     * @async
     * @desc Get a detailed list of all supported exchanges provided by our system.
     *
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    listAllExchanges(skip = 0, limit = 50) {
        return this.request.get('/exchanges/meta?skip=' + skip + '&limit=' + limit);
    }

    /**
     * List All Assets
     *
     * @async
     * @desc Get detailed list of all associated assets.
     *
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    listAllAssets(skip = 0, limit = 50) {
        return this.request.get('/assets/meta?skip=' + skip + '&limit=' + limit);
    }

    /**
     * List all symbols
     *
     * @async
     * @desc Get a detailed list of all symbol mappings.
     *
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    listAllSymbols(skip = 0, limit = 50) {
        return this.request.get('/mappings?skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Meta;
