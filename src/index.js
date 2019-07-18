'use strict';

const Request = require('./common/proxy');
const Network = require('./common/network');

const Blockchain = require('./rest-apis/blockchain');
const CryptoMarketData = require('./rest-apis/crypto-market-data');

class CryptoAPIs {

    constructor(apiKey) {
        Request.getInstance(apiKey); // Creates an instance of the Request class for usage across endpoints
        Network.getInstance(); // Creates an instance of the Network class for usage across endpoints

        this.BC = new Blockchain();
        this.CMD = new CryptoMarketData();
    }

}

module.exports = CryptoAPIs;
