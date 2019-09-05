const {WH_EVENT: EVENT} = require('../../../consts');
const BaseWebHook = require('../../../common/blockchain/base-web-hook');

class ETCWebHook extends BaseWebHook {

    /**
     * Create Tx pool WebHook Endpoint
     *
     * @async
     * @desc Similar to ADDRESS Webhook, differes in that it is for a given address found in the transactions in the txpool
     *      of the Ethereum Blockchain. The payload is a list with transactions from the txpool for the particular address.
     *
     * @param {string} callbackURL - Webhook callback url
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createTxPoolWebHook(callbackURL, optData = {}, queryParams = {}) {
        let data = {};

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            event: EVENT.ETC.TXPOOL,
            url: callbackURL
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

}

module.exports = ETCWebHook;
