async function ExchangeRates(caClient) {
    console.log('\n::CMD Exchange Rates');

    const quotes = await caClient.CMD.quotes.getLatestData().then(response => response.payload); // Duplicated but needed for scenario

    if (quotes && quotes.length) {
        const baseAsset = quotes[0].baseAsset;
        const quoteAsset = quotes[0].quoteAsset;

        const ts = Date.now();

        await caClient.CMD.exchangeRates.getSpecificRate(baseAsset, quoteAsset, ts);
        await caClient.CMD.exchangeRates.getAllCurrentRates(baseAsset, ts);
    }
}

module.exports = ExchangeRates;
