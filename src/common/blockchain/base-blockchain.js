const BaseChainComponent = require('./base-chain-component');

class BaseBlockchain extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * GET /bc/bch/{network}/info
     */
    getInfo() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/info');
    }

    /**
     * GET /bc/bch/{network}/blocks/{blockHash}
     */
    getBlockByHash(blockHash) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHash);
    }

    /**
     * GET /bc/bch/{network}/blocks/{blockHeight}
     */
    getBlockByHeight(blockHeight) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHeight);
    }

    /**
     * GET /bc/bch/{network}/blocks/latest
     */
    getLatestBlock() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/latest');
    }

}

module.exports = BaseBlockchain;
