const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');

class ETCPaymentForwarding extends BasePaymentForwarding {

    /**
     * Create Payment Forwarding
     *
     * @async
     * @desc There are two ways to create an automated payment forwarding:
     *      If you have a keystore file/account create on our servers you need to provide the following information:
     *      - from address - to address, - callback, - password, - confirmations - after how many confirmations to
     *      execute the payment forwarding - gasPrice (Optional) - gasLimit (Optional)
     *
     * @param {string} callback - Callback url addres that will be called after forwarding is processed.
     * @param {string} from - Address in blockchain.
     * @param {string} to - Address in blockchain.
     * @param {string} privateKey - Private key.
     * @param {number} confirmations - After how many confirmations to execute the payment forwarding.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    createPaymentForwarding(callback, from, to, privateKey, confirmations, optData = {}, queryParams = {}) {
        let data = {
            gasPrice: 0, // What fee should be paid for the transaction.
            gasLimit: 0, // Gas limit for the transaction.
        };

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            callback: callback,
            from: from,
            to: to,
            privateKey: privateKey,
            confirmations: confirmations,
        };

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/payments', data, queryParams);
    }

}

module.exports = ETCPaymentForwarding;
