const ExchangeAccounts = require('./exchange-accounts');
const PrivateAPIs = require('./private-apis');

class Trading {

    constructor(...props) {
        this.exchangeAccounts = new ExchangeAccounts(...props);
        this.privateAPIs = new PrivateAPIs(...props);
    }

}

module.exports = Trading;
