const LTC = require('./ltc.test');

async function middleware(caClient, next, network = caClient.BC.LTC.NETWORKS.TESTNET) {
    caClient.BC.LTC.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, LTC, network);
