const querystring = require('querystring');
const BaseChainComponent = require('./base-chain-component');

class BaseAddress extends BaseChainComponent {

    /**
     * Address Endpoint
     *
     * @async
     * @desc The default Address Endpoint strikes a general information about addresses.
     *
     * @param {string} address - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getInfo(address, queryParams = {}) {
        const queryString = querystring.stringify(queryParams);

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '?' + queryString);
    }

    /**
     * Generate Address Endpoint
     *
     * @async
     * @desc The Generate Address endpoint allows you to generate private-public key-pairs along with an associated public address.
     *
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    generateAddress(optData = {}, queryParams = {}) {
        const queryString = querystring.stringify(queryParams);

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/address?' + queryString, optData);
    }

    /**
     * Address Transactions Endpoint
     *
     * @async
     * @desc The Address Transactions Endpoint returns all information available about a particular address, including an array of complete transactions.
     *
     * @param {string} address - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getAddressTransactions(address, queryParams = {}) {
        const combinedQueryParams = {
            index: 0, // First index of returned results.
            limit: 50, // Sets the number of returned results.
            ...queryParams,
        };
        const queryString = querystring.stringify(combinedQueryParams);

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/transactions?' + queryString);
    }


}

module.exports = BaseAddress;
