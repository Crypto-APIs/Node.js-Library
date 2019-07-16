'use strict';

const Request = require('./common/request');
const Network = require('./common/network');

const Blockchain = require('./rest-apis/blockchain');
const CryptoMarketData = require('./rest-apis/crypto-market-data');

class CryptoAPIs {

    constructor(apiKey) {
        Request.getInstance(apiKey); // Creates an instance of the Request class for usage across endpoints
        Network.getInstance(); // Creates an instance of the Network class for usage across endpoints

        this.blockchain = new Blockchain();
        this.cryptoMarketData = new CryptoMarketData();
    }

}

module.exports = CryptoAPIs;
