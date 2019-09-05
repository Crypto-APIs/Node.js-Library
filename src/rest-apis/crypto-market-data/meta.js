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
