var BCH = require('./BCH');
var BTC = require('./BTC');
var DASH = require('./DASH');
var DOGE = require('./DOGE');
var ETH = require('./ETH');
var LTC = require('./LTC');

class Blockchain {

    constructor() {
        this.BCH = new BCH();
        this.BTC = new BTC();
        this.DASH = new DASH();
        this.DOGE = new DOGE();
        this.ETH = new ETH();
        this.LTC = new LTC();
    }

}

module.exports = Blockchain;
