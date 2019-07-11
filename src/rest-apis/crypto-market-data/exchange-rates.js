class ExchangeRates {

    constructor(req) {
        this.request = req;
    }

    getSpecificRate(baseAsset, quoteAsset) {
        return this.request.get('/exchange-rates/' + baseAsset + '/' + quoteAsset);
    }

    getAllCurrentRates(baseAsset) {
        return this.request.get('/exchange-rates/' + baseAsset);
    }

}

module.exports = ExchangeRates;
