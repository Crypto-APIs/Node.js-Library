const request = require('../../common/request');

class Meta {

    static listAllExchanges(skip = 0, limit = 50) {
        return request.getInstance().get('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    static getExchangeDetails(exchangeId) {
        return request.getInstance().get('/exchanges/' + exchangeId);
    }

    static listAllAssets(skip = 0, limit = 50) {
        return request.getInstance().get('/assets?skip=' + skip + '&limit=' + limit);
    }

    static getAssetDetails(assetId) {
        return request.getInstance().get('/assets/' + assetId);
    }

    static listAllSymbols(skip = 0, limit = 50) {
        return request.getInstance().get('/mappings?skip=' + skip + '&limit=' + limit);
    }

    static getSymbolDetails(symbolId) {
        return request.getInstance().get('/mappings/' + symbolId);
    }

}

module.exports = Meta;
