const Base = require('./base');
const ExchangeRates = require('./exchange-rates');
const Meta = require('./meta');
const OHLCV = require('./ohlcv');
const Trades = require('./trades');

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
