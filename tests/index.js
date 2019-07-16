(async function () {
    const CryptoAPIs = require('../src');
    const CMD = require('./rest-apis/crypto-market-data');
    const BCH = require('./rest-apis/blockchains/BCH');
    const Network = require('./rest-apis/blockchains/network-switch.test');

    // const apiKey = 'your API key';
    const apiKey = '5ed74f587d4193a08defacaba132b4b6b2ae1cd0';
    const caClient = new CryptoAPIs(apiKey);

    // await Network(caClient);
    await CMD(caClient);
    // await BCH(caClient);
})();
