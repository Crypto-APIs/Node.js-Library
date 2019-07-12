const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Address = require('./address');
const Blockchain = require('./blockchain');
const Contract = require('./contract');
const PaymentForwarding = require('./payment-forwarding');
const Token = require('./token');
const Transaction = require('./transaction');
const Webhook = require('./webhook');

const ID = 'eth';
const NETWORKS = {
    MAINNET: 'mainnet',
    ROPSTEN: 'ropsten',
    RINKEBY: 'rinkeby',
};

class ETH extends BlockchainNetwork {

    constructor() {
        super(ID, NETWORKS, NETWORKS.MAINNET);

        this.address = new Address(ID);
        this.blockchain = new Blockchain(ID);
        this.contract = new Contract(ID);
        this.paymentForwarding = new PaymentForwarding(ID);
        this.token = new Token(ID);
        this.transaction = new Transaction(ID);
        this.webhook = new Webhook(ID);
    }

}

module.exports = ETH;
