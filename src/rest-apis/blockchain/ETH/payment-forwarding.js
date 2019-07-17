const BasePaymentForwarding = require('../../../common/blockchain/base-payment-forwarding');

class ETHPaymentForwarding extends BasePaymentForwarding {

    constructor(...props) {
        super(...props);
    }

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
     * @param {number} [gasPrice=0] - What fee should be paid for the transaction.
     * @param {number} [gasLimit=0] - What fee should be paid for the transaction.
     *
     * @returns {*|Promise<any | never>}
     */
    createPayment(callback, from, to, privateKey, confirmations, gasPrice = 0, gasLimit = 0) {
        const data = {
            callback: callback,
            from: from,
            to: to,
            privateKey: privateKey,
            confirmations: confirmations,
        };

        if (gasPrice) {
            data.gasPrice = gasPrice;
        }

        if (gasLimit) {
            data.gasLimit = gasLimit;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/payments', data);
    }

}

module.exports = ETHPaymentForwarding;
