class ExchangeRates {

    constructor(req) {
        this.request = req;
    }

    getSpecificRate(baseAssetId, quoteAssetId, timestamp) {
        return this.request.get('/exchange-rates/' + baseAssetId + '/' + quoteAssetId + '?timestamp=' + timestamp);
    }

    getAllCurrentRates(baseAssetId, timestamp, skip = 0, limit = 50) {
        return this.request.get('/exchange-rates/' + baseAssetId + '?timestamp=' + timestamp + '&skip=' + skip + '&limit=' + limit);
    }

}

module.exports = ExchangeRates;
