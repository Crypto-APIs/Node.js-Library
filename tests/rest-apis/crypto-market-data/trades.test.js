async function Trades(caClient) {
    console.log('\n::CMD Trades');

    const trades = await caClient.cryptoMarketData.trades.getLatestData().then(response => response.payload);
    const exchangeId = trades[0].exchangeId;
    const baseAsset = trades[0].baseAsset;
    const quoteAsset = trades[0].quoteAsset;
    const timeEnd = Date.now();
    const timeStart = timeEnd - 1;

    const symbols = await caClient.cryptoMarketData.meta.listAllSymbols().then(response => response.payload); // Duplicated but needed for scenario
    const symbolId = symbols[0]._id;

    await caClient.cryptoMarketData.trades.getLatestDataBySymbol(symbolId);
    await caClient.cryptoMarketData.trades.getLatestDataByExchange(exchangeId);
    await caClient.cryptoMarketData.trades.getLatestDataByAsset(baseAsset);
    await caClient.cryptoMarketData.trades.getLatestDataByAssetsPair(baseAsset, quoteAsset);
    await caClient.cryptoMarketData.trades.getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset);
    await caClient.cryptoMarketData.trades.tradesGetHistoricalData(symbolId, timeStart, timeEnd);
    await caClient.cryptoMarketData.trades.tradesGetHistoricalDataByExchange(exchangeId, timeStart, timeEnd);
    await caClient.cryptoMarketData.trades.tradesGetHistoricalDataByAsset(baseAsset, timeStart, timeEnd);
    await caClient.cryptoMarketData.trades.tradesGetHistoricalDataByAssetPair(baseAsset,  quoteAsset, timeStart, timeEnd);
    await caClient.cryptoMarketData.trades.tradesGetHistoricalDataByExchangeAssetPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd);
}

module.exports = Trades;
