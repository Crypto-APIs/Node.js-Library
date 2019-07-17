const {NETWORKS} = require('../../../../src/rest-apis/blockchain/DASH');

const DASH = require('./dash.test');

async function middleware(caClient, next, network = NETWORKS.TESTNET) {
    caClient.BC.DASH.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, DASH, network);
