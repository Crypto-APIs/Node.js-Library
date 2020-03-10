const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Blockchain = require('../../../common/blockchain/base-blockchain');

const Address = require('./address');
const Transaction = require('./transaction');

const ID = 'zil';
const NETWORKS = {
    MAINNET: 'mainnet',
};

class ZIL extends BlockchainNetwork {

    constructor(...props) {
        super(...props, ID, NETWORKS, NETWORKS.MAINNET);

        this.address = new Address(...props, ID);
        this.blockchain = new Blockchain(...props, ID);
        this.transaction = new Transaction(...props, ID);
    }

}

module.exports = {
    ZIL,
    NETWORKS,
};
