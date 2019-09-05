const BaseChainComponent = require('../../../common/blockchain/base-chain-component');

class ETHContract extends BaseChainComponent {

    /**
     * Estimate Gas Smart Contract Endpoint
     *
     * @async
     * @desc This endpoint retuns the average gas price and gas limit set by the Ethereum Blockchain.
     *
     * @example At this point for all kinds of deployments the json result will be as follows:
     *      { "gas_price": 22000000000, "gas_limit": 4300000 }
     *      The actual amount will be known after the deployment is complete.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    estimateSmartContractGas(queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/contracts/gas', queryParams);
    }

    /**
     * Deploy Smart Contract Endpoint
     *
     * @async
     * @desc The Deploy Smart Contract Endpoint allows you to push your smart contract to the Ethereum Blockchain. You
     *      have to provide the bytecode - compiled to binary solidity code.
     *
     * @param {string} privateKey
     * @param {string} fromAddress
     * @param {number} gasPrice
     * @param {number} gasLimit
     * @param {string} byteCode
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    deploySmartContract(privateKey, fromAddress, gasPrice, gasLimit, byteCode, optData = {}, queryParams = {}) {
        let data = {};

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            privateKey: privateKey,
            fromAddress: fromAddress,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            byteCode: byteCode
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/contracts', data, queryParams);
    }

}

module.exports = ETHContract;
