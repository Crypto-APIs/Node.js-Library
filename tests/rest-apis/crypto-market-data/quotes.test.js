async function Quotes(caClient) {
    console.log('\n::CMD Quotes');

    const quotes = await caClient.cryptoMarketData.quotes.getLatestData().then(response => response.payload);
    const exchangeId = quotes[0].exchangeId;
    const baseAsset = quotes[0].baseAsset;
    const quoteAsset = quotes[0].quoteAsset;

    await caClient.cryptoMarketData.quotes.getLatestDataByExchange(exchangeId);
    await caClient.cryptoMarketData.quotes.getLatestDataByBaseAsset(baseAsset);
    await caClient.cryptoMarketData.quotes.getLatestDataByAssetsPair(baseAsset, quoteAsset);
    await caClient.cryptoMarketData.quotes.getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset);


    const symbols = await caClient.cryptoMarketData.meta.listAllSymbols().then(response => response.payload); // Duplicated in meta.test but needed for scenario
    const symbolId = symbols[0]._id;
    const timeEnd = Date.now();
    const timeStart = timeEnd - 1;

    await caClient.cryptoMarketData.quotes.getHistoricalData(symbolId, timeStart, timeEnd);
    await caClient.cryptoMarketData.quotes.getHistoricalDataByExchange(exchangeId, timeStart, timeEnd);
    await caClient.cryptoMarketData.quotes.getHistoricalDataByAsset(baseAsset, timeStart, timeEnd);
    await caClient.cryptoMarketData.quotes.getHistoricalDataByAssetsPair(baseAsset, quoteAsset, timeStart, timeEnd);
    await caClient.cryptoMarketData.quotes.getHistoricalDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd);
}

module.exports = Quotes;
