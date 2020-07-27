const XRP = require('./xrp.test');

async function middleware(caClient, next, network = caClient.BC.XRP.NETWORKS.TESTNET) {
    caClient.BC.XRP.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, XRP, network);
