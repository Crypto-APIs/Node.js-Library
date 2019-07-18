const BaseAuth = require('../../common/base-auth');

class Quotes extends BaseAuth {

    /**
     * Latest Data
     *
     * @async
     * @desc Get latest quote updates for up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestData(limit = 50) {
        return this.request.get('/quotes/latest?limit=' + limit);
    }

    /**
     * Latest Data by exchange
     *
     * @async
     * @desc Get latest quote updates in a specific exchange for up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where quote took place. (_id attribute from exchanges endpoint).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByExchange(exchangeId, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/latest?limit=' + limit);
    }

    /**
     * Latest Data by base asset
     *
     * @async
     * @desc Get latest quote updates for a specific base asset for up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a quote. (_id attribute from assets endpoint).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByBaseAsset(baseAsset, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/latest?limit=' + limit);
    }

    /**
     * Latest Data by assets pair
     *
     * @async
     * @desc Get latest quote updates for a specific assets pair (exp. BTC/USD) for up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a quote. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a quote. (_id attribute from assets endpoint).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByAssetsPair(baseAsset, quoteAsset, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?limit=' + limit);
    }

    /**
     * Latest Data by exchange assets pair
     *
     * @async
     * @desc Get latest quote updates for a specific assets pair (exp. BTC/USD) in a specific exchange for up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where quote took place. (_id attribute from exchanges endpoint).
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a quote. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a quote. (_id attribute from assets endpoint).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?limit=' + limit);
    }

    /**
     * Historical Data
     *
     * @async
     * @desc Get historical quote updates within requested time range, returned in time descending order. If no start &
     *      end time are defined when calling the enpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} symbolId - Symbol identifier used to filter response.
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getHistoricalData(symbolId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/' + symbolId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by exchange
     *
     * @async
     * @desc Get historical quote updates in a specific exchange within requested time range, returned in time descending order.
     *      If no start & end time are defined when calling the enpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where quote took place. (_id attribute from exchanges endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getHistoricalDataByExchange(exchangeId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by base asset
     *
     * @async
     * @desc Get historical quote updates for a specific base asset within requested time range, returned in time descending order.
     *      If no start & end time are defined when calling the endpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a quote. (_id attribute from assets endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getHistoricalDataByAsset(baseAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by assets pair
     *
     * @async
     * @desc Get historical quote updates for a specific assets pair (exp. BTC/USD) within requested time range, returned
     *      in time descending order. If no start & end time are defined when calling the enpoint, your data results will
     *      be provided 24 hours back, by default.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a quote. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a quote. (_id attribute from assets endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getHistoricalDataByAssetsPair(baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by exchange assets pair
     *
     * @async
     * @desc Get historical quote updates for a specific assets pair (exp. BTC/USD) in a specific exchange within
     *      requested time range, returned in time descending order. If no start & end time are defined when calling
     *      the enpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where quote took place. (_id attribute from exchanges endpoint).
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a quote. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a quote. (_id attribute from assets endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getHistoricalDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Quotes;
