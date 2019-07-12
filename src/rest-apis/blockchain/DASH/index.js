const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const ID = 'dash';
const NETWORKS = {
    MAINNET: 'mainnet',
    TESTNET: 'testnet',
};

class DASH extends BlockchainNetwork {

    constructor() {
        super(ID, NETWORKS, NETWORKS.MAINNET);

    }

}

module.exports = DASH;
