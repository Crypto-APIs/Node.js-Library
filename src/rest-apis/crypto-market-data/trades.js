const BaseAuth = require('../../common/base-auth');

class Trades extends BaseAuth {

    /**
     * Latest Data
     *
     * @async
     * @desc Get latest trades from all symbols up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestData(limit = 50) {
        return this.request.get('/trades/latest?limit=' + limit);
    }

    /**
     * Latest Data by symbol
     *
     * @async
     * @desc Get latest trades from a specific symbol up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} symbolId - Symbol identifier used to filter response. (_id attribute from symbols endpoint).
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataBySymbol(symbolId, skip = 0, limit = 50) {
        return this.request.get('/trades/' + symbolId + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * Latest Data by exchange
     *
     * @async
     * @desc Get latest trades from a specific exchange up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where trade took place. (_id attribute from exchanges endpoint).
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByExchange(exchangeId, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * Latest Data by base asset
     *
     * @async
     * @desc Get latest trades from a specific base asset up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a trade. (_id attribute from assets endpoint).
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByAsset(baseAsset, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * Latest Data by assets pair
     *
     * @async
     * @desc Get latest trades from a specific assets pair (exp. BTC / USD) up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a trade. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a trade. (_id attribute from assets endpoint).
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByAssetsPair(baseAsset, quoteAsset, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * Latest Data by exchange assets pair
     *
     * @async
     * @desc Get latest trades from a specific assets pair (exp. BTC / USD) in a specific exchange up to 1 hour ago. Latest data is always returned in time descending order.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where trade took place. (_id attribute from exchanges endpoint).
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a trade. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a trade. (_id attribute from assets endpoint).
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data
     *
     * @async
     * @desc Get history transactions from specific symbol, returned in time ascending order. If no start & end time is
     *      defined when calling the endpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} symbolId - Symbol identifier used to filter response.
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    tradesGetHistoricalData(symbolId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/' + symbolId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by exchange
     *
     * @async
     * @desc Get history transactions from specific exchange, returned in time ascending order. If no start & end time
     *      is defined when calling the endpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where trade took place. (_id attribute from exchanges endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    tradesGetHistoricalDataByExchange(exchangeId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by base asset
     *
     * @async
     * @desc Get history transactions from specific base asset, returned in time ascending order. If no start & end time
     *      is defined when calling the endpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a trade. (_id attribute from assets endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    tradesGetHistoricalDataByAsset(baseAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by asset pair
     *
     * @async
     * @desc Get history transactions from specific assets pair (exp. BTC/USD), returned in time ascending order. If no start
     *      & end time is defined when calling the endpoint, your data results will be provided 24 hours back, by default.
     *
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a trade. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a trade. (_id attribute from assets endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    tradesGetHistoricalDataByAssetPair(baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * Historical Data by exchange assets pair
     *
     * @async
     * @desc Get history transactions from specific assets pair (exp. BTC/USD) in a specific exchange, returned in time
     *      ascending order. If no start & end time is defined when calling the endpoint, your data results will be
     *      provided 24 hours back, by default.
     *
     * @param {string} exchangeId - Our identifier (UID) of the exchange where trade took place. (_id attribute from exchanges endpoint).
     * @param {string} baseAsset - Our identifier (UID) of the base asset in a trade. (_id attribute from assets endpoint).
     * @param {string} quoteAsset - Our identifier (UID) of the quote asset in a trade. (_id attribute from assets endpoint).
     * @param {number} timeStart - Unix Timestamp for the start of the requested period.
     * @param {number} timeEnd - Unix Timestamp for the end of the requested period. Has current time by default.
     * @param {number} [skip=0] - The offset of items to start from. Useful for paginations. (e.g. skip=100 would show results from 101 item to 150).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50).
     *
     * @returns {*}
     */
    tradesGetHistoricalDataByExchangeAssetPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Trades;
