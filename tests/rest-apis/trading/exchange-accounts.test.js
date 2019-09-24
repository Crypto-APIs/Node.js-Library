async function ExchangeAccounts(caClient) {
    console.log('\n::TR Exchange Accounts');

    const accounts = await caClient.TR.exchangeAccounts.listAll().then(response => response.payload);
}

module.exports = ExchangeAccounts;
