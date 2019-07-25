async function Base(caClient) {
    console.log('\n::CMD Base');

    const exchanges = await caClient.CMD.base.listAllExchanges().then(response => response.payload);
    if (exchanges && exchanges.length) {
        const exchangeId = exchanges[0]._id;
        await caClient.CMD.base.getExchangeDetails(exchangeId);
    }

    const assets = await caClient.CMD.base.listAllAssets().then(response => response.payload);
    if (assets && assets.length) {
        const assetsId = assets[0]._id;
        await caClient.CMD.base.getAssetDetails(assetsId);
    }

    const symbols = await caClient.CMD.meta.listAllSymbols().then(response => response.payload); // Duplicated in meta but needed for scenario
    if (symbols && symbols.length) {
        const symbolId = symbols[0]._id;
        await caClient.CMD.base.getSymbolDetails(symbolId);
    }
}

module.exports = Base;
