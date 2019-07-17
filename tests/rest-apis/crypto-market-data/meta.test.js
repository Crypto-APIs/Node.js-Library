async function Meta(caClient) {
    console.log('\n::CMD Meta');

    const exchanges = await caClient.CMD.meta.listAllExchanges().then(response => response.payload);
    const exchangeId = exchanges[0]._id;
    await caClient.CMD.meta.getExchangeDetails(exchangeId);

    const assets = await caClient.CMD.meta.listAllAssets().then(response => response.payload);
    const assetsId = assets[0]._id;
    await caClient.CMD.meta.getAssetDetails(assetsId);

    const symbols = await caClient.CMD.meta.listAllSymbols().then(response => response.payload);
    const symbolId = symbols[0]._id;
    await caClient.CMD.meta.getSymbolDetails(symbolId);
}

module.exports = Meta;
