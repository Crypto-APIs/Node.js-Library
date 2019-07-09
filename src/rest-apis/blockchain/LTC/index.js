const Address = require('./address');
const Blockchain = require('./blockchain');

const Transaction = require('./transaction');
const PaymentForwarding = require('./payment-forwarding');

const Wallet = require('./wallet');

const BASE_PATH = '/bc/ltc/';

class LTC {

    constructor(req) {
        this.blockchain = new Blockchain(req, BASE_PATH);
        this.address = new Address(req, BASE_PATH);

        this.transaction = new Transaction(req, BASE_PATH);
        this.paymentForwarding = new PaymentForwarding(req, BASE_PATH);

        this.wallet = new Wallet(req, BASE_PATH);
    }

    TransactionTrace(network, txs) {

        return this.request.post('/bc/ltc/' + network + '/txs/trace', {
            txs: txs
        });
    }

    getLatestTransactions(network, limit = 50) {

        return this.request.get('/bc/ltc/' + network + '/txs/latest?limit=' + limit);
    }

    getTransactionsHistory(network, txsIncluded = true, index = 0, limit = 50) {

        return this.request.get('/bc/ltc/' + network + '/txs/history?txs-included=' + txsIncluded + '&index=' + index + '&limit=' + limit);
    }

    CreatePayment(network, from, to, callbackURL, wallet, password) {

        return this.request.post('/bc/ltc/' + network + '/payments', {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password
        });
    }

    ListPayment(network) {

        return this.request.get('/bc/ltc/' + network + '/payments');
    }

    DeletePayment(network, paymentID) {

        return this.request.delete('/bc/ltc/' + network + '/payments/' + paymentID);
    }

    CreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.request.post('/bc/ltc/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    CreateNewBlockWebHook(network, callbackURL) {

        return this.request.post('/bc/ltc/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    CreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.request.post('/bc/ltc/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    CreateTransactionConfirmationsWebHook(network, callbackURL, address, confirmations) {
        return this.request.post('/bc/ltc/' + network + '/hooks', {
            "event": "TRANSACTION_CONFIRMATIONS",
            "url": callbackURL,
            "confirmations": confirmations,
            "address": address
        });
    }

    CreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.request.post('/bc/ltc/' + network + '/hooks', {
            event: 'ADDRESS',
            url: callbackURL,
            address: address
        });
    }

    listAllHooks(network) {

        return this.request.get('/bc/ltc/' + network + '/hooks');
    }

    deleteWebHook(network, webhookID) {

        return this.request.delete('/bc/ltc/' + network + '/hooks/' + webhookID);
    }

}

module.exports = LTC;