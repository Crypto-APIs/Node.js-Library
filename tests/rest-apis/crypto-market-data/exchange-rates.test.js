async function ExchangeRates(caClient) {
    console.log('\n::CMD Exchange Rates');

    const quotes = await caClient.cryptoMarketData.quotes.getLatestData().then(response => response.payload); // Duplicated in quotes.test but needed for scenario
    const baseAsset = quotes[0].baseAsset;
    const quoteAsset = quotes[0].quoteAsset;
    const ts = Date.now();

    await caClient.cryptoMarketData.exchangeRates.getSpecificRate(baseAsset, quoteAsset, ts);
    await caClient.cryptoMarketData.exchangeRates.getAllCurrentRates(baseAsset, ts);
}

module.exports = ExchangeRates;
