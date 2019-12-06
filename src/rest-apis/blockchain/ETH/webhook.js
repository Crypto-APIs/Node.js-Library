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
     * @param {string} address - Address from the blockchain.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createTokenWebHook(callbackURL, address, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.ETH.TOKEN,
            url: callbackURL,
            address: address,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

}

module.exports = ETHWebHook;
