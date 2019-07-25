async function Trades(caClient) {
    console.log('\n::CMD Trades');

    const trades = await caClient.CMD.trades.getLatestData().then(response => response.payload);

    if (trades && trades.length) {
        const exchangeId = trades[0].exchangeId;
        const baseAsset = trades[0].baseAsset;
        const quoteAsset = trades[0].quoteAsset;

        const timeEnd = Date.now();
        const timeStart = timeEnd - 1;

        const symbols = await caClient.CMD.meta.listAllSymbols().then(response => response.payload); // Duplicated but needed for scenario
        const symbolId = symbols[0]._id;

        await caClient.CMD.trades.getLatestDataBySymbol(symbolId);
        await caClient.CMD.trades.getLatestDataByExchange(exchangeId);
        await caClient.CMD.trades.getLatestDataByAsset(baseAsset);
        await caClient.CMD.trades.getLatestDataByAssetsPair(baseAsset, quoteAsset);
        await caClient.CMD.trades.getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset);
        await caClient.CMD.trades.tradesGetHistoricalData(symbolId, timeStart, timeEnd);
        await caClient.CMD.trades.tradesGetHistoricalDataByExchange(exchangeId, timeStart, timeEnd);
        await caClient.CMD.trades.tradesGetHistoricalDataByAsset(baseAsset, timeStart, timeEnd);
        await caClient.CMD.trades.tradesGetHistoricalDataByAssetPair(baseAsset,  quoteAsset, timeStart, timeEnd);
        await caClient.CMD.trades.tradesGetHistoricalDataByExchangeAssetPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd);
    }
}

module.exports = Trades;
