class ETHTransaction {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    getTransaction(network, txHash) {
        return this.request.get(this.basePath + network + '/txs/hash/' + txHash);
    }

    getTransactionsByBlock(network, block, index = 0, limit = 50) {
        return this.request.get(this.basePath + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getTransactionByBlockNumber(network, block, blockNumber) {
        return this.request.get(this.basePath + network + '/txs/block/' + block + '/' + blockNumber);
    }

    getTransactionByBlockHash(network, block, blockHash) {
        return this.request.get(this.basePath + network + '/txs/block/' + block + '/' + blockHash);
    }

    newTransaction(network, fromAddress, toAddress, gasPrice, gasLimit, value, password) {
        return this.request.post(this.basePath + network + '/txs/new', {
            fromAddress: fromAddress,
            toAddress: toAddress,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            value: value,
            password: password
        });
    }

    newAllTransaction(network, fromAddress, toAddress, password) {
        return this.request.post(this.basePath + network + '/txs/new/all', {
            fromAddress: fromAddress,
            toAddress: toAddress,
            password: password
        });
    }

    newTransactionWithPrivateKey(network, from, to, gasPrice, gasLimit, value, privateKey) {
        return this.request.post(this.basePath + network + '/txs/new-pvtkey', {
            fromAddress: from,
            toAddress: to,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            value: value,
            privateKey: privateKey
        });
    }

    newAllTransactionWithPrivateKey(network, from, to, gasPrice, gasLimit, value, privateKey) {
        return this.request.post(this.basePath + network + '/txs/new-pvtkey/all', {
            fromAddress: from,
            toAddress: to,
            privateKey: privateKey
        });
    }

    sendTransaction(network, fromAddress, toAddress, value) {
        return this.request.post(this.basePath + network + '/txs/send', {
            fromAddress: fromAddress,
            toAddress: toAddress,
            value: value
        });
    }

    pushTransaction(network, hex) {
        return this.request.post(this.basePath + network + '/txs/push', {
            hex: hex
        });
    }

    estimateTransactionGas(network, fromAddress, toAddress, value, data = null) {
        var body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            value: value
        };

        if (data) {
            body.data = data;
        }

        return this.request.post(this.basePath + network + '/txs/gas', body);
    }

    getPendingTransactions(network) {
        return this.request.post(this.basePath + network + '/txs/pending');
    }

    getQuedTransactions(network) {
        return this.request.post(this.basePath + network + '/txs/queued');
    }

    getTransactionsFee(network) {
        return this.request.get(this.basePath + network + '/txs/fee');
    }

}

module.exports = ETHTransaction;
