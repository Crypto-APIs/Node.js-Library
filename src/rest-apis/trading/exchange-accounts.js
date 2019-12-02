const BaseAuth = require('../../common/base-auth');

class ExchangeAccounts extends BaseAuth {

    /**
     * List All Accounts
     *
     * @async
     * @desc Show all your accounts for Trading APIs present in our system
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listAll(queryParams = {}) {
        return this.request.get('/trading/exchange-accounts', queryParams);
    }

    /**
     * Get Account
     *
     * @async
     * @desc Show account balance for a given exchange.
     *
     * @param {string} accountId - Id of your account used for making calls to an exchange's Private APIs.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    get(accountId, queryParams = {}) {
        return this.request.get('/trading/exchange-accounts/' + accountId, queryParams);
    }

    /**
     * Create Account
     *
     * @async
     * @desc Create an account for Trading APIs
     *
     * @param {string} exchangeId - Exchange id supported in Trading APIs
     * @param {string} exchangeApiKey - Your api key in the exchange, needed for validating calls to Private APIs
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    create(exchangeId, exchangeApiKey, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            exchangeId: exchangeId,
            exchangeApiKey: exchangeApiKey,
        };

        return this.request.post('/trading/exchange-accounts', data, queryParams);
    }

    /**
     * Update Account
     *
     * @async
     * @desc Updates an account for Trading APIs
     *
     * @param {string} accountId - Id of your account used for making calls to an exchange's Private APIs.
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    update(accountId, optData = {}, queryParams = {}) {
        return this.request.patch('/trading/exchange-accounts/' + accountId, optData, queryParams);
    }

    /**
     * Delete Account
     *
     * @async
     * @desc Deletes an account for Trading APIs
     *
     * @param {string} accountId - Id of your account used for making calls to an exchange's Private APIs.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    delete(accountId, queryParams = {}) {
        return this.request.delete('/trading/exchange-accounts/' + accountId, queryParams);
    }

}

module.exports = ExchangeAccounts;
