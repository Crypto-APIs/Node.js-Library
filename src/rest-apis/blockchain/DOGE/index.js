const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Address = require('./address');
const Blockchain = require('./blockchain');
const PaymentForwarding = require('./payment-forwarding');
const Transaction = require('./transaction');
const Wallet = require('./wallet');
const Webhook = require('./webhook');

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
