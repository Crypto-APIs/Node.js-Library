const {WH_EVENT: EVENT} = require('../consts');

const MultisigMixin = {

    /**
     * Multisig Address Endpoint
     *
     * @async
     * @desc The Multisig Address Endpoint strikes a general information about a single address that is involved in multisignature addresses.
     *
     * @param {string} address - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getInfoMultisig(address, queryParams = {}) {
        const combinedQueryParams = {
            limit: 50,
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/multisig', combinedQueryParams);
    }

};

const BTCBasedPayment = {
    /**
     * Create Payment Endpoint.
     *
     * @async
     * @desc First, to create an payment forwarding address, you need to POST a partially filled PaymentForward object
     *      to the payment creation endpoint. You need to include the following data: - wallet - from - can be bch format or
     *      legacy format - to - can be bch format or legacy format - callback (url) - wallet password - confirmations - fee (optional)
     *
     * @param {string} from - Address in blockchain.
     * @param {string} to - Address in blockchain.
     * @param {string} callbackURL - Callback url addres that will be called after forwarding is processed.
     * @param {string} wallet - Wallet created by current USER_ID.
     * @param {string} password - Wallet password.
     * @param {number} confirmations - After how many confirmations to execute the payment forwarding.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createPaymentForwarding(from, to, callbackURL, wallet, password, confirmations, optData = {}, queryParams = {}) {
        let data = {
            fee: null, // What fee should be paid for the transaction.
        };

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password,
            confirmations: confirmations,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/payments', data, queryParams);
    }

};

const BTCBasedOmniWebhooks = {

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
    },

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
    },

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
    createOmniTokenWebHook(callbackURL, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            event: EVENT.OMNI.OMNI_TOKEN,
            url: callbackURL
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/hooks', data, queryParams);
    }

};

module.exports = {
    MultisigMixin,
    BTCBasedPayment,
    BTCBasedOmniWebhooks,
};
