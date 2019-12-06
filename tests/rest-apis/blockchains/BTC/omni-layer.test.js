async function OmniLayer(caClient) {
    console.log('\n::BTC Omni Layer');

    await caClient.BC.BTC.omniLayer.getNodeInfo();
    await caClient.BC.BTC.omniLayer.getAddress('mqARcsZzkH1bHkgYAxTKqvGE2AgvY6kQch');
    await caClient.BC.BTC.omniLayer.getAddressTransactions('mqARcsZzkH1bHkgYAxTKqvGE2AgvY6kQch');
    await caClient.BC.BTC.omniLayer.getTransaction('56c2db1c8edfb87b4c1923355bf70de296b47ee6c4dffc23bc46c5eb67e8c319');
    await caClient.BC.BTC.omniLayer.getTransactionIndexByBlock(1611574);
    await caClient.BC.BTC.omniLayer.getUnconfirmedTransactions();
    await caClient.BC.BTC.omniLayer.getTransactionsPropertyId(1);
}

module.exports = OmniLayer;
