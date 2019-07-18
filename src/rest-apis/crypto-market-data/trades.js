const request = require('../../common/proxy');

class Trades {

    /**
     * GET /trades/latest?limit={limit}
     */
    static getLatestData(limit = 50) {
        return request.getInstance().get('/trades/latest?limit=' + limit);
    }

    /**
     * GET /trades/{symbolId}/latest?skip={skip}&limit={limit}
     */
    static getLatestDataBySymbol(symbolId, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/' + symbolId + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/latest?skip={skip}&limit={limit}
     */
    static getLatestDataByExchange(exchangeId, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/exchange/' + exchangeId + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/latest?skip={skip}&limit={limit}
     */
    static getLatestDataByAsset(baseAsset, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/baseAsset/' + baseAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?skip={skip}&limit={limit}
     */
    static getLatestDataByAssetsPair(baseAsset, quoteAsset, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?skip={skip}&limit={limit}
     */
    static getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/{symbolId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static tradesGetHistoricalData(symbolId, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/' + symbolId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static tradesGetHistoricalDataByExchange(exchangeId, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/exchange/' + exchangeId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static tradesGetHistoricalDataByAsset(baseAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/baseAsset/' + baseAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static tradesGetHistoricalDataByAssetPair(baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    static tradesGetHistoricalDataByExchangeAssetPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return request.getInstance().get('/trades/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Trades;
