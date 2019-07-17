async function OHLCV(caClient) {
    console.log('\n::CMD OHLCV');

    const periods = await caClient.CMD.OHLCV.listAllPeriods().then(response => response.payload);
    const periodId = periods[0].period;

    const symbols = await caClient.CMD.meta.listAllSymbols().then(response => response.payload); // Duplicated but needed for scenario
    const symbolId = symbols[0]._id;

    const timeEnd = Date.now();
    const timeStart = timeEnd - 1;
    await caClient.CMD.OHLCV.historicalData(symbolId, periodId, timeStart, timeEnd);
}

module.exports = OHLCV;
