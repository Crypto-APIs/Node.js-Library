class Quotes {

    constructor(req) {
        this.request = req;
    }

    quotesGetLatestData(skip = 0, limit = 50) {
        return this.request.get('/quotes/latest?skip=' + skip + '&limit=' + limit);
    }

    // TODO GET /v1/quotes/exchange/{exchangeId}/latest?limit={limit}
    // TODO GET /v1/quotes/baseAsset/{baseAsset}/latest?limit={limit}
    // TODO GET /v1/quotes/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?limit={limit}
    // TODO GET /v1/quotes/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/latest?limit={limit}

    quotesGetHistoricalData(symbol, timeStart, timeEnd, skip = 0, limit = 50) {
        return this.request.get('/quotes/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    // TODO GET /v1/quotes/exchange/{exchangeId}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}
    // TODO GET /v1/quotes/baseAsset/{baseAsset}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}
    // TODO GET /v1/quotes/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}
    // TODO GET /v1/quotes/exchange/{exchangeId}/baseAsset/{baseAsset}/quoteAsset/{quoteAsset}/history?timeStart={timestart}&timeEnd={timeend}&skip={skip}&limit={limit}

}

module.exports = Quotes;
