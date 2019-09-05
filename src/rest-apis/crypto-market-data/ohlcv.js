const BaseAuth = require('../../common/base-auth');

class OHLCV extends BaseAuth {

    /**
     * List all Periods
     *
     * @async
     * @desc Get full list of, supported by us, time periods available for requesting OHLCV data.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listAllPeriods(queryParams = {}) {
        return this.request.get('/ohlcv/periods', queryParams);
    }

    /**
     * Latest Data
     *
     * @async
     * @desc Get OHLCV latest time-series data for requested symbol and period, returned in time descending order.
     *
     * @param {string} symbolId - Symbol identifier (UID) used to filter response. (required).
     * @param {string} periodId - Identifier of requested time period (required, e.g. 1hrs, 2mth etc.) (required).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    latestData(symbolId, periodId, queryParams = {}) {
        const combinedQueryParams = {
            periodId: periodId,
            limit: 50, // Amount of items to return (optional, default value is 50)
            ...queryParams,
        };

        return this.request.get('/ohlcv/latest/' + symbolId, combinedQueryParams);
    }

    /**
     * Historical Data
     *
     * @async
     * @desc Get OHLCV time-series data for requested symbol and period, returned in time ascending order.
     *
     * @param {string} symbolId - Symbol identifier (UID) used to filter response. (required).
     * @param {string} period - Identifier of requested time period (required, e.g. 1hrs, 2mth etc.) (required).
     * @param {number} timePeriodStart - Time period starting time in timestamp (required).
     * @param {number} timePeriodEnd - Time period ending time in timestamp (optional, if not supplied then the data is returned to the end or when count of result elements reaches the limit).
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    historicalData(symbolId, period, timePeriodStart, timePeriodEnd, queryParams = {}) {
        const combinedQueryParams = {
            period: period,
            timePeriodStart: timePeriodStart,
            timePeriodEnd: timePeriodEnd,
            limit: 50, // Amount of items to return (optional, default value is 50)
            ...queryParams,
        };

        return this.request.get('/ohlcv/history/' + symbolId, combinedQueryParams);
    }

}

module.exports = OHLCV;
