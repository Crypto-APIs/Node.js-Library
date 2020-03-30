const BlockchainNetwork = require('../../../common/blockchain/blockchain-network');

const Blockchain = require('../../../common/blockchain/base-blockchain');
const Webhook = require('../../../common/blockchain/base-web-hook');

const Contract = require('../../../common/blockchain/eth-base-contract');
const Address = require('../../../common/blockchain/eth-base-address');
const Token = require('../../../common/blockchain/eth-base-token');
const PaymentForwarding = require('../../../common/blockchain/eth-base-payment-forwarding');
const Transaction = require('../../../common/blockchain/eth-base-transaction');

const ID = 'etc';
const NETWORKS = {
    MAINNET: 'mainnet',
    MORDOR: 'mordor',
    KOTTI: 'kotti',
};

class ETC extends BlockchainNetwork {

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
    ETC,
    NETWORKS,
};
