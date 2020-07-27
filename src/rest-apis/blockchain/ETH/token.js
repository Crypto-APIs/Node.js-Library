const EthBaseToken = require('../../../common/blockchain/eth-base-token');

class EthToken extends EthBaseToken {

    /**
     * Token Transactions By Address
     *
     * @async
     * @desc In the request url you should provide the address you want to observe. The response will be a json object
     *      with a list of all token transactions for the specified address (in DESC order).
     *
     * @param {string} address
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTokenTransactionsByAddress(address, queryParams = {}) {
        const combinedQueryParams = {
            limit: 50,
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/tokens/address/' + address + '/transfers', combinedQueryParams);
    }

    /**
     * Get Address Token Transfers
     *
     * @async
     * @desc In the request url you should provide the address you want to observe. After sending the request you will
     *      receive a json object with a list of each transfer for the specified address that includes the following
     *      information: the contract, the name, symbol and type of the token.
     *
     * @param {string} address
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getAddressTokenTransfers(address, queryParams = {}) {
        const combinedQueryParams = {
            limit: 50,
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/tokens/address/' + address, combinedQueryParams);
    }

    /**
     * Estimate Token Transaction GasLimit
     *
     * @async
     * @desc Crypto APIs provides an endpoint for estimating the gas limit needed for a successful transaction.
     *
     * @param {string} fromAddress - From address.
     * @param {string} toAddress - To address.
     * @param {string} contract - Contract address.
     * @param {number} tokenAmount - Token amount of the transaction.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     */
    estimateTokenTransactionGasLimit(fromAddress, toAddress, contract, tokenAmount, optData = {}, queryParams = {}) {
        let data = {};

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            fromAddress: fromAddress,
            toAddress: toAddress,
            contract: contract,
            tokenAmount: tokenAmount
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/tokens/transfer/gas-limit', data, queryParams);
    }

}

module.exports = EthToken;
