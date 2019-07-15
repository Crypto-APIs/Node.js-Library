const {WH_EVENT: EVENT} = require('../../consts');
const BaseChainComponent = require('./base-chain-component');

class BaseWebHook extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * POST /bc/bch/{network}/hooks
     */
    createNewBlockWebHook(callbackURL) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.NEW_BLOCK,
            url: callbackURL
        });
    }

    /**
     * POST /bc/bch/{network}/hooks
     */
    createConfirmedTransactionWebHook(callbackURL, transaction, confirmations) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.CONFIRMED_TX,
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    /**
     * POST /bc/bch/{network}/hooks
     */
    createAddressTransactionWebHook(callbackURL, address, confirmations) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.ADDRESS,
            url: callbackURL,
            address: address,
            confirmations: confirmations
        });
    }

    /**
     * POST /bc/bch/{network}/hooks
     */
    createTransactionConfirmationsWebHook(callbackURL, address, confirmations) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', {
            event: EVENT.COMMON.TRANSACTION_CONFIRMATIONS,
            url: callbackURL,
            address: address,
            confirmations: confirmations,
        });
    }

    /**
     * GET /bc/bch/${network}/hooks
     */
    listAllHooks() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/hooks');
    }

    /**
     * DELETE /bc/bch/{network}/hooks/{webhookID}
     */
    deleteWebHook(webhookID) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/hooks/' + webhookID);
    }
}

module.exports = BaseWebHook;
