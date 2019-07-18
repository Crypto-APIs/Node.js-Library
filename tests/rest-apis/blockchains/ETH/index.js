const ETH = require('./eth.test');

async function middleware(caClient, next, network = caClient.BC.ETH.NETWORKS.ROPSTEN) {
    caClient.BC.ETH.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, ETH, network);
