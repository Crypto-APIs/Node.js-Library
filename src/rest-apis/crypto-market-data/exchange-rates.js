const request = require('../../common/request');

class ExchangeRates {

    static getSpecificRate(baseAssetId, quoteAssetId, timestamp) {
        return request.getInstance().get('/exchange-rates/' + baseAssetId + '/' + quoteAssetId + '?timestamp=' + timestamp);
    }

    static getAllCurrentRates(baseAssetId, timestamp, skip = 0, limit = 50) {
        return request.getInstance().get('/exchange-rates/' + baseAssetId + '?timestamp=' + timestamp + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = ExchangeRates;
