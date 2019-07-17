const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');
const {BTCBasedPayment} = require('../../../common/mixins');

class BCHPaymentForwarding extends BasePaymentForwarding {

    constructor(...props) {
        super(...props);
    }

}

Object.assign(BCHPaymentForwarding.prototype, BTCBasedPayment);

module.exports = BCHPaymentForwarding;
