const ZIL = require('./zil.test');

async function middleware(caClient, next, network = caClient.BC.ZIL.NETWORKS.MAINNET) {
    caClient.BC.ZIL.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, ZIL, network);
