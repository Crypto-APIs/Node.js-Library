const BaseAuth = require('../../common/base-auth');

class ExchangeRates extends BaseAuth {

    /**
     * GET /exchange-rates/{baseAsset}/{quoteAsset}?timestamp={timestamp}
     */
    getSpecificRate(baseAsset, quoteAsset, timestamp) {
        return this.request.get('/exchange-rates/' + baseAsset + '/' + quoteAsset + '?timestamp=' + timestamp);
    }

    /**
     * GET /exchange-rates/{baseAsset}?timestamp={timestamp}&skip={skip}&limit={limit}
     */
    getAllCurrentRates(baseAsset, timestamp, skip = 0, limit = 50) {
        return this.request.get('/exchange-rates/' + baseAsset + '?timestamp=' + timestamp + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = ExchangeRates;
