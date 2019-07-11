class Meta {

    constructor(req) {
        this.request = req;
    }

    getAllExchanges(skip = 0, limit = 50) {
        return this.request.get('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    getAllAssets(skip = 0, limit = 50) {
        return this.request.get('/assets?skip=' + skip + '&limit=' + limit);
    }

    getAllSymbols(skip = 0, limit = 50) {
        return this.request.get('/mappings?skip=' + skip + '&limit=' + limit);
    }


}

module.exports = Meta;
