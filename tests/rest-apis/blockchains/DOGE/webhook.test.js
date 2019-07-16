async function Webhook(caClient) {
    console.log('\n::DOGE Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'nsXYgWCuBVSYxD1rWz543EFkfxcPV9PC2y';

    const newBlockHook = await caClient.blockchain.DOGE.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.blockchain.DOGE.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.blockchain.DOGE.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.blockchain.DOGE.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);

    await caClient.blockchain.DOGE.webhook.listAllHooks();
    await caClient.blockchain.DOGE.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.blockchain.DOGE.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.blockchain.DOGE.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.blockchain.DOGE.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
}


module.exports = Webhook;