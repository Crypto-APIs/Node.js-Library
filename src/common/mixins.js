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

module.exports = {
    MultisigMixin,
    BTCBasedPayment,
};
