async function OHLCV(caClient) {
    console.log('\n::CMD OHLCV');

    const periods = await caClient.cryptoMarketData.OHLCV.listAllPeriods().then(response => response.payload);
    const periodId = periods[0].period;

    const symbols = await caClient.cryptoMarketData.meta.listAllSymbols().then(response => response.payload); // Duplicated in meta.test but needed for scenario
    const symbolId = symbols[0]._id;

    const timeEnd = Date.now();
    const timeStart = timeEnd - 1;
    await caClient.cryptoMarketData.OHLCV.historicalData(symbolId, periodId, timeStart, timeEnd);
}

module.exports = OHLCV;
