const {NETWORKS} = require('../../../../src/rest-apis/blockchain/BCH');

const BCH = require('./bch.test');

function middleware(caClient, next, network = NETWORKS.TESTNET) {
    caClient.blockchain.BCH.switchNetwork(network);

    next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, BCH, network);
