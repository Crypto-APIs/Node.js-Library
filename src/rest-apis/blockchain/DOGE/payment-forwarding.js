const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class DOGEPaymentForwarding extends BasePaymentForwarding {

    constructor(...props) {
        super(...props);
    }

}

Object.assign(DOGEPaymentForwarding.prototype, BTCBasedPayment);

module.exports = DOGEPaymentForwarding;
