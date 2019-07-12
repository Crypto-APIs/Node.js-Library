const BaseChainComponent = require('./base-chain-component');

class BaseAddress extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    getInfo(address) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address);
    }

    generateAddress() {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/address', {});
    }

    getAddressTransactions(address, index = 0, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }


}

module.exports = BaseAddress;
