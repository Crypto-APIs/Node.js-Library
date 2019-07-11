class Meta {

    constructor(req) {
        this.request = req;
    }

    listAllExchanges(skip = 0, limit = 50) {
        return this.request.get('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    getExchangeDetails(exchangeId) {
        return this.request.get('/exchanges/' + exchangeId);
    }

    listAllAssets(skip = 0, limit = 50) {
        return this.request.get('/assets?skip=' + skip + '&limit=' + limit);
    }

    getAssetDetails(assetId) {
        return this.request.get('/assets/' + assetId);
    }

    listAllSymbols(skip = 0, limit = 50) {
        return this.request.get('/mappings?skip=' + skip + '&limit=' + limit);
    }

    getSymbolDetails(symbolId) {
        return this.request.get('/mappings/' + symbolId);
    }

}

module.exports = Meta;
