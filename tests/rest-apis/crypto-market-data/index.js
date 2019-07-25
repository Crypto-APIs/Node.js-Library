const Arbitrage = require('./arbitrage.test');
const ExchangeRates = require('./exchange-rates.test');
const Meta = require('./meta.test');
const OHLCV = require('./ohlcv.test');
const Quotes = require('./quotes.test');
const Trades = require('./trades.test');

async function CMD(caClient) {
    console.log('\n::Crypto market data');

    await Arbitrage(caClient);
    await ExchangeRates(caClient);
    await Meta(caClient);
    await OHLCV(caClient);
    await Quotes(caClient);
    await Trades(caClient);
}

module.exports = caClient => CMD(caClient);
