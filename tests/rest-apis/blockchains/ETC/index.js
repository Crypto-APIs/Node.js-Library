const ETC = require('./etc.test');

async function middleware(caClient, next, network = caClient.BC.ETC.NETWORKS.MORDEN) {
    console.log(caClient.BC.ETC.NETWORKS);
    caClient.BC.ETC.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, ETC, network);
