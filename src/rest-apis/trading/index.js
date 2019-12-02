const ExchangeAccounts = require('./exchange-accounts');
const PrivateAPIs = require('./private-apis');
const Arbitrage = require('./arbitrage');

class Trading {

    constructor(...props) {
        this.exchangeAccounts = new ExchangeAccounts(...props);
        this.privateAPIs = new PrivateAPIs(...props);
        this.arbitrage = new Arbitrage(...props);
    }

}

module.exports = Trading;
