const Proxy = require('../src/common/proxy');

const CryptoAPIs = require('../src');
const Network = require('./rest-apis/blockchains/network-switch.test');
const CMD = require('./rest-apis/crypto-market-data');
const BCH = require('./rest-apis/blockchains/BCH');
const BTC = require('./rest-apis/blockchains/BTC');
const DASH = require('./rest-apis/blockchains/DASH');
const DOGE = require('./rest-apis/blockchains/DOGE');
const ETH = require('./rest-apis/blockchains/ETH');
const LTC = require('./rest-apis/blockchains/LTC');

(async function () {
    const apiKey = 'your API key';
    const caClient = new CryptoAPIs(apiKey);

    Proxy.getInstance(apiKey).setLogging(true);

    await Network(caClient);
    await CMD(caClient);
    await BCH(caClient);
    await BTC(caClient);
    await DASH(caClient);
    await DOGE(caClient);
    await ETH(caClient);
    await LTC(caClient);
})();
