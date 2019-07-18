const request = require('../../common/proxy');

class ExchangeRates {

    /**
     * GET /exchange-rates/{baseAsset}/{quoteAsset}?timestamp={timestamp}
     */
    static getSpecificRate(baseAsset, quoteAsset, timestamp) {
        return request.getInstance().get('/exchange-rates/' + baseAsset + '/' + quoteAsset + '?timestamp=' + timestamp);
    }

    /**
     * GET /exchange-rates/{baseAsset}?timestamp={timestamp}&skip={skip}&limit={limit}
     */
    static getAllCurrentRates(baseAsset, timestamp, skip = 0, limit = 50) {
        return request.getInstance().get('/exchange-rates/' + baseAsset + '?timestamp=' + timestamp + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = ExchangeRates;
