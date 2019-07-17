const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class BTCPaymentForwarding extends BasePaymentForwarding {

    constructor(...props) {
        super(...props);
    }

}

Object.assign(BTCPaymentForwarding.prototype, BTCBasedPayment);

module.exports = BTCPaymentForwarding;
