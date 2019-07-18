const BaseAuth = require('../../common/base-auth');

class Trades extends BaseAuth {

    /**
     * GET /trades/latest?limit={limit}
     */
    getLatestData(limit = 50) {
        return this.request.get('/trades/latest?limit=' + limit);
    }

    /**
     * GET /trades/{symbolId}/latest?skip={skip}&limit={limit}
     */
    getLatestDataBySymbol(symbolId, skip = 0, limit = 50) {
        return this.request.get('/trades/' + symbolId + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/latest?skip={skip}&limit={limit}
     */
    getLatestDataByExchange(exchangeId, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/latest?skip={skip}&limit={limit}
     */
    getLatestDataByAsset(baseAsset, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?skip={skip}&limit={limit}
     */
    getLatestDataByAssetsPair(baseAsset, quoteAsset, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?skip={skip}&limit={limit}
     */
    getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/{symbolId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    tradesGetHistoricalData(symbolId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/' + symbolId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    tradesGetHistoricalDataByExchange(exchangeId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    tradesGetHistoricalDataByAsset(baseAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    tradesGetHistoricalDataByAssetPair(baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /trades/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    tradesGetHistoricalDataByExchangeAssetPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Trades;
