const BaseAddress = require('../../../common/blockchain/base-address');
const {MultisigMixin} = require('../../../common/mixins');

class LTCAddress extends BaseAddress {

}

Object.assign(LTCAddress.prototype, MultisigMixin);

module.exports = LTCAddress;
