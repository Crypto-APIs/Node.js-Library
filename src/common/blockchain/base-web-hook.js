const {WH_EVENT: EVENT} = require('../../consts');
const BaseChainComponent = require('./base-chain-component');

class BaseWebHook extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    createNewBlockWebHook(callbackURL) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.NEW_BLOCK,
            url: callbackURL
        });
    }

    createConfirmedTransactionWebHook(callbackURL, transaction, confirmations) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.CONFIRMED_TX,
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    createAddressTransactionWebHook(callbackURL, address, confirmations) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.ADDRESS,
            url: callbackURL,
            address: address,
            confirmations: confirmations
        });
    }

    createTransactionConfirmationsWebHook(callbackURL, address, confirmations) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.TRANSACTION_CONFIRMATIONS,
            url: callbackURL,
            address: address,
            confirmations: confirmations,
        });
    }

    listAllHooks() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/hooks');
    }

    deleteWebHook(webhookID) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/hooks/' + webhookID);
    }
}

module.exports = BaseWebHook;
