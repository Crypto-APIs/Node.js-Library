const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Blockchain = require('../../../common/blockchain/base-blockchain');
const Transaction = require('../../../common/blockchain/base-transaction');
const Wallet = require('../../../common/blockchain/base-wallet');

const PaymentForwarding = require('../../../common/blockchain/btc-base-payment-forwarding');

const OmniLayer = require('../../../common/blockchain/omni-base-layer');
const Webhook = require('../../../common/blockchain/omni-base-web-hook');

const Address = require('./address');

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
