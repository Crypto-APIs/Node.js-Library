const {NETWORKS} = require('../../../../src/rest-apis/blockchain/ETH');

const ETH = require('./eth.test');

async function middleware(caClient, next, network = NETWORKS.ROPSTEN) {
    caClient.blockchain.ETH.switchNetwork(network);

    await next(caClient);
}

module.exports = (caClient, network) => middleware(caClient, ETH, network);
