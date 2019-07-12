const BaseChainComponent = require('./base-chain-component');

class BaseBlockchain extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    getInfo() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/info');
    }

    getBlockByHash(blockHash) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHash);
    }

    getBlockByHeight(blockHeight) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/' + blockHeight);
    }

    getLatestBlock() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/blocks/latest');
    }

}

module.exports = BaseBlockchain;
