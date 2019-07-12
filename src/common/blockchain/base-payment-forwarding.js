class BasePaymentForwarding {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    createPayment(network, from, to, callbackURL, wallet, password, confirmations, fee = null) {
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

        return this.request.post(this.basePath + network + '/payments', data);
    }

    listPayment(network) {
        return this.request.get(this.basePath + network + '/payments');
    }

    listPaymentHistory(network) {
        return this.request.get(this.basePath + network + '/payments/history');
    }

    deletePayment(network, paymentID) {
        return this.request.delete(this.basePath + network + '/payments/' + paymentID);
    }

}

module.exports = BasePaymentForwarding;
