var Base = require('./base');
var ExchangeRates = require('./exchange-rates');
var Meta = require('./meta');
var OHLCV = require('./ohlcv');
var Trades = require('./trades');

class CryptoMarketData {

    constructor(...props) {
        this.base = new Base(...props);
        this.exchangeRates = new ExchangeRates(...props);
        this.meta = new Meta(...props);
        this.OHLCV = new OHLCV(...props);
        this.trades = new Trades(...props);
    }

}

module.exports = CryptoMarketData;
