const request = require('../../common/proxy');

class Meta {

    /**
     * GET /exchanges?skip={skip}&limit={limit}
     */
    static listAllExchanges(skip = 0, limit = 50) {
        return request.getInstance().get('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /exchanges/{exchangeId}
     */
    static getExchangeDetails(exchangeId) {
        return request.getInstance().get('/exchanges/' + exchangeId);
    }

    /**
     * GET /assets?skip={skip}&limit={limit}
     */
    static listAllAssets(skip = 0, limit = 50) {
        return request.getInstance().get('/assets?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /assets/{assetId}
     */
    static getAssetDetails(assetId) {
        return request.getInstance().get('/assets/' + assetId);
    }

    /**
     * GET /mappings?skip={skip}&limit={limit}
     */
    static listAllSymbols(skip = 0, limit = 50) {
        return request.getInstance().get('/mappings?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /mappings/{symbolId}
     */
    static getSymbolDetails(symbolId) {
        return request.getInstance().get('/mappings/' + symbolId);
    }

}

module.exports = Meta;
