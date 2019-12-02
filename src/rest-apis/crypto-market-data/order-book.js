const BaseAuth = require('../../common/base-auth');

class OrderBook extends BaseAuth {

    /**
     * Snapshot by symbol
     *
     * @async
     * @desc Get current Order Book snapshot of an asset pair in a given exchange.
     *
     * @param {string} symbolId - Our symbol identifier, see table below for format description.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getSnapshotBySymbol(symbolId, queryParams = {}) {
        return this.request.get('/order-book/' + symbolId + '/snapshot', queryParams);
    }

}

module.exports = OrderBook;
