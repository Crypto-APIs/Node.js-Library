const Address = require('./address');
const Blockchain = require('./blockchain');

const Transaction = require('./transaction');
const PaymentForwarding = require('./payment-forwarding');

const BASE_PATH = '/bc/eth/';

class ETH {

    constructor(req) {
        this.blockchain = new Blockchain(req, BASE_PATH);
        this.address = new Address(req, BASE_PATH);

        this.transaction = new Transaction(req, BASE_PATH);
        this.paymentForwarding = new PaymentForwarding(req, BASE_PATH);
    }

    estimateSmartContractGas(network) {

        return this.request.get('/bc/eth/' + network + '/contracts/gas');
    }

    deploySmartContract(network, privateKey, from, gasPrice, gasLimit, byteCode) {

        return this.request.post('/bc/eth/' + network + '/contracts', {
            privateKey: privateKey,
            fromAddress: from,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            byteCode: byteCode
        });
    }

    getAddressTokenBalance(network, address, contract) {

        return this.request.get('/bc/eth/' + network + '/tokens/' + address + '/' + contract + '/balance');
    }

    TransferTokens(network, fromAddress, toAddress, contract, gasPrice, gasLimit, token, password = null, privateKey = null) {

        var body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            contract: contract,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            token: token
        };

        if (password) {

            body['password'] = password;
        } else {
            body['privateKey'] = privateKey;
        }

        return this.request.post('/bc/eth/' + network + '/tokens/transfer', body);
    }

    CreatePayment(network, fromAddress, toAddress, callbackURL, password = null, privateKey = null) {

        var body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            callBack: callbackURL
        };

        if (password) {

            body['password'] = password;
        } else {
            body['privateKey'] = privateKey;
        }

        return this.request.post('/bc/eth/' + network + '/payments', body);
    }

    DeletePayment(network, uuid) {

        return this.request.delete('/bc/eth/' + network + '/payments/' + uuid);
    }

    ListPayment(network) {

        return this.request.get('/bc/eth/' + network + '/payments');
    }

    ListPaymentHistory(network) {

        return this.request.get('/bc/eth/' + network + '/payments/history');
    }

    CreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.request.post('/bc/eth/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    CreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.request.post('/bc/eth/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            confirmations: confirmations,
            transaction: transaction
        });
    }

    CreateTransactionConfirmationsWebHook(network, callbackURL, address, confirmations) {
        return this.request.post('/bc/eth/' + network + '/hooks', {
            "event": "TRANSACTION_CONFIRMATIONS",
            "url": callbackURL,
            "confirmations": confirmations,
            "address": address
        });
    }

    CreateNewBlockWebHook(network, callbackURL) {

        return this.request.post('/bc/eth/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    CreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.request.post('/bc/eth/' + network + '/hooks', {
            event: 'ADDRESS',
            address: address,
            url: callbackURL
        });
    }

    ListAllWebHooks(network) {

        return this.request.get('/bc/eth/' + network + '/hooks');
    }

    DeleteWebHook(network, webhookID) {

        return this.request.delete('/bc/eth/' + network + '/hooks/' + webhookID);
    }

}

module.exports = ETH;