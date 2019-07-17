const Base = require('../../../common/blockchain/base-chain-component');

class ETHTransaction extends Base {

    constructor(...props) {
        super(...props);
    }

    /**
     * Transaction Hash Endpoint
     *
     * @async
     * @desc The Transaction Hash Endpoint returns detailed information about a given transaction based on its hash.
     *
     * @param {string} txHash - Hash of the transaction in blockchain.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransaction(txHash) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/hash/' + txHash);
    }

    /**
     * Transactions Index Endpoint by Index, Limit and Block Number
     *
     * @async
     * @desc The Transaction Index Endpoint by Index, Limit and Block Number returns detailed information about
     *      transactions for the block height defined, starting from the index defined up to the limit defined.
     *
     * @param {number} block - Block number.
     * @param {number} [index=0] - Index - start from.
     * @param {number} [limit=50] - Limit - up to.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsByBlock(block, index = 0, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    /**
     * Transactions Index Endpoint by Block Number
     *
     * @async
     * @desc The Transaction Index Endpoint by Block Number returns detailed information about a given transaction based
     *      on its index and block height.
     *
     * @param {number} blockNumber - Block height.
     * @param {number} txIndex - Index of the transaction in block.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionByBlockNumber(blockNumber, txIndex) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + blockNumber + '/' + txIndex);
    }

    /**
     * Transactions Index Endpoint by Block Hash
     *
     * @async
     * @desc The Transaction Index Endpoint by Block Hash returns detailed information about a given transaction based
     *      on its index and block hash.
     *
     * @param {string} blockHash - Block hash.
     * @param {number} txIndex - Index of the transaction in block.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionByBlockHash(blockHash, txIndex) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + blockHash + '/' + txIndex);
    }

    /**
     * New Transaction Endpoint using keystore file stored on our server
     *
     * @async
     * @desc In order to use this endpoint you should have an account(keystore file) stored on our servers.
     *
     *      Then, you need to provide the from address, to address, value to transfer (in Ether), gas price and gas
     *      limit in wei. A standard ETH transfer requires at least a gas limit of 21,000 units of gas. Even if you set
     *      a higher than the required gas limit, only the required limit will be deducted. Optional fields are: nonce
     *      and data. The nonce represents the transactions count for the specified from address. If not specified the
     *      system will automatically calculate the correct nonce.
     *
     * @param {string} fromAddress
     * @param {string} toAddress
     * @param {string} password - Password associated with the keyfile.
     * @param {number} value
     * @param {number} gasPrice
     * @param {number} gasLimit
     * @param {number} [nonce=null] - The transactions count for the specified from address. If not specified the system will automatically calculate the correct nonce.
     * @param {string} [data=null] - Hexidecimal string. Be aware that the gas limit will be higher than the minumum amount of 21,000 wei.
     *
     * @returns {*|Promise<any | never>}
     */
    newTransaction(fromAddress, toAddress, password, value, gasPrice, gasLimit, nonce = null, data = null) {
        const body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            password: password,
            value: value,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
        };

        if (nonce) {
            body.nonce = nonce;
        }

        if (data) {
            body.data = data;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new', body);
    }

    /**
     * Send All Amount Endpoint using keystore file stored on our server
     *
     * @async
     * @desc This endpoint allows users to send all the available ether on their accounts to a specified address.
     *
     * @param fromAddress
     * @param toAddress
     * @param password
     * @param {number} [gasPrice=null] - Gas price has a default value of 15 Gwei.
     * @param {number} [gasLimit=null] - Gas limit will be calculated by the EVM.
     *
     * @returns {*|Promise<any | never>}
     */
    newAllTransaction(fromAddress, toAddress, password, gasPrice, gasLimit) {
        const body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            password: password
        };

        if (gasPrice) {
            body.gasPrice = gasPrice;
        }

        if (gasLimit) {
            body.gasLimit = gasLimit;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new/all', body);
    }

    /**
     * New Transaction Endpoint with a private key
     *
     * @async
     * @desc Crypto APIs allows sending transactions for address that are not hold on our servers.
     *
     * @param {string} fromAddress
     * @param {string} toAddress
     * @param {string} privateKey
     * @param {number} value
     * @param {number} gasPrice
     * @param {number} gasLimit
     * @param {number} [nonce=null] - Integer.
     * @param {string} [data=null] - Hexidecimal.
     *
     * @returns {*|Promise<any | never>}
     */
    newTransactionWithPrivateKey(fromAddress, toAddress, privateKey, value, gasPrice, gasLimit, nonce = null, data = null) {
        const body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            privateKey: privateKey,
            value: value,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
        };

        if (nonce) {
            body.nonce = nonce;
        }

        if (data) {
            body.data = data;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new-pvtkey', body);
    }

    /**
     * Send All Amount Endpoint with a private key
     *
     * @async
     * @desc Crypto APIs allows sending transactions (all available eth on a specified address) for address that are not hold on our servers.
     *
     * @param {string} fromAddress
     * @param {string} toAddress
     * @param {string} privateKey
     * @param {number} [gasPrice=null] - Default gas price is 15Gwei.
     * @param {number} [gasLimit=null] - If not set, will be calculated by the EVM.
     *
     * @returns {*|Promise<any | never>}
     */
    newAllTransactionWithPrivateKey(fromAddress, toAddress, privateKey, gasPrice = null, gasLimit = null) {
        const body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            privateKey: privateKey
        };

        if (gasPrice) {
            body.gasPrice = gasPrice;
        }

        if (gasLimit) {
            body.gasLimit = gasLimit;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/new-pvtkey/all', body);
    }

    /**
     * Locally Sign Your Transaction Endpoint
     *
     * @async
     * @desc Crypto APIs provides the opportunity to locally sign your transaction. If you want to use third-pary tools
     *      for signing your raw transactions you can send to the Locally Sign Your Transaction Endpoint only the following data:
     *      from address, to address, value.
     *
     *      For your convenience we need only this information. We will calculate the nonce for your transaction and add default
     *      values for gas price and gas value. After sending the request a JSON will be send to you (see response body).
     *      With your JSON returned from the Locally Sign Your Transaction Endpoint you now need to use your private key to sign the data provided.
     *
     * @param {string} fromAddress
     * @param {string} toAddress
     * @param {number} value
     *
     * @returns {*|Promise<any | never>}
     */
    sendTransaction(fromAddress, toAddress, value) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/send', {
            fromAddress: fromAddress,
            toAddress: toAddress,
            value: value
        });
    }

    /**
     * Push Raw Transaction Endpoint
     *
     * @async
     * @desc Once you’ve finished signing the raw transaction locally, send that raw transaction to our Push Raw Transaction Endpoint.
     *
     * @param {string} hex - Raw transaction.
     *
     * @returns {*|Promise<any | never>}
     */
    pushTransaction(hex) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/push', {
            hex: hex
        });
    }

    /**
     * Estimate Transaction Gas Endpoint
     *
     * @async
     * @desc Crypto APIs provides an endpoint for estimating the gas needed for a successful transaction. This is very
     *      useful when sending ether to contracts or making a transaction with additional data in it.
     *
     * @param {string} fromAddress
     * @param {string} toAddress
     * @param {number} value - Value of the transaction.
     * @param {string} [data=null] - If data is added it should be a valid hexadecimal number otherwise an error will be returned as a response.
     *
     * @returns {*|Promise<any | never>}
     */
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

    /**
     * Pending Transactions Endpoint
     *
     * @async
     * @desc Pending Transactions Endpoint makes a call to the EVM and returns all pending transactions. The response
     *      might be limited if you lack credits.
     *
     * @param {number} [limit=50] - Limit to transactions.
     *
     * @returns {*|Promise<any | never>}
     */
    getPendingTransactions(limit = 50) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/pending?limit=' + limit);
    }

    /**
     * Queued Transactions Endpoint
     *
     * @async
     * @desc Queued Transactions Endpoint makes a call to the EVM and returns all queued transactions. The response
     *      might be limited if you lack credits.
     *
     * @param {number} [limit=50] - Limit to transactions.
     *
     * @returns {*|Promise<any | never>}
     */
    getQuedTransactions(limit = 50) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/txs/queued?limit=' + limit);
    }

    /**
     * Transactions Fee Endpoint
     *
     * @async
     * @desc Transactions Fee Endpoint gives information about the gas price for the successfull transactions included
     *      in the last 1500 blocks. min shows the lowest gas price, max is the highest and average - the average gas price.
     *      Recommended is the gas price that we consider as the one that corresponds to a cheap and fast execution.
     *      However, it is only a suggestion and should be used at users' sole discretion. All gas prices are in Gwei.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsFee() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/fee');
    }

}

module.exports = ETHTransaction;
