const {NETWORKS} = require('../../../../src/rest-apis/blockchain/LTC');

const LTC = require('./ltc.test');

async function middleware(caClient, next, network = NETWORKS.TESTNET) {
    caClient.BC.LTC.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, LTC, network);
