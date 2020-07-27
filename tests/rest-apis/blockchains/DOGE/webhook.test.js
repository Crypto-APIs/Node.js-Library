async function Webhook(caClient) {
    console.log('\n::DOGE Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'nsXYgWCuBVSYxD1rWz543EFkfxcPV9PC2y';

    await caClient.BC.DOGE.webhook.createNewBlockWebHook(testUrl);
    await caClient.BC.DOGE.webhook.createNewBlockWebHook(testUrl, {allowDuplicate: true});

    await caClient.BC.DOGE.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1);
    await caClient.BC.DOGE.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1, {allowDuplicate: true});

    await caClient.BC.DOGE.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1);
    await caClient.BC.DOGE.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.DOGE.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1);
    await caClient.BC.DOGE.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.DOGE.webhook.listAllHooks();
    await caClient.BC.DOGE.webhook.deleteAllMyWebhooks();
}


module.exports = Webhook;
