const Address = require('./address');
const Blockchain = require('./blockchain');

const Transaction = require('./transaction');
const PaymentForwarding = require('./payment-forwarding');

const Wallet = require('./wallet');

const BASE_PATH = '/bc/btc/';

class BTC {

    constructor(req) {
        this.address = new Address(req, BASE_PATH);
        this.blockchain = new Blockchain(req, BASE_PATH);

        this.transaction = new Transaction(req, BASE_PATH);
        this.paymentForwarding = new PaymentForwarding(req, BASE_PATH);

        this.wallet = new Wallet(req, BASE_PATH);
    }

    getTransaction(network, txID) {

        return this.request.get('/bc/btc/' + network + '/txs/txid/' + txID);
    }

    getTransactionsFee(network) {
        return this.request.get('/bc/btc/' + network + '/txs/fee');
    }

    getTransactionByBlockIndex(network, block, index) {

        return this.request.get('/bc/btc/' + network + '/txs/block/' + block + '/' + index);
    }

    getTransactionsByBlockIndex(network, block, index, limit) {

        return this.request.get('/bc/btc/' + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getUnconfirmedTransactions(network) {

        return this.request.get('/bc/btc/' + network + '/txs');
    }

    // TODO: Missing in docs?
    TransactionTrace(network, txs) {

        return this.request.post('/bc/btc/' + network + '/txs/trace', {
            txs: txs
        });
    }

    // TODO: Missing in docs?
    getLatestTransactions(network, limit = 50) {

        return this.request.get('/bc/btc/' + network + '/txs/latest?limit=' + limit);
    }

    // TODO: Missing in docs?
    getTransactionsHistory(network, txsIncluded = true, index = 0, limit = 50) {

        return this.request.get('/bc/btc/' + network + '/txs/history?txs-included=' + txsIncluded + '&index=' + index + '&limit=' + limit);
    }

    createTransaction(network, inputs, outputs, fee, wifs) {

        return this.request.post('/bc/btc/' + network + '/txs/new', {
            createTx: {
                inputs: inputs,
                outputs: outputs,
                fee: fee
            },
            wifs: wifs
        });
    }

    createHDWalletTransaction(network, walletName, password, fee, outputs, inputs = null, locktime = null) {
        var data = {
            walletName: walletName,
            password: password,
            outputs: outputs,
            fee: fee
        };

        if (inputs) {
            data.inputs = inputs;
        }

        if (locktime) {
            data.locktime = locktime;
        }

        return this.request.post('/bc/btc/' + network + '/txs/hdwallet', data);
    }

    sendTransaction(network, toSend) {

        return this.request.post('/bc/btc/' + network + '/txs/send', {
            toSend: toSend
        });
    }

    decodeRawTransaction(network, txHex) {

        return this.request.post('/bc/btc/' + network + '/txs/decode', {
            txHex: txHex
        });
    }

    CreatePayment(network, from, to, callbackURL, wallet, password) {

        return this.request.post('/bc/btc/' + network + '/payments', {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password
        });
    }

    ListPayment(network) {

        return this.request.get('/bc/btc/' + network + '/payments');
    }

    DeletePayment(network, paymentID) {

        return this.request.delete('/bc/btc/' + network + '/payments/' + paymentID);
    }

    CreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.request.post('/bc/btc/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    CreateNewBlockWebHook(network, callbackURL) {

        return this.request.post('/bc/btc/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    CreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.request.post('/bc/btc/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    CreateTransactionConfirmationsWebHook(network, callbackURL, address, confirmations) {
        return this.request.post('/bc/btc/' + network + '/hooks', {
            "event": "TRANSACTION_CONFIRMATIONS",
            "url": callbackURL,
            "confirmations": confirmations,
            "address": address
        });
    }

    CreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.request.post('/bc/btc/' + network + '/hooks', {
            event: 'ADDRESS',
            url: callbackURL,
            address: address
        });
    }

    listAllHooks(network) {

        return this.request.get('/bc/btc/' + network + '/hooks');
    }

    deleteWebHook(network, webhookID) {

        return this.request.delete('/bc/btc/' + network + '/hooks/' + webhookID);
    }

}

module.exports = BTC;