const BTC = require('./btc.test');

async function middleware(caClient, next, network = caClient.BC.BTC.NETWORKS.TESTNET) {
    caClient.BC.BTC.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, BTC, network);
