const {WH_EVENT: EVENT} = require('../../consts');
const BaseChainComponent = require('./base-chain-component');

class BaseWebHook extends BaseChainComponent {

    /**
     * Create New Block WebHook Endpoint
     *
     * @async
     * @desc Using a partially filled out Event, you can create a WebHook using this resource.
     *
     * @param {string} callbackURL - Webhook callback url
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createNewBlockWebHook(callbackURL, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.COMMON.NEW_BLOCK,
            url: callbackURL
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

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
    createConfirmedTransactionWebHook(callbackURL, transaction, confirmations, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.COMMON.CONFIRMED_TX,
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

    /**
     * Create Address Transaction WebHook Endpoint
     *
     * @async
     * @desc Using a partially filled out Event, you can create a WebHook using this resource.
     *
     * @example The message to be sent to the specified url will be similar to the following:
     *      If the address is included in a transaction in the unconfirmed queue waiting to be mined the following message
     *      will be sent: json { "currency": "BCH", "network": "mainnet", "url": "http://www.mocky.io/v2/5b0d4b5f3100006e009d55f5",
     *      "type": "ADDRESS", "blockHeight": -1, "unconfirmed": true, "address": "bitcoincash:qpnvtt7pujxlx4xv2swnzt2jj9pem7skvsqr9f0z7h",
     *      "txid": "efdd385fe8313797986dbf0b3680eef8dfbfb96a5260f960b316ff9bb9594808" }
     *
     * @param {string} callbackURL - Webhook callback url
     * @param {string} address - Address from the blockchain.
     * @param {number} confirmations - Receive webhook after a specified number of confirmations.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createAddressTransactionWebHook(callbackURL, address, confirmations, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.COMMON.ADDRESS,
            url: callbackURL,
            address: address,
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
    createTransactionConfirmationsWebHook(callbackURL, address, confirmations, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.COMMON.TRANSACTION_CONFIRMATIONS,
            url: callbackURL,
            address: address,
            confirmations: confirmations,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

    /**
     * List WebHooks Endpoint
     *
     * @async
     * @desc Using this resource you can list all web hooks that you have created.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    listAllHooks(queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/hooks', queryParams);
    }

    /**
     * Delete WebHook Endpoint
     *
     * @async
     * @desc You can delete a WebHook using this resource.
     *
     * @param {string} webhookID - Webhook uuid.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    deleteWebHook(webhookID, queryParams = {}) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/hooks/' + webhookID, queryParams);
    }
}

module.exports = BaseWebHook;
