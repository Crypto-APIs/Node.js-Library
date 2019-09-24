const ExchangeAccounts = require('./exchange-accounts.test');
const PrivateAPIs = require('./private-apis.test');

async function TR(caClient) {
    console.log('\n::Trading');

    await ExchangeAccounts(caClient);
    await PrivateAPIs(caClient);
}

module.exports = caClient => TR(caClient);
