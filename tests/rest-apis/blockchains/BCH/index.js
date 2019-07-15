const {NETWORKS} = require('../../../../src/rest-apis/blockchain/BCH');

const BCH = require('./bch.test');

function middleware(caClient, next, mainnet = false) {
    if (!mainnet) {
        caClient.blockchain.BCH.switchNetwork(NETWORKS.TESTNET);
    }

    next(caClient);
}

module.exports = (caClient, mainnet) => middleware(caClient, BCH, mainnet);
