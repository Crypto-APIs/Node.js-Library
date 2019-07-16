async function Webhook(caClient) {
    console.log('\n::BTC Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'mr3nDS1RSLzJryatXm9uDU6XCodWi3mLoa';

    const newBlockHook = await caClient.blockchain.BTC.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.blockchain.BTC.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.blockchain.BTC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.blockchain.BTC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);

    await caClient.blockchain.BTC.webhook.listAllHooks();
    await caClient.blockchain.BTC.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.blockchain.BTC.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.blockchain.BTC.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.blockchain.BTC.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
}


module.exports = Webhook;
