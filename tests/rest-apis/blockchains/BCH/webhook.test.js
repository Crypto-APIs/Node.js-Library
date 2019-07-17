async function Webhook(caClient) {
    console.log('\n::BCH Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'mr3nDS1RSLzJryatXm9uDU6XCodWi3mLoa';

    const newBlockHook = await caClient.BC.BCH.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.BC.BCH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.BC.BCH.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.BC.BCH.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);

    await caClient.BC.BCH.webhook.listAllHooks();
    await caClient.BC.BCH.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.BC.BCH.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.BC.BCH.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.BCH.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
}


module.exports = Webhook;
