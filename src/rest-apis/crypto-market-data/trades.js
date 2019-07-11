class Trades {

    constructor(req) {
        this.request = req;
    }

    tradesGetLatestData(skip = 0, limit = 50) {
        return this.request.get('/trades/latest?skip=' + skip + '&limit=' + limit);
    }

    tradesGetLatestDataBySymbol(symbol) {
        return this.request.get('/trades/' + symbol + '/latest');
    }


    // TODO GET /v1/trades/exchange/{exchangeId}/latest?skip={skip}&limit={limit}
    // TODO GET /v1/trades/baseAsset/{baseAsset}/latest?skip={skip}&limit={limit}
    // TODO GET /v1/trades/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?skip={skip}&limit={limit}
    // TODO GET /v1/trades/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?skip={skip}&limit={limit}

    tradesGetHistoricalData(symbol, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/trades/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    // TODO GET /v1/trades/exchange/{exchangeId}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}
    // TODO GET /v1/trades/baseAsset/{baseAsset}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}
    // TODO GET /v1/trades/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}
    // TODO GET /v1/trades/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}

}

module.exports = Trades;
