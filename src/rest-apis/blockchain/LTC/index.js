const Address = require('./address');
const Blockchain = require('./blockchain');
const PaymentForwarding = require('./payment-forwarding');
const Transaction = require('./transaction');
const Wallet = require('./wallet');
const Webhook = require('./webhook');

const BASE_PATH = '/bc/ltc/';

class LTC {

    constructor(req) {
        this.address = new Address(req, BASE_PATH);
        this.blockchain = new Blockchain(req, BASE_PATH);
        this.paymentForwarding = new PaymentForwarding(req, BASE_PATH);
        this.transaction = new Transaction(req, BASE_PATH);
        this.wallet = new Wallet(req, BASE_PATH);
        this.webhook = new Webhook(req, BASE_PATH);
    }

}

module.exports = LTC;
