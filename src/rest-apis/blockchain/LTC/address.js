const BaseAddress = require('../../../common/blockchain/base-address');

class LTCAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

    getInfoMultisig(network, address) {
        return this.request.get(this.basePath + network + '/address/' + address + '/multisig');
    }

}

module.exports = LTCAddress;
