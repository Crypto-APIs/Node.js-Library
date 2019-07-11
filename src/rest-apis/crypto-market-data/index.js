var Arbitrage = require('./arbitrage');
var ExchangeRates = require('./exchange-rates');
var Meta = require('./meta');
var OHLCV = require('./ohlcv');
var Quotes = require('./quotes');
var Trades = require('./trades');

class CMD {

    constructor(req) {
        this.arbitrage = new Arbitrage(req);
        this.exchangeRates = new ExchangeRates(req);
        this.meta = new Meta(req);
        this.OHLCV = new OHLCV(req);
        this.quotes = new Quotes(req);
        this.trades = new Trades(req);
    }

}

module.exports = CMD;
