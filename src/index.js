'use strict';

const Proxy = require('./common/proxy');
const Network = require('./common/network');

const Blockchain = require('./rest-apis/blockchain');
const CryptoMarketData = require('./rest-apis/crypto-market-data');
const Trading = require('./rest-apis/trading');

class CryptoAPIs {

    constructor(apiKey) {
        Proxy.getInstance(apiKey); // Creates an instance of the Proxy class for usage across endpoints
        Network.getInstance(apiKey); // Creates an instance of the Network class for usage across endpoints

        this.BC = new Blockchain(apiKey);
        this.CMD = new CryptoMarketData(apiKey);
        this.TR = new Trading(apiKey);
    }

}

module.exports = CryptoAPIs;
