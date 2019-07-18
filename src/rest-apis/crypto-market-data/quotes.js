const BaseAuth = require('../../common/base-auth');

class Quotes extends BaseAuth {

    /**
     * GET /quotes/latest?limit={limit}
     */
    getLatestData(limit = 50) {
        return this.request.get('/quotes/latest?limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/latest?limit={limit}
     */
    getLatestDataByExchange(exchangeId, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/latest?limit={limit}
     */
    getLatestDataByBaseAsset(baseAsset, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?limit={limit}
     */
    getLatestDataByAssetsPair(baseAsset, quoteAsset, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?limit={limit}
     */
    getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/latest?limit=' + limit);
    }

    /**
     * GET /quotes/{symbolId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    getHistoricalData(symbolId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/' + symbolId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    getHistoricalDataByExchange(exchangeId, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    getHistoricalDataByAsset(baseAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    getHistoricalDataByAssetsPair(baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /quotes/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timeStart}&timeEnd={timeEnd}&skip={skip}&limit={limit}
     */
    getHistoricalDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/exchange/' + exchangeId + '/baseAsset/' + baseAsset + '/quoteAsset/' + quoteAsset + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Quotes;
