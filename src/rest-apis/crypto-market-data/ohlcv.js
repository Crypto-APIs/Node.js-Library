class OHLCV {

    constructor(req) {
        this.request = req;
    }

    listAllPeriods() {
        return this.request.get('/ohlcv/periods');
    }

    latestData(symbolId, periodId, limit = 50) {
        return this.request.get('/ohlcv/latest/' + symbolId + '?period=' + periodId + '&limit=' + limit);
    }

    historicalData(symbolId, periodId, timeStart, timeEnd, limit = 50) {
        return this.request.get('/ohlcv/history/' + symbolId + '?period=' + periodId + '&timePeriodStart=' + timeStart + '&timePeriodEnd=' + timeEnd + '&limit=' + limit);
    }

}

module.exports = OHLCV;
