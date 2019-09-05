const BaseAuth = require('../../common/base-auth');

class Base extends BaseAuth {

    /**
     * List All Exchanges
     *
     * @async
     * @desc Get a detailed list of all supported exchanges provided by our system.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listAllExchanges(queryParams = {}) {
        const combinedQueryParams = {
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };

        return this.request.get('/exchanges', combinedQueryParams);
    }

    /**
     * Get Exchange details
     *
     * @async
     * @desc Get a detailed information for a single supported exchange provided by our system by ID.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange. (_id attribute from exchanges endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getExchangeDetails(exchangeId, queryParams = {}) {
        return this.request.get('/exchanges/' + exchangeId, queryParams);
    }

    /**
     * List All Assets
     *
     * @async
     * @desc Get detailed list of all associated assets.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listAllAssets(queryParams = {}) {
        const combinedQueryParams = {
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };

        return this.request.get('/assets', combinedQueryParams);
    }

    /**
     * Get Asset details
     *
     * @async
     * @desc Get detailed information for a specific asset.
     *
     * @param {string} assetId - Our identifier (UID) of the asset. (_id attribute from assets endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getAssetDetails(assetId, queryParams = {}) {
        return this.request.get('/assets/' + assetId, queryParams);
    }

    /**
     * Get symbol details
     *
     * @async
     * @desc Get a detailed information for a specific symbol mapping.
     *
     * @param {string} symbolId - Symbol identifier used to filter response. (_id attribute from symbols endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getSymbolDetails(symbolId, queryParams = {}) {
        return this.request.get('/mappings/' + symbolId, queryParams);
    }

}

module.exports = Base;
