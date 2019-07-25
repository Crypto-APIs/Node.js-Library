const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Address = require('../../../common/blockchain/base-address');
const Blockchain = require('../../../common/blockchain/base-blockchain');
const Transaction = require('../../../common/blockchain/base-transaction');
const Wallet = require('../../../common/blockchain/base-wallet');
const Webhook = require('../../../common/blockchain/base-web-hook');

const PaymentForwarding = require('./payment-forwarding');

const ID = 'doge';
const NETWORKS = {
    MAINNET: 'mainnet',
    TESTNET: 'testnet',
};

class DOGE extends BlockchainNetwork {

    constructor(...props) {
        super(...props, ID, NETWORKS, NETWORKS.MAINNET);

        this.address = new Address(...props, ID);
        this.blockchain = new Blockchain(...props, ID);
        this.paymentForwarding = new PaymentForwarding(...props, ID);
        this.transaction = new Transaction(...props, ID);
        this.wallet = new Wallet(...props, ID);
        this.webhook = new Webhook(...props, ID);
    }

}

module.exports = {
    DOGE,
    NETWORKS,
};
