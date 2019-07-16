const request = require('../../common/request');

class OHLCV {

    /**
     * GET /ohlcv/periods
     */
    static listAllPeriods() {
        return request.getInstance().get('/ohlcv/periods');
    }

    /**
     * GET /ohlcv/latest/{symbolId}?period={periodId}&limit={limit}
     */
    static latestData(symbolId, periodId, limit = 50) {
        return request.getInstance().get('/ohlcv/latest/' + symbolId + '?period=' + periodId + '&limit=' + limit);
    }

    /**
     * GET /ohlcv/history/{symbolId}?period={periodId}&timePeriodStart={timeStart}&timePeriodEnd={timeEnd}&limit={limit}
     */
    static historicalData(symbolId, periodId, timeStart, timeEnd, limit = 50) {
        return request.getInstance().get('/ohlcv/history/' + symbolId + '?period=' + periodId + '&timePeriodStart=' + timeStart + '&timePeriodEnd=' + timeEnd + '&limit=' + limit);
    }

}

module.exports = OHLCV;
