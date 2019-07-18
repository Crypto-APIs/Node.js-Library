const BaseAuth = require('../../common/base-auth');

class OHLCV extends BaseAuth {

    /**
     * List all Periods
     *
     * @async
     * @desc Get full list of, supported by us, time periods available for requesting OHLCV data.
     *
     * @returns {*}
     */
    listAllPeriods() {
        return this.request.get('/ohlcv/periods');
    }

    /**
     * Latest Data
     *
     * @async
     * @desc Get OHLCV latest time-series data for requested symbol and period, returned in time descending order.
     *
     * @param {string} symbolId - Symbol identifier (UID) used to filter response. (required).
     * @param {string} periodId - Identifier of requested time period (required, e.g. 1hrs, 2mth etc.) (required).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50)
     *
     * @returns {*}
     */
    latestData(symbolId, periodId, limit = 50) {
        return this.request.get('/ohlcv/latest/' + symbolId + '?period=' + periodId + '&limit=' + limit);
    }

    /**
     * Historical Data
     *
     * @async
     * @desc Get OHLCV time-series data for requested symbol and period, returned in time ascending order.
     *
     * @param {string} symbolId - Symbol identifier (UID) used to filter response. (required).
     * @param {string} periodId - Identifier of requested time period (required, e.g. 1hrs, 2mth etc.) (required).
     * @param {number} timeStart - Time period starting time in timestamp (required).
     * @param {number} timeEnd - Time period ending time in timestamp (optional, if not supplied then the data is returned to the end or when count of result elements reaches the limit).
     * @param {number} [limit=50] - Amount of items to return (optional, default value is 50)
     *
     * @returns {*}
     */
    historicalData(symbolId, periodId, timeStart, timeEnd, limit = 50) {
        return this.request.get('/ohlcv/history/' + symbolId + '?period=' + periodId + '&timePeriodStart=' + timeStart + '&timePeriodEnd=' + timeEnd + '&limit=' + limit);
    }

}

module.exports = OHLCV;
