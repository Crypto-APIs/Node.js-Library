(async function () {
    const CryptoAPIs = require('../src');
    const Network = require('./rest-apis/blockchains/network-switch.test');
    const CMD = require('./rest-apis/crypto-market-data');
    const BCH = require('./rest-apis/blockchains/BCH');
    const BTC = require('./rest-apis/blockchains/BTC');
    const DASH = require('./rest-apis/blockchains/DASH');
    const DOGE = require('./rest-apis/blockchains/DOGE');
    const ETH = require('./rest-apis/blockchains/ETH');
    const LTC = require('./rest-apis/blockchains/LTC');

    // const apiKey = 'your API key';
    const apiKey = '5ed74f587d4193a08defacaba132b4b6b2ae1cd0';
    const caClient = new CryptoAPIs(apiKey);

    // await Network(caClient);
    // await CMD(caClient);
    // await BCH(caClient);
    // await BTC(caClient);
    // await DASH(caClient);
    // await DOGE(caClient);
    // await ETH(caClient);
    // await LTC(caClient);

    // caClient.BC.ETH.switchNetwork('mainnet');
    // caClient.BC.ETH.transaction.newTransaction(from, to, password, value, gasPrice, gasLimit, null, hexData)
    //     .then(res => console.log(JSON.stringify(res, null, 2)));
    caClient.BC.BTC.address.generateAddress().then(console.log);
    caClient.BC.LTC.address.generateAddress().then(console.log);
    caClient.BC.BCH.address.generateAddress().then(console.log);
    caClient.BC.DOGE.address.generateAddress().then(console.log);
    caClient.BC.DASH.address.generateAddress().then(console.log);
})();
