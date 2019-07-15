const BaseAddress = require('../../../common/blockchain/base-address');
const {MultisigMixin} = require('../../../common/mixins');

class BCHAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

}

Object.assign(BCHAddress.prototype, MultisigMixin);

module.exports = BCHAddress;
