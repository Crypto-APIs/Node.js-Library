const BaseAuth = require('../../common/base-auth');

class Arbitrage extends BaseAuth {

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

}

module.exports = Arbitrage;
