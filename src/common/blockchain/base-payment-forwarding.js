class BasePaymentForwarding {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    createPayment(network, from, to, callbackURL, wallet, password) {
        return this.request.post(this.basePath + network + '/payments', {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password
        });
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