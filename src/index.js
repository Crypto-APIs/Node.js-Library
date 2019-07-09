'use strict';

const Request = require('../request');
const BC = require('./rest-apis/blockchain');

class CryptoAPIs {

    constructor(apiKey) {
        this.request = new Request(apiKey);
        this.BC = new BC(this.request);
    }

    getAllExchanges(skip = 0, limit = 50) {
        return this.request.get('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    // TODO: GET /v1/exchanges/{exchangeId} missing?

    getAllAssets(skip = 0, limit = 50) {

        return this.request.get('/assets?skip=' + skip + '&limit=' + limit);
    }

    getAllSymbols(skip = 0, limit = 50) {

        return this.request.get('/mappings?skip=' + skip + '&limit=' + limit);
    }

    getSpecificRate(baseAsset, quoteAsset) {

        return this.request.get('/exchange-rates/' + baseAsset + '/' + quoteAsset);
    }

    getAllCurrentRates(baseAsset) {

        return this.request.get('/exchange-rates/' + baseAsset);
    }

    getOHLCVPeriods() {

        return this.request.get('/ohlcv/periods');
    }

    getOHLCVLatestData(symbol, period, limit = 50) {

        return this.request.get('/ohlcv/latest/' + symbol + '?period=' + period + '&limit=' + limit);
    }

    getOHLCVHistoricalData(symbol, period, timePeriodStart, timePeriodEnd, limit = 50) {

        return this.request.get('/ohlcv/history/' + symbol + '?period=' + period + '&timePeriodStart=' + timePeriodStart + '&timePeriodEnd=' + timePeriodEnd + '&limit=' + limit);
    }

    tradesGetLatestData(skip = 0, limit = 50) {

        return this.request.get('/trades/latest?skip=' + skip + '&limit=' + limit);
    }

    tradesGetLatestDataBySymbol(symbol) {

        return this.request.get('/trades/' + symbol + '/latest');
    }

    tradesGetHistoricalData(symbol, timeStart, timeEnd, skip = 0, limit = 50) {

        return this.request.get('/trades/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    quotesGetLatestData(skip = 0, limit = 50) {

        return this.request.get('/quotes/latest?skip=' + skip + '&limit=' + limit);
    }

    quotesGetHistoricalData(symbol, timeStart, timeEnd, skip = 0, limit = 50) {

        return this.request.get('/quotes/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = CryptoAPIs;