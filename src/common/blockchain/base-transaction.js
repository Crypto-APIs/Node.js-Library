class BaseTransaction {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    getTransaction(network, txID) {
        return this.request.get(this.basePath + network + '/txs/txid/' + txID);
    }

    getTransactionIndexByBlock(network, block, index = 0, limit = 1) {
        return this.request.get(this.basePath + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getUnconfirmedTransactions(network, index = 0, limit = 100) {
        return this.request.get(this.basePath + network + '/txs/unconfirmed?index=' + index + '&limit=' + limit);
    }

    decodeRawTransaction(network, hex) {
        return this.request.post(this.basePath + network + '/txs/decode', {
            hex: hex
        });
    }

    createTransaction(network, inputs, outputs, fee) {
        return this.request.post(this.basePath + network + '/txs/create', {
            inputs: inputs,
            outputs: outputs,
            fee: fee,
        });
    }

    signTransaction(network, hex, wifs) {
        return this.request.post(this.basePath + network + '/txs/sign', {
            hex: hex,
            wifs: wifs,
        });
    }

    sendTransaction(network, hex) {
        return this.request.post(this.basePath + network + '/txs/send', {
            hex: hex
        });
    }

    newTransaction(network, inputs, outputs, fee, wifs) {
        return this.request.post(this.basePath + network + '/txs/new', {
            createTx: {
                inputs: inputs,
                outputs: outputs,
                fee: fee
            },
            wifs: wifs
        });
    }

    createHDWalletTransaction(network, walletName, password, outputs, fee, inputs = null, locktime = null) {
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

        return this.request.post(this.basePath + network + '/txs/hdwallet', data);
    }

    getTransactionsFee(network) {
        return this.request.get(this.basePath + network + '/txs/fee');
    }

}

module.exports = BaseTransaction;
