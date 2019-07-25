async function Meta(caClient) {
    console.log('\n::CMD Meta');

    await caClient.CMD.meta.listAllExchanges().then(response => response.payload);
    await caClient.CMD.meta.listAllAssets().then(response => response.payload);
    await caClient.CMD.meta.listAllSymbols().then(response => response.payload);
}

module.exports = Meta;
