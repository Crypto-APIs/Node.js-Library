const BaseAddress = require('../../../common/blockchain/base-address');

class LTCAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

    getInfoMultisig(address) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/multisig');
    }

}

module.exports = LTCAddress;
