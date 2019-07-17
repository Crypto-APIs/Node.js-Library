const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class DashPaymentForwarding extends BasePaymentForwarding {

    constructor(...props) {
        super(...props);
    }

}

Object.assign(DashPaymentForwarding.prototype, BTCBasedPayment);

module.exports = DashPaymentForwarding;
