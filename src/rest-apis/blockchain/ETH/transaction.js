const EthBaseTransaction = require('../../../common/blockchain/eth-base-transaction');

class ETHransaction extends EthBaseTransaction {

    /**
     * Get Internal Transactions Endpoint
     *
     * @async
     * @desc The Internal Transactions Endpoint returns information about the contract internal transactions for the given transaction.
     *
     * @param {string} txHash - Hash of the transaction in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getInternalTransaction(txHash, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/hash/' + txHash + '/internal', queryParams);
    }

}

module.exports = ETHransaction;
