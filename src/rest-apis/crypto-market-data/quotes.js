const request = require('../../common/proxy');

class Quotes {

    /**
     * GET /quotes/latest?limit={limit}
     */
    static getLatestData(limit = 50) {
        return request.getInstance().get('/quotes/latest?limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/latest?limit={limit}
     */
    static getLatestDataByExchange(exchangeId, limit = 50) {
        return request.getInstance().get('/quotes/exchange/' + exchangeId + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/latest?limit={limit}
     */
    static getLatestDataByBaseAsset(baseAsset, limit = 50) {
        return request.getInstance().get('/quotes/baseAsset/' + baseAsset + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?limit={limit}
     */
    static getLatestDataByAssetsPair(baseAsset, quoteAsset, limit = 50) {
        return request.getInstance().get('/quotes/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?limit={limit}
     */
    static getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, limit = 50) {
        return request.getInstance().get('/quotes/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/{symbolId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static getHistoricalData(symbolId, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/quotes/' + symbolId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static getHistoricalDataByExchange(exchangeId, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/quotes/exchange/' + exchangeId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static getHistoricalDataByAsset(baseAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/quotes/baseAsset/' + baseAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static getHistoricalDataByAssetsPair(baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/quotes/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static getHistoricalDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/quotes/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Quotes;
