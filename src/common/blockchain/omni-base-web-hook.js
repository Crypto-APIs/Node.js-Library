const {WH_EVENT: EVENT} = require('../../consts');
const BaseWebHook = require('./base-web-hook');

class OmniBaseWebHook extends BaseWebHook {

    /**
     * Create Confirmed Transaction WebHook Endpoint
     *
     * @async
     * @desc The message to be sent to the specified url will be similar to the following:
     *      Using a partially filled out Event, you can create a WebHook using this resource.
     *
     * @param {string} callbackURL - Webhook callback url
     * @param {string} transaction - Transaction hash.
     * @param {number} confirmations - Receive webhook after a specified number of confirmations.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createOmniConfirmedTransactionWebHook(callbackURL, transaction, confirmations, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.OMNI.OMNI_CONFIRMED_TX,
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

    /**
     * Create Transaction Confirmations WebHook Endpoint
     *
     * @async
     * @desc Using a partially filled out Event, you can create a WebHook using this resource.
     *
     * @param {string} callbackURL - Webhook callback url
     * @param {string} address - Address from the blockchain.
     * @param {number} confirmations - Receive webhook after a specified number of confirmations.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createOmniTransactionConfirmationsWebHook(callbackURL, address, confirmations, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.OMNI.OMNI_TRANSACTION_CONFIRMATIONS,
            url: callbackURL,
            address: address,
            confirmations: confirmations,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

    /**
     * Create Token WebHook Endpoint
     *
     * @async
     * @desc Simplifies listening to confirmations on all token transfers for a given address up to a provided threshold.
     *      The payload is a json object with the token transfer information.
     *
     * @param {string} callbackURL - Webhook callback url
     * @param {string} address - Address from the blockchain.
     * @param {number} confirmations - Receive webhook after a specified number of confirmations.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createOmniTokenWebHook(callbackURL, address, confirmations, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.OMNI.OMNI_TOKEN,
            url: callbackURL,
            address: address,
            confirmations: confirmations,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

}

module.exports = OmniBaseWebHook;
