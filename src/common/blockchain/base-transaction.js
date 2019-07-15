const BaseChainComponent = require('./base-chain-component');

class BaseTransaction extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * GET /bc/bch/{network}/txs/txid/{txID}
     */
    getTransaction(txID) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/txid/' + txID);
    }

    /**
     * GET /bc/bch/{network}/txs/block/{block}?index=0&limit=1
     */
    getTransactionIndexByBlock(block, index = 0, limit = 1) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    /**
     * GET /bc/bch/{network}/txs/unconfirmed?index=0&limit=100
     */
    getUnconfirmedTransactions(index = 0, limit = 100) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/unconfirmed?index=' + index + '&limit=' + limit);
    }

    /**
     * POST /bc/bch/{network}/txs/decode
     */
    decodeRawTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/decode', {
            hex: hex
        });
    }

    /**
     * POST /bc/bch/{network}/txs/create
     */
    createTransaction(inputs, outputs, fee) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/create', {
            inputs: inputs,
            outputs: outputs,
            fee: fee,
        });
    }

    /**
     * POST /bc/bch/{network}/txs/sign
     */
    signTransaction(hex, wifs) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/sign', {
            hex: hex,
            wifs: wifs,
        });
    }

    /**
     * POST /bc/bch/{network}/txs/send
     */
    sendTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/send', {
            hex: hex
        });
    }

    /**
     * POST /bc/bch/{network}/txs/new
     */
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

    /**
     * POST /bc/bch/{network}/txs/hdwallet
     */
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

    /**
     * GET /bc/bch/{network}/txs/fee
     */
    getTransactionsFee() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/fee');
    }

}

module.exports = BaseTransaction;
