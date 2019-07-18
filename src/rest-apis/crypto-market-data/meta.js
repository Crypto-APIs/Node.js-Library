const BaseAuth = require('../../common/base-auth');

class Meta extends BaseAuth {

    /**
     * GET /exchanges?skip={skip}&limit={limit}
     */
    listAllExchanges(skip = 0, limit = 50) {
        return this.request.get('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /exchanges/{exchangeId}
     */
    getExchangeDetails(exchangeId) {
        return this.request.get('/exchanges/' + exchangeId);
    }

    /**
     * GET /assets?skip={skip}&limit={limit}
     */
    listAllAssets(skip = 0, limit = 50) {
        return this.request.get('/assets?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /assets/{assetId}
     */
    getAssetDetails(assetId) {
        return this.request.get('/assets/' + assetId);
    }

    /**
     * GET /mappings?skip={skip}&limit={limit}
     */
    listAllSymbols(skip = 0, limit = 50) {
        return this.request.get('/mappings?skip=' + skip + '&limit=' + limit);
    }

    /**
     * GET /mappings/{symbolId}
     */
    getSymbolDetails(symbolId) {
        return this.request.get('/mappings/' + symbolId);
    }

}

module.exports = Meta;
