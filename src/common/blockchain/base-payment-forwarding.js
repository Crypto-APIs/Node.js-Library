const BaseChainComponent = require('./base-chain-component');

class BasePaymentForwarding extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * List Payment Endpoint
     *
     * @async
     * @desc To list your currently active payment forwarding addresses, you can use this endpoint.
     *
     * @returns {*|Promise<any | never>}
     */
    listPayment() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/payments');
    }

    /**
     * List of Past Forward Payments By Users
     *
     * @async
     * @desc To list your currently active payment forwarding addresses, you can use this endpoint.
     *
     * @returns {*|Promise<any | never>}
     */
    listPaymentHistory() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/payments/history');
    }

    /**
     * Delete Payment Endpoints
     *
     * @async
     * @desc When you’re done with a payment forwarding address, you can delete it via its id and current user id.
     *
     * @param {string} paymentID - Generated UUID when payment forwarding have been created.
     *
     * @returns {*|Promise<any | never>}
     */
    deletePayment(paymentID) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/payments/' + paymentID);
    }

}

module.exports = BasePaymentForwarding;
