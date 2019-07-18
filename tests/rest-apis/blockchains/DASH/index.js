const DASH = require('./dash.test');

async function middleware(caClient, next, network = caClient.BC.DASH.NETWORKS.TESTNET) {
    caClient.BC.DASH.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, DASH, network);
