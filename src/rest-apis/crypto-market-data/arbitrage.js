class Arbitrage {

    constructor(req) {
        this.request = req;
    }

    getLatest(skip = 0, limit = 50) {
        return this.request.get('/arbitrage-rest?skip=' + skip + '&limit=' + limit);
    }

}

module.exports = Arbitrage;
