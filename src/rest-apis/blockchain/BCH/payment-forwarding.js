const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class BCHPaymentForwarding extends BasePaymentForwarding {

}

Object.assign(BCHPaymentForwarding.prototype, BTCBasedPayment);

module.exports = BCHPaymentForwarding;
