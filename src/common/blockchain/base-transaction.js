const BaseChainComponent = require('./base-chain-component');

class BaseTransaction extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    getTransaction(txID) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/txid/' + txID);
    }

    getTransactionIndexByBlock(block, index = 0, limit = 1) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getUnconfirmedTransactions(index = 0, limit = 100) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/unconfirmed?index=' + index + '&limit=' + limit);
    }

    decodeRawTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/decode', {
            hex: hex
        });
    }

    createTransaction(inputs, outputs, fee) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/create', {
            inputs: inputs,
            outputs: outputs,
            fee: fee,
        });
    }

    signTransaction(hex, wifs) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/sign', {
            hex: hex,
            wifs: wifs,
        });
    }

    sendTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/send', {
            hex: hex
        });
    }

    newTransaction(inputs, outputs, fee, wifs) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new', {
            createTx: {
                inputs: inputs,
                outputs: outputs,
                fee: fee
            },
            wifs: wifs
        });
    }

    createHDWalletTransaction(walletName, password, outputs, fee, inputs = null, locktime = null) {
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

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/hdwallet', data);
    }

    getTransactionsFee() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/fee');
    }

}

module.exports = BaseTransaction;
