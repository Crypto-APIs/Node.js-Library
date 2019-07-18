const BCH = require('./bch.test');

async function middleware(caClient, next, network = caClient.BC.BCH.NETWORKS.TESTNET) {
    caClient.BC.BCH.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, BCH, network);
