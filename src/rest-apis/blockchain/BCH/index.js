const Address = require('./address');
const Blockchain = require('./blockchain');
const PaymentForwarding = require('./payment-forwarding');
const Transaction = require('./transaction');
const Wallet = require('./wallet');
const Webhook = require('./webhook');

const BASE_PATH = '/bc/bch/';

class BCH {

    constructor(req) {
        this.address = new Address(req, BASE_PATH);
        this.blockchain = new Blockchain(req, BASE_PATH);
        this.paymentForwarding = new PaymentForwarding(req, BASE_PATH);
        this.transaction = new Transaction(req, BASE_PATH);
        this.wallet = new Wallet(req, BASE_PATH);
        this.webhook = new Webhook(req, BASE_PATH);
    }

    getTransactionsByBlockIndex(network, block, index, limit) {

        return this.request.get('/bc/bch/' + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    TransactionTrace(network, txs) {

        return this.request.post('/bc/bch/' + network + '/txs/trace', {
            txs: txs
        });
    }

    getLatestTransactions(network, limit = 50) {

        return this.request.get('/bc/bch/' + network + '/txs/latest?limit=' + limit);
    }

    getTransactionsHistory(network, txsIncluded = true, index = 0, limit = 50) {

        return this.request.get('/bc/bch/' + network + '/txs/history?txs-included=' + txsIncluded + '&index=' + index + '&limit=' + limit);
    }

    CreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.request.post('/bc/bch/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    CreateNewBlockWebHook(network, callbackURL) {

        return this.request.post('/bc/bch/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    CreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.request.post('/bc/bch/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    CreateTransactionConfirmationsWebHook(network, callbackURL, address, confirmations) {
        return this.request.post('/bc/bch/' + network + '/hooks', {
            "event": "TRANSACTION_CONFIRMATIONS",
            "url": callbackURL,
            "confirmations": confirmations,
            "address": address
        });
    }

    CreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.request.post('/bc/bch/' + network + '/hooks', {
            event: 'ADDRESS',
            url: callbackURL,
            address: address
        });
    }

    listAllHooks(network) {

        return this.request.get('/bc/bch/' + network + '/hooks');
    }

    deleteWebHook(network, webhookID) {

        return this.request.delete('/bc/bch/' + network + '/hooks/' + webhookID);
    }

}

module.exports = BCH;