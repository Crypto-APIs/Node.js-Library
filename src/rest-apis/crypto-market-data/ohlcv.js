class OHLCV {

    constructor(req) {
        this.request = req;
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

}

module.exports = OHLCV;
