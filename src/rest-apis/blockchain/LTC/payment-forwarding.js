const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class LTCPaymentForwarding extends BasePaymentForwarding {

    constructor(...props) {
        super(...props);
    }

}

Object.assign(LTCPaymentForwarding.prototype, BTCBasedPayment);

module.exports = LTCPaymentForwarding;
