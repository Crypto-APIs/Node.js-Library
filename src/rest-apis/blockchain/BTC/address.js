const BaseAddress = require('../../../common/blockchain/base-address');
const {MultisigMixin} = require('../../../common/mixins');

class BTCAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

}

Object.assign(BTCAddress.prototype, MultisigMixin);

module.exports = BTCAddress;
