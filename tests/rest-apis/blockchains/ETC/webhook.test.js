async function Webhook(caClient) {
    console.log('\n::ETC Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';

    const newBlockHook = await caClient.BC.ETC.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.BC.ETC.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.BC.ETC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.BC.ETC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const tokenCreationHook = await caClient.BC.ETC.webhook.createTokenWebHook(testUrl).then(res => res.payload);
    const txPoolCreationHook = await caClient.BC.ETC.webhook.createTxPoolWebHook(testUrl).then(res => res.payload);

    await caClient.BC.ETC.webhook.listAllHooks();
    await caClient.BC.ETC.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.BC.ETC.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.BC.ETC.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.ETC.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.ETC.webhook.deleteWebHook(tokenCreationHook.uuid); // (Cleanup)
    await caClient.BC.ETC.webhook.deleteWebHook(txPoolCreationHook.uuid); // (Cleanup)
}


module.exports = Webhook;
