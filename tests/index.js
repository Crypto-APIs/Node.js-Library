const CryptoAPIs = require('../src');

// const apiKey = 'your API key';
const apiKey = '5ed74f587d4193a08defacaba132b4b6b2ae1cd0';

var caClient = new CryptoAPIs(apiKey);

// require('./rest-apis/crypto-market-data')(caClient);
// require('./rest-apis/blockchains/network-switch.test')(caClient);

require('./rest-apis/blockchains/BCH')(caClient);
