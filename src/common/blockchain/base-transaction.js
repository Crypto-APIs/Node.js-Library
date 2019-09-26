const BaseChainComponent = require('./base-chain-component');

class BaseTransaction extends BaseChainComponent {

    /**
     * Transactions Txid Endpoint
     *
     * @async
     * @desc The Transaction Txid Endpoint returns detailed information about a given transaction based on its id.
     *
     * @param {string} txID - Id of the transaction in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransaction(txID, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/txid/' + txID, queryParams);
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
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionIndexByBlock(block, queryParams = {}) {
        const combinedQueryParams = {
            index: 0, // Index to start from.
            limit: 1, // Number of transactions to be returned.
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block, combinedQueryParams);
    }

    /**
     * Unconfirmed Transactions Endpoint
     *
     * @async
     * @desc The Unconfirmed Transactions Endpoint returns an array of the latest transactions relayed by nodes in a
     *      blockchain that haven’t been included in any blocks.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getUnconfirmedTransactions(queryParams = {}) {
        const combinedQueryParams = {
            index: 0, // Index to start from.
            limit: 100, // Number of transactions to be returned.
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/unconfirmed', combinedQueryParams);
    }

    /**
     * Decode Raw Transactions Endpoint
     *
     * @async
     * @desc We also offer the ability to decode raw transactions without sending propagating them to the network;
     *      perhaps you want to double-check another client library or confirm that another service is sending proper transactions.
     *
     * @param {string} hex - Hex of raw transaction.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    decodeRawTransaction(hex, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            hex: hex
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/decode', data, queryParams);
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
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createTransaction(inputs, outputs, fee, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            inputs: inputs,
            outputs: outputs,
            fee: fee,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/create', data, queryParams);
    }

    /**
     * Sign Transactions Endpoint
     *
     * @async
     * @desc The Sign Transactions Endpoint allows users to sign a raw transaction.
     *
     * @param {string} hex - Hex of raw transaction.
     * @param {Array} wifs
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    signTransaction(hex, wifs, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            hex: hex,
            wifs: wifs,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/sign', data, queryParams);
    }

    /**
     * Send Transactions Endpoint
     *
     * @async
     * @desc Transaction Send Endpoint allows users to broadcast the signed transaction to the Blockchain.
     *
     * @param {string} hex - Hex of raw transaction.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    sendTransaction(hex, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            hex: hex,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/send', data, queryParams);
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
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    newTransaction(inputs, outputs, fee, wifs, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            createTx: {
                inputs: inputs,
                outputs: outputs,
                fee: fee
            },
            wifs: wifs
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new', data, queryParams);
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
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createHDWalletTransaction(walletName, password, outputs, fee, optData = {}, queryParams = {}) {
        let data = {
            inputs: null,
            locktime: 0,
        };

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            walletName: walletName,
            password: password,
            outputs: outputs,
            fee: fee,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/hdwallet', data, queryParams);
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
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsFee(queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/fee', queryParams);
    }

    /**
     * Refund Transaction Endpoint
     *
     * @async
     * @desc The Refund Transaction Endpoint allows users easily to return the amount in bch they have received from an
     *      unknown source. Only two fields are required: the `txid` of the transcation and the `wif` of the recipient
     *      address (see examples). There is an optional field `fee`. If `fee` field is not set the system will set the
     *      recommended fee from the Transaction Fee Endpoint.
     *
     * @param {string} txid
     * @param {string} wif
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise|Promise<any>}
     */
    refund(txid, wif, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            txid: txid,
            wif: wif,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/refund', data, queryParams);
    }

}

module.exports = BaseTransaction;
