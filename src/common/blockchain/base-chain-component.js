const network = require('../../common/network');
const BaseAuth = require('../base-auth');

class BaseChainComponent extends BaseAuth {

    constructor(apiKey, bcId) {
        super(apiKey);

        this.bcId = bcId;
        this.basePath = '/bc/' + bcId.toLowerCase() + '/';
        this.network = network.getInstance(apiKey);
    }

    getSelectedNetwork() {
        return this.network.getSelected(this.bcId);
    }

}

module.exports = BaseChainComponent;
