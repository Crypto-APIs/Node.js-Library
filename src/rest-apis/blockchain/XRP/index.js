const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Blockchain = require('../../../common/blockchain/base-blockchain');
const Webhook = require('../../../common/blockchain/base-web-hook');

const Address = require('./address');
const Transaction = require('./transaction');

const ID = 'xrp';
const NETWORKS = {
    MAINNET: 'mainnet',
    TESTNET: 'testnet',
};

class XRP extends BlockchainNetwork {

    constructor(...props) {
        super(...props, ID, NETWORKS, NETWORKS.MAINNET);

        this.address = new Address(...props, ID);
        this.blockchain = new Blockchain(...props, ID);
        this.transaction = new Transaction(...props, ID);
        this.webhook = new Webhook(...props, ID);
    }

}

module.exports = {
    XRP,
    NETWORKS,
};
