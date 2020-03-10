const BaseChainComponent = require('../../../common/blockchain/base-chain-component');

class ZILTransaction extends BaseChainComponent {

    /**
     * Transaction Hash Endpoint
     *
     * @async
     * @desc The Transaction Hash Endpoint returns detailed information about a given transaction based on its hash.
     *
     * @param {string} txHash - Hash of the transaction in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransaction(txHash, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/hash/' + txHash, queryParams);
    }

    /**
     * Transactions Index Endpoint by Index, Limit and Block Number
     *
     * @async
     * @desc The Transaction Index Endpoint by Index, Limit and Block Number returns detailed information about
     *      transactions for the block height defined, starting from the index defined up to the limit defined.
     *
     * @param {number} block - Block number.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsByBlock(block, queryParams = {}) {
        const combinedQueryParams = {
            index: 0, // Index - start from.
            limit: 50, // Limit - up to.
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + block, combinedQueryParams);
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
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionByBlockNumber(blockNumber, txIndex, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + blockNumber + '/' + txIndex, queryParams);
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
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionByBlockHash(blockHash, txIndex, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/txs/block/' + blockHash + '/' + txIndex, queryParams);
    }

}

module.exports = ZILTransaction;
