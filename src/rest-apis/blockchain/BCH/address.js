const BaseAddress = require('../../../common/blockchain/base-address');

class BCHAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

    getInfoMultisig(address, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/multisig?limit=' + limit);
    }
}

module.exports = BCHAddress;
