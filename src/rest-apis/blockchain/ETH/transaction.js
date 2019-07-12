const Base = require('../../../common/blockchain/base-chain-component');

class ETHTransaction extends Base {

    constructor(...props) {
        super(...props);
    }

    getTransaction(txHash) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/hash/' + txHash);
    }

    getTransactionsByBlock(block, index = 0, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getTransactionByBlockNumber( block, blockNumber) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block + '/' + blockNumber);
    }

    getTransactionByBlockHash(block, blockHash) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block + '/' + blockHash);
    }

    newTransaction(fromAddress, toAddress, gasPrice, gasLimit, value, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new', {
            fromAddress: fromAddress,
            toAddress: toAddress,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            value: value,
            password: password
        });
    }

    newAllTransaction(fromAddress, toAddress, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new/all', {
            fromAddress: fromAddress,
            toAddress: toAddress,
            password: password
        });
    }

    newTransactionWithPrivateKey(from, to, gasPrice, gasLimit, value, privateKey) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new-pvtkey', {
            fromAddress: from,
            toAddress: to,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            value: value,
            privateKey: privateKey
        });
    }

    newAllTransactionWithPrivateKey(from, to, gasPrice, gasLimit, value, privateKey) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new-pvtkey/all', {
            fromAddress: from,
            toAddress: to,
            privateKey: privateKey
        });
    }

    sendTransaction(fromAddress, toAddress, value) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/send', {
            fromAddress: fromAddress,
            toAddress: toAddress,
            value: value
        });
    }

    pushTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/push', {
            hex: hex
        });
    }

    estimateTransactionGas(fromAddress, toAddress, value, data = null) {
        var body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            value: value
        };

        if (data) {
            body.data = data;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/gas', body);
    }

    getPendingTransactions() {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/pending');
    }

    getQuedTransactions() {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/queued');
    }

    getTransactionsFee() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/fee');
    }

}

module.exports = ETHTransaction;
