async function Webhook(caClient) {
    console.log('\n::BTC Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'mr3nDS1RSLzJryatXm9uDU6XCodWi3mLoa';

    const newBlockHook = await caClient.BC.BTC.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.BC.BTC.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.BC.BTC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.BC.BTC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);

    await caClient.BC.BTC.webhook.listAllHooks();
    await caClient.BC.BTC.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.BC.BTC.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.BC.BTC.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.BTC.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
}


module.exports = Webhook;
