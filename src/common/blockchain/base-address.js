const BaseChainComponent = require('./base-chain-component');

class BaseAddress extends BaseChainComponent {

    /**
     * Address Endpoint
     *
     * @async
     * @desc The default Address Endpoint strikes a general information about addresses.
     *
     * @param {string} address - Address in blockchain.
     *
     * @returns {*|Promise<any | never>}
     */
    getInfo(address) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address);
    }

    /**
     * Generate Address Endpoint
     *
     * @async
     * @desc The Generate Address endpoint allows you to generate private-public key-pairs along with an associated public address.
     *
     * @returns {*|Promise<any | never>}
     */
    generateAddress() {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/address', {});
    }

    /**
     * Address Transactions Endpoint
     *
     * @async
     * @desc The Address Transactions Endpoint returns all information available about a particular address, including an array of complete transactions.
     *
     * @param {string} address - Address in blockchain.
     * @param {number} [index=0] - First index of returned results.
     * @param {number} [limit=50] - Sets the number of returned results.
     *
     * @returns {*|Promise<any | never>}
     */
    getAddressTransactions(address, index = 0, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }


}

module.exports = BaseAddress;
