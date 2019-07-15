const BaseChainComponent = require('./base-chain-component');

class BaseAddress extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * GET /bc/{bc}/{network}/address/{address}
     */
    getInfo(address) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address);
    }

    /**
     * POST /bc/{bc}/{network}/address
     */
    generateAddress() {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/address', {});
    }

    /**
     * GET /bc/{bc}/{network}/address/{address}/transactions?index={index=0}&limit={limit=50}
     */
    getAddressTransactions(address, index = 0, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }


}

module.exports = BaseAddress;
