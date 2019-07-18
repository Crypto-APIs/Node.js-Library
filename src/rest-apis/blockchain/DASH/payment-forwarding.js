const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class DashPaymentForwarding extends BasePaymentForwarding {

}

Object.assign(DashPaymentForwarding.prototype, BTCBasedPayment);

module.exports = DashPaymentForwarding;
