const request = require('../../common/request');
const network = require('../../common/network');

class BaseChainComponent {

    constructor(bcId) {
        this.bcId = bcId;
        this.basePath = 'bc/' + bcId.toLowerCase() + '/';
        this.network = network.getInstance();
        this.request = request.getInstance();
    }

    getSelectedNetwork() {
        return this.network.getSelected(this.bcId);
    }

}

module.exports = BaseChainComponent;
