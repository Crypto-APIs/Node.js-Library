const BaseAddress = require('../../../common/blockchain/base-address');
const {MultisigMixin} = require('../../../common/mixins');

class BCHAddress extends BaseAddress {

}

Object.assign(BCHAddress.prototype, MultisigMixin);

module.exports = BCHAddress;
