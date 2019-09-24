const BaseAuth = require('../../common/base-auth');

class PrivateAPIs extends BaseAuth {

    /**
     * List All Exchanges
     *
     * @async
     * @desc Show all exchanges supported in Trading APIs
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    listAllExchanges(queryParams = {}) {
        return this.request.get('/trading/private-apis', queryParams);
    }

    /**
     * Get Balance
     *
     * @async
     * @desc Show account balance for a given exchange.
     *
     * @param {string} accountId - Id used for authentication. (After a successful account creation in Crypto APIs)
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getBalance(accountId, optData = {}, queryParams = {}) {
        return this.request.post('/trading/private-apis/' + accountId + '/balance', optData, queryParams);
    }

    /**
     * Get Deposit Address
     *
     * @async
     * @desc Shows deposit address as provided by a given exchange's Private APIs.
     *
     * @param {string} accountId - Id used for authentication. (After a successful account creation in Crypto APIs)
     * @param {string} code - Code/currency with which the address is going to be funded (e.g. 'XLM')
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getDepositAddress(accountId, code, optData = {}, queryParams = {}) {
        return this.request.post('/trading/private-apis/' + accountId + '/depositAddress/' + code, optData, queryParams);
    }

    /**
     * Get My Trades
     *
     * @async
     * @desc Shows trades as provided by a given exchange's Private APIs.
     *
     * @param {string} accountId - Id used for authentication. (After a successful account creation in Crypto APIs)
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getMyTrades(accountId, optData = {}, queryParams = {}) {
        return this.request.post('/trading/private-apis/' + accountId + '/myTrades', optData, queryParams);
    }

    /**
     * Get Open Orders
     *
     * @async
     * @desc Shows open orders as provided by a given exchange's Private APIs.
     *
     * @param {string} accountId - Id used for authentication. (After a successful account creation in Crypto APIs)
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    getOpenOrders(accountId, optData = {}, queryParams = {}) {
        return this.request.post('/trading/private-apis/' + accountId + '/openOrders', optData, queryParams);
    }

    /**
     * Create Order
     *
     * @async
     * @desc Create an order in an exchange.
     *
     * @param {string} accountId - Id used for authentication. (After a successful account creation in Crypto APIs)
     * @param {string} symbol - Symbol (e.g. 'BTC/ETH', 'XLM/BTC', etc.)
     * @param {string} type - Type of order (market/limit)
     * @param {string} side - Side (buy/sell)
     * @param {number} amount - Amount in base currency
     * @param {number} price - Price in quote currency
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    createOrder(accountId, symbol, type, side, amount, price, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            symbol: symbol,
            type: type,
            side: side,
            amount: amount,
            price: price,
        };

        return this.request.post('/trading/private-apis/' + accountId + '/createOrder', data, queryParams);
    }

    /**
     * Cancel Order
     *
     * @async
     * @desc Cancels an order in an exchange.
     *
     * @param {string} accountId - Id used for authentication. (After a successful account creation in Crypto APIs)
     * @param {string} id - Order id
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    cancelOrder(accountId, id, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            id: id,
        };

        return this.request.post('/trading/private-apis/' + accountId + '/cancelOrder', data, queryParams);
    }

    /**
     * Withdraw
     *
     * @async
     * @desc Withdraw funds to an address.
     *
     * @param {string} accountId - Id used for authentication. (After a successful account creation in Crypto APIs)
     * @param {string} code - Code/currency with which the address is going to be funded (e.g. 'XLM')
     * @param {number} amount - Amount in base currency
     * @param {string} address - Funding address
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*}
     */
    withdraw(accountId, code, amount, address, optData = {}, queryParams = {}) {
        const data = {
            ...optData,
            code: code,
            amount: amount,
            address: address,
        };

        return this.request.post('/trading/private-apis/' + accountId + '/withdraw', data, queryParams);
    }

}

module.exports = PrivateAPIs;
