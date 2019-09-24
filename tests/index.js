const Logger = require('../src/common/logger');

const CryptoAPIs = require('../src');
const Network = require('./rest-apis/blockchains/network-switch.test');
const CMD = require('./rest-apis/crypto-market-data');
const TR = require('./rest-apis/trading');
const BCH = require('./rest-apis/blockchains/BCH');
const BTC = require('./rest-apis/blockchains/BTC');
const DASH = require('./rest-apis/blockchains/DASH');
const DOGE = require('./rest-apis/blockchains/DOGE');
const ETC = require('./rest-apis/blockchains/ETC');
const ETH = require('./rest-apis/blockchains/ETH');
const LTC = require('./rest-apis/blockchains/LTC');

(async function () {
    if (!process.argv[2]) {
        return console.log('Missing API key');
    }

    const apiKey = process.argv[2];
    const caClient = new CryptoAPIs(apiKey);

    Logger.getInstance().setLogging(true);

    await Network(caClient);
    await CMD(caClient);
    await TR(caClient);
    await BCH(caClient);
    await BTC(caClient);
    await DASH(caClient);
    await DOGE(caClient);
    await ETC(caClient);
    await ETH(caClient);
    await LTC(caClient);
})();
