const ETC = require('./etc.test');

async function middleware(caClient, next, network = caClient.BC.ETC.NETWORKS.MORDOR) {
    caClient.BC.ETC.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, ETC, network);
