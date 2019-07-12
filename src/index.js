'use strict';

const Request = require('../request');
const Blockchain = require('./rest-apis/blockchain');
const CryptoMarketData = require('./rest-apis/crypto-market-data');

class CryptoAPIs {

    constructor(apiKey) {
        const request = new Request(apiKey);

        this.blockchain = new Blockchain(request);
        this.cryptoMarketData = new CryptoMarketData(request);
    }

}

module.exports = CryptoAPIs;
