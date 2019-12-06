const BaseChainComponent = require('./base-chain-component');

class OmniBaseLayer extends BaseChainComponent {

    constructor(apiKey, bcId) {
        super(apiKey, bcId);
        this.basePath = this.basePath + 'omni/';
    }

    /**
     * Node Info Endpoint
     *
     * @async
     * @desc General information about the Omni Layer's Node.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getNodeInfo(queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/info', queryParams);
    }

    /**
     * Address Endpoint
     *
     * @async
     * @desc The default Address Endpoint strikes a general information about addresses.
     *
     * @param {string} [address] - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getAddress(address, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address, queryParams);
    }

    /**
     * Address Transactions Endpoint
     *
     * @async
     * @desc The Address Transactions Endpoint returns all information available about a particular address, including
     *      an array of complete transactions.
     *
     * @param {string} [address] - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getAddressTransactions(address, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/transactions', queryParams);
    }

    /**
     * Creating Transactions Endpoint
     *
     * @async
     * @desc This endpoint allows users to create transactions type Simple Send within the Omni Layer.
     *
     * @param {string} from
     * @param {string} to
     * @param {number} value
     * @param {number} fee
     * @param {number} propertyID
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createTransactions(from, to, value, fee, propertyID, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            from: from,
            to: to,
            value: value,
            fee: fee,
            propertyID: propertyID,
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
     * @param {string} wif
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    signTransaction(hex, wif, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            hex: hex,
            wif: wif,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/sign', data, queryParams);
    }

    /**
     * Send Transactions Endpoint
     *
     * @async
     * @desc Transaction Send Endpoint allows users to broadcast the signed transaction to the Bitcoin blockchain.
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
     * @desc The New Transaction Endpoint combines the other three endpoints: Create, Sign and Send Endpoints. In other
     *      words, this endpoint directly broadcasts the newly created transaction to the Bitcoin blockchain. For more
     *      information, see the examples.
     *
     * @param {string} from
     * @param {string} to
     * @param {number} value
     * @param {number} fee
     * @param {number} propertyID
     * @param {string} wif
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    newTransaction(from, to, value, fee, propertyID, wif, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            from: from,
            to: to,
            value: value,
            fee: fee,
            propertyID: propertyID,
            wif: wif,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new', data, queryParams);
    }

    /**
     * New Transaction Using HDWallet Endpoint
     *
     * @async
     * @desc New Transaction Using HDWallet Endpoint provides the possibility to create, sign and send new transactions
     *      using your HDWallet. The mandatory fields are: walletName, password, from, to, value, fee and propertyID.
     *      There are a two optional fields, such as: data and locktime.
     *
     * @param {string} walletName - Wallet name.
     * @param {string} password - Wallet password.
     * @param {string} from
     * @param {string} to
     * @param {number} value
     * @param {number} fee
     * @param {number} propertyID
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createHDWalletTransaction(walletName, password, from, to, value, fee, propertyID, optData = {}, queryParams = {}) {
        let data = {
            locktime: 0,
        };

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            walletName: walletName,
            password: password,
            from: from,
            to: to,
            value: value,
            fee: fee,
            propertyID: propertyID,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/hdwallet', data, queryParams);
    }

    /**
     * Transactions Txid Endpoint
     *
     * @async
     * @desc The Transaction Txid Endpoint returns detailed information about a given transaction based on its txid.
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
     *      endpoint is useable both with block height and block hash. index and limit query parameters might also be
     *      used, as their default values are, as follows: 0, 1. Therefore, if none is specified the returned object
     *      will be the first transaction (the coinbase transaction) included in the block.
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
     * Transactions PropertyId Endpoint
     *
     * @async
     * @desc The Transaction by Property Id Endpoint returns detailed information about a list of transactions by
     *      property. index and limit query parameters might also be used, as their default values are, as follows: 0, 50.
     *
     * @param {number} propertyId -the id of the token
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsPropertyId(propertyId, queryParams = {}) {
        const combinedQueryParams = {
            index: 0, // Index to start from.
            limit: 50, // Number of transactions to be returned.
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/propertyid/' + propertyId, combinedQueryParams);
    }

    /**
     * Omni Layer Unconfirmed Transactions Endpoint
     *
     * @async
     * @desc The endpoint returns an array of the latest transactions relayed in the blockchain that haven’t been
     *      included in any blocks.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getUnconfirmedTransactions(queryParams = {}) {
        const combinedQueryParams = {
            index: 0, // Index to start from.
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/unconfirmed', combinedQueryParams);
    }

}

module.exports = OmniBaseLayer;
