const Meta = require('./meta.test');
const OHLCV = require('./ohlcv.test');
const Trades = require('./trades.test');

async function CMD(caClient) {
    console.log('\n::Crypto market data');

    await Meta(caClient);
    await OHLCV(caClient);
    await Trades(caClient);
}

module.exports = caClient => CMD(caClient);
