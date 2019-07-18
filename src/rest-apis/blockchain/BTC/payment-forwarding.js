const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class BTCPaymentForwarding extends BasePaymentForwarding {

}

Object.assign(BTCPaymentForwarding.prototype, BTCBasedPayment);

module.exports = BTCPaymentForwarding;
