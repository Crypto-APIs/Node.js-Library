const BaseChainComponent = require('./base-chain-component');

class BaseTransaction extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * Transactions Txid Endpoint
     *
     * @async
     * @desc The Transaction Txid Endpoint returns detailed information about a given transaction based on its id.
     *
     * @param {string} txID - Id of the transaction in blockchain.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransaction(txID) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/txid/' + txID);
    }

    /**
     * Transactions Block Endpoint
     *
     * @async
     * @desc The Transaction Index by Block Endpoint returns detailed information about a list of transactions. The
     *      endpoint is useable both with block height and block hash. index and limit query parameters might also be used,
     *      as their default values are, as follows: 0, 1. Therefore, if none is specified the returned object will be the
     *      first transaction (the coinbase transaction) included in the block.
     *
     * @param block
     * @param {number} [index=0] - Index to start from.
     * @param {number} [limit=1] - Number of transactions to be returned.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionIndexByBlock(block, index = 0, limit = 1) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    /**
     * Unconfirmed Transactions Endpoint
     *
     * @async
     * @desc The Unconfirmed Transactions Endpoint returns an array of the latest transactions relayed by nodes in a
     *      blockchain that haven’t been included in any blocks.
     *
     * @param {number} [index=0] - Index to start from.
     * @param {number} [limit=100] - Number of transactions to be returned.
     *
     * @returns {*|Promise<any | never>}
     */
    getUnconfirmedTransactions(index = 0, limit = 100) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/unconfirmed?index=' + index + '&limit=' + limit);
    }

    /**
     * Decode Raw Transactions Endpoint
     *
     * @async
     * @desc We also offer the ability to decode raw transactions without sending propagating them to the network;
     *      perhaps you want to double-check another client library or confirm that another service is sending proper transactions.
     *
     * @param {string} hex - Hex of raw transaction.
     *
     * @returns {*|Promise<any | never>}
     */
    decodeRawTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/decode', {
            hex: hex
        });
    }

    /**
     * Creating Transactions Endpoint
     *
     * @async
     * @desc Using Crypto APIs, you can push transactions to blockchains one of two ways: Use our two-endpoint process
     *      outlined below, wherein we generate a TXSkeleton based on your input address, output address, and value to
     *      transfer. In either case, for security reasons, we never take possession of your private keys. We do use private
     *      keys with our Microtransaction API, but they are for low-value transactions and we discard them immediately from our servers’ memory.
     *
     * @param {Array} inputs
     * @param {Array} outputs
     * @param {Object<{number} value>} fee
     *
     * @returns {*|Promise<any | never>}
     */
    createTransaction(inputs, outputs, fee) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/create', {
            inputs: inputs,
            outputs: outputs,
            fee: fee,
        });
    }

    /**
     * Sign Transactions Endpoint
     *
     * @async
     * @desc The Sign Transactions Endpoint allows users to sign a raw transaction.
     *
     * @param {string} hex - Hex of raw transaction.
     * @param {Array} wifs
     *
     * @returns {*|Promise<any | never>}
     */
    signTransaction(hex, wifs) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/sign', {
            hex: hex,
            wifs: wifs,
        });
    }

    /**
     * Send Transactions Endpoint
     *
     * @async
     * @desc Transaction Send Endpoint allows users to broadcast the signed transaction to the Blockchain.
     *
     * @param {string} hex - Hex of raw transaction.
     *
     * @returns {*|Promise<any | never>}
     */
    sendTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/send', {
            hex: hex
        });
    }

    /**
     * New Transaction Endpoint
     *
     * @async
     * @desc The New Transaction Endpoint combines the other three endpoints: Create, Sign and Send Endpoints.
     *      Users should provide the inputs and outputs fields with the corresponding data, as well as the fee and the
     *      wifs(private ECDSA keys) of the addresses. Therefore, the endpoint creates, signs and broadcasts the new
     *      transaction to the Blockchain.
     *
     * @param {Array} inputs
     * @param {Array} outputs
     * @param {Object<{number} value>} fee
     * @param {Array} wifs
     *
     * @returns {*|Promise<any | never>}
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
     * New Transaction Using HDWallet Endpoint
     *
     * @async
     * @desc New Transaction Using HDWallet Endpoint provides the possibility to create, sign and send new transactions
     *      using your HDWallet. The mandatory fields are: walletName, password, outputs and fee. There
     *      are a few optional fields, such as: inputs, fee address and locktime. If input addresses are not included,
     *      then the system will automatically choose addresses from the wallet. However, if included, a list of addresses
     *      from the wallet and the values should be specified. Fee address is optional and if is not specified the fee
     *      will be proportionally distributed among the input addresses. Locktime is an integer and has a default value
     *      of zero. Use locktime if a transaction should be delayed to a specific time.
     *
     * @param {string} walletName - Wallet name.
     * @param {string} password - Wallet password.
     * @param {Array} outputs
     * @param {Object<{number} value, {string} [address]>} fee
     * @param {Array} [inputs=null]
     * @param {number} [locktime=0]
     *
     * @returns {*|Promise<any | never>}
     */
    createHDWalletTransaction(walletName, password, outputs, fee, inputs = null, locktime = 0) {
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
     * Transactions Fee Endpoint
     *
     * @async
     * @desc Transactions Fee Endpoint gives information about the fees for all transactions included in the last 70
     *      blocks. min shows the lowest fee, max is the highest and average - the average fee. recommended is the fee
     *      that we consider as the one that corresponds to a cheap and fast execution. However, it is only a suggestion
     *      and should be used at users' sole discretion. average_bytes represents the average size of the transactions
     *      in bytes and is used for the calculations of the recommended fee price. All fees are in bch.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsFee() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/fee');
    }

}

module.exports = BaseTransaction;
