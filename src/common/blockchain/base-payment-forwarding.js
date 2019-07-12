const BaseChainComponent = require('./base-chain-component');

class BasePaymentForwarding extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

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

    listPayment() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/payments');
    }

    listPaymentHistory() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/payments/history');
    }

    deletePayment(paymentID) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/payments/' + paymentID);
    }

}

module.exports = BasePaymentForwarding;
