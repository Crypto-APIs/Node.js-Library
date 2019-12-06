const BaseAddress = require('./base-address');

class EthBaseAddress extends BaseAddress {

    /**
     * Get Transactions By Address
     *
     * @async
     * @desc The Transactions By Address Endpoint returns all transactions specified by the query params: index and limit;
     *      The maximum value of limit is 50. The value in the returned transactions in WEI.
     *
     * @param {string} address - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsByAddress(address, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/transactions', queryParams);
    }

    /**
     * Generate Account Endpoint
     *
     * @async
     * @desc The Generate Account Endpoint allows you to generate private-public key-pairs along with an associated public
     *      address encoded in a keyfile. A password and user id are required with this POST request. Keyfiles are stored
     *      in a keystore subdirectory on our servers. The critical component of the keyfile, the account’s private key,
     *      is always encrypted, and it is encrypted with the password entered when the account was created.
     *
     * @param {string} password
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    generateAccount(password, optData = {}, queryParams = {}) {
        let data = {};

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            password: password
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/account', data, queryParams);
    }

    /**
     * Nonce Endpoint
     *
     * @async
     * @desc The Nonce Endpoint returns the current nonce of the specified address.
     *
     * @param {string} address - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getAddressNonce(address, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/nonce', queryParams);
    }

}

module.exports = EthBaseAddress;
