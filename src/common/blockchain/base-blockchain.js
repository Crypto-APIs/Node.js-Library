const querystring = require('querystring');
const BaseChainComponent = require('./base-chain-component');

class BaseBlockchain extends BaseChainComponent {

    /**
     * Chain Endpoint
     *
     * @async
     * @desc General information about a blockchain is available by GET-ing the base resource.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getInfo(queryParams = {}) {
        const queryString = querystring.stringify(queryParams);

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/info?' + queryString);
    }

    /**
     * Block Hash Endpoint
     *
     * @async
     * @desc Block Hash endpoint gives you detail information for particular block in the blockchain.
     *
     * @param {string} blockHash - Hash of the block in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getBlockByHash(blockHash, queryParams = {}) {
        const queryString = querystring.stringify(queryParams);

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHash + '?' + queryString);
    }

    /**
     * Block Height Endpoint
     *
     * @async
     * @desc Block Height endpoint gives you detail information for particular block in the blockchain.
     *
     * @param {number} blockHeight - Height of the block in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getBlockByHeight(blockHeight, queryParams = {}) {
        const queryString = querystring.stringify(queryParams);

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHeight + '?' + queryString);
    }

    /**
     * Latest Block Endpoint
     *
     * @async
     * @desc Latest Block Endpoint gives you detail information for the latest block in the blockchain.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getLatestBlock(queryParams = {}) {
        const queryString = querystring.stringify(queryParams);

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/latest?' + queryString);
    }

}

module.exports = BaseBlockchain;
