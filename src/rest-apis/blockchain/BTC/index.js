const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Address = require('./address');
const Blockchain = require('./blockchain');
const PaymentForwarding = require('./payment-forwarding');
const Transaction = require('./transaction');
const Wallet = require('./wallet');
const Webhook = require('./webhook');

const ID = 'btc';
const NETWORKS = {
    MAINNET: 'mainnet',
    TESTNET: 'testnet',
};

class BTC extends BlockchainNetwork {

    constructor() {
        super(ID, NETWORKS, NETWORKS.MAINNET);

        this.address = new Address(ID);
        this.blockchain = new Blockchain(ID);
        this.paymentForwarding = new PaymentForwarding(ID);
        this.transaction = new Transaction(ID);
        this.wallet = new Wallet(ID);
        this.webhook = new Webhook(ID);
    }

}

module.exports = BTC;
