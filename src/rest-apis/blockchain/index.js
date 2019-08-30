var {BCH} = require('./BCH');
var {BTC} = require('./BTC');
var {DASH} = require('./DASH');
var {DOGE} = require('./DOGE');
var {ETC} = require('./ETC');
var {ETH} = require('./ETH');
var {LTC} = require('./LTC');

class Blockchain {

    constructor(...props) {
        this.BCH = new BCH(...props);
        this.BTC = new BTC(...props);
        this.DASH = new DASH(...props);
        this.DOGE = new DOGE(...props);
        this.ETC = new ETC(...props);
        this.ETH = new ETH(...props);
        this.LTC = new LTC(...props);
    }

}

module.exports = Blockchain;
