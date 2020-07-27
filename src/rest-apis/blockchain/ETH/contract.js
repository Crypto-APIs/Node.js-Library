const EthBaseContract = require('../../../common/blockchain/eth-base-contract');

class EthContract extends EthBaseContract {

    /**
     * Get Contract GasPrice
     *
     * @async
     * @desc Contract Gas Price Endpoint gives information about the gas price for the latest successful transactions.
     *       Slow shows the lowest gas price, fast is the highest and standard - the average gas price. All gas prices are in Gwei.
     *
     * @param {string} address - Contract address.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getContractGasPrice(address, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/contracts/' + address + '/gas-price', queryParams);
    }

}

module.exports = EthContract;
