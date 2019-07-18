const BaseAuth = require('../../common/base-auth');

class OHLCV extends BaseAuth {

    /**
     * GET /ohlcv/periods
     */
    listAllPeriods() {
        return this.request.get('/ohlcv/periods');
    }

    /**
     * GET /ohlcv/latest/{symbolId}?period={periodId}&limit={limit}
     */
    latestData(symbolId, periodId, limit = 50) {
        return this.request.get('/ohlcv/latest/' + symbolId + '?period=' + periodId + '&limit=' + limit);
    }

    /**
     * GET /ohlcv/history/{symbolId}?period={periodId}&timePeriodStart={timeStart}&timePeriodEnd={timeEnd}&limit={limit}
     */
    historicalData(symbolId, periodId, timeStart, timeEnd, limit = 50) {
        return this.request.get('/ohlcv/history/' + symbolId + '?period=' + periodId + '&timePeriodStart=' + timeStart + '&timePeriodEnd=' + timeEnd + '&limit=' + limit);
    }

}

module.exports = OHLCV;
