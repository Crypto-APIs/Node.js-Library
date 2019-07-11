'use strict';

const Request = require('../request');
const BC = require('./rest-apis/blockchain');
const CMD = require('./rest-apis/crypto-market-data');

class CryptoAPIs {

    constructor(apiKey) {
        const request = new Request(apiKey);

        this.BC = new BC(request);
        this.CMD = new CMD(request);
    }

}

module.exports = CryptoAPIs;
