const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Blockchain = require('../../../common/blockchain/base-blockchain');
const Transaction = require('../../../common/blockchain/base-transaction');
const Wallet = require('../../../common/blockchain/base-wallet');
const OmniLayer = require('../../../common/blockchain/base-omni-layer');

const Address = require('./address');
const PaymentForwarding = require('./payment-forwarding');
const Webhook = require('./web-hook');

const ID = 'btc';
const NETWORKS = {
    MAINNET: 'mainnet',
    TESTNET: 'testnet',
};

class BTC extends BlockchainNetwork {

    constructor(...props) {
        super(...props, ID, NETWORKS, NETWORKS.MAINNET);

        this.address = new Address(...props, ID);
        this.blockchain = new Blockchain(...props, ID);
        this.paymentForwarding = new PaymentForwarding(...props, ID);
        this.transaction = new Transaction(...props, ID);
        this.wallet = new Wallet(...props, ID);
        this.webhook = new Webhook(...props, ID);
        this.omniLayer = new OmniLayer(...props, ID);
    }

}

module.exports = {
    BTC,
    NETWORKS,
};
