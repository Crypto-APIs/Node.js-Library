const CryptoAPIs = require('../src');

const apiKey = 'your API key';

var caClient = new CryptoAPIs(apiKey);

caClient.blockchain.BCH.address.getAddressTransactions()
    .then(console.log);
