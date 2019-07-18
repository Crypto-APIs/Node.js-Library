const BaseChainComponent = require('./base-chain-component');

class BaseBlockchain extends BaseChainComponent {

    /**
     * Chain Endpoint
     *
     * @async
     * @desc General information about a blockchain is available by GET-ing the base resource.
     *
     * @returns {*|Promise<any | never>}
     */
    getInfo() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/info');
    }

    /**
     * Block Hash Endpoint
     *
     * @async
     * @desc Block Hash endpoint gives you detail information for particular block in the blockchain.
     *
     * @param {string} blockHash - Hash of the block in blockchain.
     *
     * @returns {*|Promise<any | never>}
     */
    getBlockByHash(blockHash) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHash);
    }

    /**
     * Block Height Endpoint
     *
     * @async
     * @desc Block Height endpoint gives you detail information for particular block in the blockchain.
     *
     * @param {number} blockHeight - Height of the block in blockchain.
     *
     * @returns {*|Promise<any | never>}
     */
    getBlockByHeight(blockHeight) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHeight);
    }

    /**
     * Latest Block Endpoint
     *
     * @async
     * @desc Latest Block Endpoint gives you detail information for the latest block in the blockchain.
     *
     * @returns {*|Promise<any | never>}
     */
    getLatestBlock() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/latest');
    }

}

module.exports = BaseBlockchain;
