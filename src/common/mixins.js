const MultisigMixin = {

    /**
     * Multisig Address Endpoint
     *
     * @async
     * @desc The Multisig Address Endpoint strikes a general information about a single address that is involved in multisignature addresses.
     *
     * @param {string} address - Address in blockchain.
     * @param {number} [limit=50] - Sets the number of returned results.
     *
     * @returns {*|Promise<any | never>}
     */
    getInfoMultisig(address, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/multisig?limit=' + limit);
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
     * @param {number} [fee=null] - What fee should be paid for the transaction.
     *
     * @returns {*|Promise<any | never>}
     */
    createPayment(from, to, callbackURL, wallet, password, confirmations, fee = null) {
        const data = {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password,
            confirmations: confirmations,
        };

        if (fee) {
            data.fee = fee;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/payments', data);
    }

};

module.exports = {
    MultisigMixin,
    BTCBasedPayment,
};
