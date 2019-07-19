const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Blockchain = require('../../../common/blockchain/base-blockchain');

const Address = require('./address');
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

    constructor(...props) {
        super(...props, ID, NETWORKS, NETWORKS.MAINNET);

        this.address = new Address(...props, ID);
        this.blockchain = new Blockchain(...props, ID);
        this.contract = new Contract(...props, ID);
        this.paymentForwarding = new PaymentForwarding(...props, ID);
        this.token = new Token(...props, ID);
        this.transaction = new Transaction(...props, ID);
        this.webhook = new Webhook(...props, ID);
    }

}

module.exports = {
    ETH,
    NETWORKS,
};
