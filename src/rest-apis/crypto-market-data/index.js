var Arbitrage = require('./arbitrage');
var ExchangeRates = require('./exchange-rates');
var Meta = require('./meta');
var OHLCV = require('./ohlcv');
var Quotes = require('./quotes');
var Trades = require('./trades');

class CryptoMarketData {

    constructor() {
        this.arbitrage = Arbitrage;
        this.exchangeRates = ExchangeRates;
        this.meta = Meta;
        this.OHLCV = OHLCV;
        this.quotes = Quotes;
        this.trades = Trades;
    }

}

module.exports = CryptoMarketData;
