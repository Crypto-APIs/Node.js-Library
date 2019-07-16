async function Meta(caClient) {
    console.log('\n::CMD Meta');

    const exchanges = await caClient.cryptoMarketData.meta.listAllExchanges().then(response => response.payload);
    const exchangeId = exchanges[0]._id;
    await caClient.cryptoMarketData.meta.getExchangeDetails(exchangeId);

    const assets = await caClient.cryptoMarketData.meta.listAllAssets().then(response => response.payload);
    const assetsId = assets[0]._id;
    await caClient.cryptoMarketData.meta.getAssetDetails(assetsId);

    const symbols = await caClient.cryptoMarketData.meta.listAllSymbols().then(response => response.payload);
    const symbolId = symbols[0]._id;
    await caClient.cryptoMarketData.meta.getSymbolDetails(symbolId);
}

module.exports = Meta;
