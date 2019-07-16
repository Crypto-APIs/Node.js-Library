const {NETWORKS} = require('../../../../src/rest-apis/blockchain/DOGE');

const DOGE = require('./doge.test');

async function middleware(caClient, next, network = NETWORKS.TESTNET) {
    caClient.blockchain.DOGE.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, DOGE, network);
