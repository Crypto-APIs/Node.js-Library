const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class LTCPaymentForwarding extends BasePaymentForwarding {

}

Object.assign(LTCPaymentForwarding.prototype, BTCBasedPayment);

module.exports = LTCPaymentForwarding;
