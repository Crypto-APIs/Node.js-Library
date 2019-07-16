const {NETWORKS} = require('../../../../src/rest-apis/blockchain/BTC');

const BTC = require('./btc.test');

async function middleware(caClient, next, network = NETWORKS.TESTNET) {
    caClient.blockchain.BTC.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, BTC, network);
