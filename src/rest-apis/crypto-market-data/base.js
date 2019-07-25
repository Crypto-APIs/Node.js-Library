const BaseAuth = require('../../common/base-auth');

class Base extends BaseAuth {

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
        return this.request.get('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    /**
     * Get Exchange details
     *
     * @async
     * @desc Get a detailed information for a single supported exchange provided by our system by ID.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange. (_id attribute from exchanges endpoint).
     *
     * @returns {*}
     */
    getExchangeDetails(exchangeId) {
        return this.request.get('/exchanges/' + exchangeId);
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
        return this.request.get('/assets?skip=' + skip + '&limit=' + limit);
    }

    /**
     * Get Asset details
     *
     * @async
     * @desc Get detailed information for a specific asset.
     *
     * @param {string} assetId - Our identifier (UID) of the asset. (_id attribute from assets endpoint).
     *
     * @returns {*}
     */
    getAssetDetails(assetId) {
        return this.request.get('/assets/' + assetId);
    }

    /**
     * Get symbol details
     *
     * @async
     * @desc Get a detailed information for a specific symbol mapping.
     *
     * @param {string} symbolId - Symbol identifier used to filter response. (_id attribute from symbols endpoint).
     *
     * @returns {*}
     */
    getSymbolDetails(symbolId) {
        return this.request.get('/mappings/' + symbolId);
    }

}

module.exports = Base;
