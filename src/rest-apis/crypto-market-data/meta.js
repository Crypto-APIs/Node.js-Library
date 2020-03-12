const BaseAuth = require('../../common/base-auth');

class Meta extends BaseAuth {

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

        return this.request.get('/exchanges/meta', combinedQueryParams);
    }

    /**
     * List Exchanges by supporting assets
     *
     * @async
     * @desc Get a list of exchanges which support the given asset in a pair as base or quote.
     *
     * @param {string} assetId - Our identifier (UID) of the asset. (_id attribute from assets endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listExchangesBySupportingAssets(assetId, queryParams = {}) {
        const combinedQueryParams = {
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };

        return this.request.get('/exchanges/asset/' + assetId, combinedQueryParams);
    }

    /**
     * List Exchanges by supporting pairs
     *
     * @async
     * @desc Get a list of exchanges and symbols which support the given assets as base/quote or quote/base.
     *
     * @param {string} assetId_1 - Our identifier (UID) of the asset. (_id attribute from assets endpoint).
     * @param {string} assetId_2 - Our identifier (UID) of the asset. (_id attribute from assets endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listExchangesBySupportingPairs(assetId_1, assetId_2, queryParams = {}) {
        const combinedQueryParams = {
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };

        return this.request.get('/exchanges/pair/' + assetId_1 + '/' + assetId_2, combinedQueryParams);
    }

    /**
     * List All Symbols supported in exchange
     *
     * @async
     * @desc Get a list of symbols which are supported in the given exchange.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange. (_id attribute from exchanges endpoint)
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listAllSymbolsSupportedInExchange(exchangeId, queryParams = {}) {
        const combinedQueryParams = {
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };

        return this.request.get('/exchanges/' + exchangeId + '/pairs', combinedQueryParams);
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

        return this.request.get('/assets/meta', combinedQueryParams);
    }

    /**
     * List all symbols
     *
     * @async
     * @desc Get a detailed list of all symbol mappings.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listAllSymbols(queryParams = {}) {
        const combinedQueryParams = {
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };

        return this.request.get('/mappings', combinedQueryParams);
    }

}

module.exports = Meta;
