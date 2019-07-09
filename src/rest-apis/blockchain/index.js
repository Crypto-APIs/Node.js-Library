var BCH = require('./BCH');
var BTC = require('./BTC');
var DOGE = require('./DOGE');
var ETH = require('./ETH');
var LTC = require('./LTC');

class BC {

    constructor(req) {
        this.BCH = new BCH(req);
        this.BTC = new BTC(req);
        this.DOGE = new DOGE(req);
        this.ETH = new ETH(req);
        this.LTC = new LTC(req);
    }

}

module.exports = BC;