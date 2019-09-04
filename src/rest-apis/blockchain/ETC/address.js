const querystring = require('querystring');
const BaseAddress = require('../../../common/blockchain/base-address');

class ETCAddress extends BaseAddress {

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

        const queryString = querystring.stringify(queryParams);

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/account?' + queryString, data);
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
        const queryString = querystring.stringify(queryParams);

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/nonce?' + queryString);
    }

}

module.exports = ETCAddress;
