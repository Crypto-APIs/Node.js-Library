const Address = require('./address');
const Blockchain = require('./blockchain');
const Contract = require('./contract');
const PaymentForwarding = require('./payment-forwarding');
const Token = require('./token');
const Transaction = require('./transaction');
const Webhook = require('./webhook');

const BASE_PATH = '/bc/eth/';

class ETH {

    constructor(req) {
        this.address = new Address(req, BASE_PATH);
        this.blockchain = new Blockchain(req, BASE_PATH);
        this.contract = new Contract(req, BASE_PATH);
        this.paymentForwarding = new PaymentForwarding(req, BASE_PATH);
        this.token = new Token(req, BASE_PATH);
        this.transaction = new Transaction(req, BASE_PATH);
        this.webhook = new Webhook(req, BASE_PATH);
    }

}

module.exports = ETH;
