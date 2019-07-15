const BaseChainComponent = require('./base-chain-component');

class BasePaymentForwarding extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * POST /bc/bch/{network}/payments
     */
    createPayment(from, to, callbackURL, wallet, password, confirmations, fee = null) {
        const data = {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password,
            confirmations: confirmations,
        };

        if (fee) {
            data.fee = fee;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/payments', data);
    }

    /**
     * GET /bc/bch/{network}/payments
     */
    listPayment() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/payments');
    }

    /**
     * GET /bc/bch/{network}/payments/history
     */
    listPaymentHistory() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/payments/history');
    }

    /**
     * DELETE /bc/bch/{network}/payments/{paymentID}
     */
    deletePayment(paymentID) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/payments/' + paymentID);
    }

}

module.exports = BasePaymentForwarding;
