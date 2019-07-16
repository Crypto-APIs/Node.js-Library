const {NETWORKS} = require('../../../../src/rest-apis/blockchain/BCH');

const BCH = require('./bch.test');

async function middleware(caClient, next, network = NETWORKS.TESTNET) {
    caClient.blockchain.BCH.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, BCH, network);
