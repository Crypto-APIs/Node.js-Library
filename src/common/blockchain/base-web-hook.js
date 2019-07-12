class BaseWebHook {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    createNewBlockWebHook(network, callbackURL) {
        return this.request.post(this.basePath + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    createConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {
        return this.request.post(this.basePath + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    createAddressTransactionWebHook(network, callbackURL, address, confirmations) {
        return this.request.post(this.basePath + network + '/hooks', {
            event: 'ADDRESS',
            url: callbackURL,
            address: address,
            confirmations: confirmations
        });
    }

    createTransactionConfirmationsWebHook(network, callbackURL, address, confirmations) {
        return this.request.post(this.basePath + network + '/hooks', {
            event: 'TRANSACTION_CONFIRMATIONS',
            url: callbackURL,
            address: address,
            confirmations: confirmations,
        });
    }

    listAllHooks(network) {
        return this.request.get(this.basePath + network + '/hooks');
    }

    deleteWebHook(network, webhookID) {
        return this.request.delete(this.basePath + network + '/hooks/' + webhookID);
    }
}

module.exports = BaseWebHook;
