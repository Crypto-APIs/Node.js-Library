const querystring = require('querystring');
const {WH_EVENT: EVENT} = require('../../../consts');
const BaseWebHook = require('../../../common/blockchain/base-web-hook');

class ETHWebHook extends BaseWebHook {

    /**
     * Create Token WebHook Endpoint
     *
     * @async
     * @desc Simplifies listening to confirmations on all token transfers for a given address up to a provided threshold.
     *      The payload is a json object with the token transfer information.
     *
     * @param {string} callbackURL - Webhook callback url
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createTokenWebHook(callbackURL, optData = {}, queryParams = {}) {
        let data = {};

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            event: EVENT.ETH.TOKEN,
            url: callbackURL
        };

        const queryString = querystring.stringify(queryParams);

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks?' + queryString, data);
    }

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
            event: EVENT.ETH.TXPOOL,
            url: callbackURL
        };

        const queryString = querystring.stringify(queryParams);

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks?' + queryString, data);
    }

}

module.exports = ETHWebHook;
