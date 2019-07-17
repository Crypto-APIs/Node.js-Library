async function Quotes(caClient) {
    console.log('\n::CMD Quotes');

    const quotes = await caClient.CMD.quotes.getLatestData().then(response => response.payload);
    const exchangeId = quotes[0].exchangeId;
    const baseAsset = quotes[0].baseAsset;
    const quoteAsset = quotes[0].quoteAsset;

    await caClient.CMD.quotes.getLatestDataByExchange(exchangeId);
    await caClient.CMD.quotes.getLatestDataByBaseAsset(baseAsset);
    await caClient.CMD.quotes.getLatestDataByAssetsPair(baseAsset, quoteAsset);
    await caClient.CMD.quotes.getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset);


    const symbols = await caClient.CMD.meta.listAllSymbols().then(response => response.payload); // Duplicated but needed for scenario
    const symbolId = symbols[0]._id;
    const timeEnd = Date.now();
    const timeStart = timeEnd - 1;

    await caClient.CMD.quotes.getHistoricalData(symbolId, timeStart, timeEnd);
    await caClient.CMD.quotes.getHistoricalDataByExchange(exchangeId, timeStart, timeEnd);
    await caClient.CMD.quotes.getHistoricalDataByAsset(baseAsset, timeStart, timeEnd);
    await caClient.CMD.quotes.getHistoricalDataByAssetsPair(baseAsset, quoteAsset, timeStart, timeEnd);
    await caClient.CMD.quotes.getHistoricalDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd);
}

module.exports = Quotes;
