const BaseAuth = require('../../common/base-auth');

class ExchangeRates extends BaseAuth {

    /**
     * Get Specific Rate
     *
     * @async
     * @desc Get exchange rates between pair of requested assets pointing at a specific or current time.
     *
     * @param {string} baseAssetId - Our identifier (UID) of the base asset. (_id attribute from assets endpoint).
     * @param {string} quoteAssetId - Our identifier (UID) of the quote asset. (_id attribute from assets endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getSpecificRate(baseAssetId, quoteAssetId, queryParams = {}) {
        const combinedQueryParams = {
            timestamp: null, // Time (in UNIX Timestamp) of the market data used to calculate exchange rate. Optional. Default value is current time.
            ...queryParams,
        };

        return this.request.get('/exchange-rates/' + baseAssetId + '/' + quoteAssetId, combinedQueryParams);
    }

    /**
     * Get All Current Rates
     *
     * @async
     * @desc Get the current exchange rate between requested asset and all other assets.
     *
     * @param {string} baseAssetId - Our identifier (UID) of the base asset. (_id attribute from assets endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getAllCurrentRates(baseAssetId, queryParams = {}) {
        const combinedQueryParams = {
            timestamp: null, // Time (in UNIX Timestamp) of the market data used to calculate exchange rate. Optional. Default value is current time.
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };

        return this.request.get('/exchange-rates/' + baseAssetId, combinedQueryParams);
    }

    /**
     * Get Specific Rate in a specific Exchange
     *
     * @async
     * @desc Get exchange rates between pair of requested assets pointing at a specific or current time in a specific Exchange.
     *
     * @param {string} exchangeId - Our exchange identifier.
     * @param {string} baseAssetId - Our identifier (UID) of the base asset. (_id attribute from assets endpoint).
     * @param {string} quoteAssetId - Our identifier (UID) of the quote asset. (_id attribute from assets endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getSpecificRateInSpecificExchange(exchangeId, baseAssetId, quoteAssetId, queryParams = {}) {
        const combinedQueryParams = {
            timestamp: null, // Time (in UNIX Timestamp) of the market data used to calculate exchange rate. Optional. Default value is current time.
            ...queryParams,
        };

        return this.request.get('/exchange-rates/exchange/' + exchangeId + '/' + baseAssetId + '/' + quoteAssetId, combinedQueryParams);
    }

    /**
     * Get All Current Rates in a specific Exchange
     *
     * @async
     * @desc Get the current exchange rate between requested asset and all other assets in a specific Exchange.
     *
     * @param {string} exchangeId - Our exchange identifier.
     * @param {string} baseAssetId - Our identifier (UID) of the base asset. (_id attribute from assets endpoint).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getAllCurrentRatesInSpecificExchange(exchangeId, baseAssetId, queryParams = {}) {
        const combinedQueryParams = {
            timestamp: null, // Time (in UNIX Timestamp) of the market data used to calculate exchange rate. Optional. Default value is current time.
            skip: 0, // The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
            limit: 50, // Amount of items to return (optional, default value is 50).
            ...queryParams,
        };
        return this.request.get('/exchange-rates/exchange/' + exchangeId + '/' + baseAssetId, combinedQueryParams);
    }

}

module.exports = ExchangeRates;
