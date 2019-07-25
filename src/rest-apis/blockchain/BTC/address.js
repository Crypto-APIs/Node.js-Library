const BaseAddress = require('../../../common/blockchain/base-address');
const {MultisigMixin} = require('../../../common/mixins');

class BTCAddress extends BaseAddress {

}

Object.assign(BTCAddress.prototype, MultisigMixin);

module.exports = BTCAddress;
