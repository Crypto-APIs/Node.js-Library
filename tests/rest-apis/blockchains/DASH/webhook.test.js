async function Webhook(caClient) {
    console.log('\n::DASH Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'yMNjY5gZs5RwUovbL1NzXjbnkgPMYfUA98';

    await caClient.BC.DASH.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    await caClient.BC.DASH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    await caClient.BC.DASH.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    await caClient.BC.DASH.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);

    await caClient.BC.DASH.webhook.listAllHooks();
    await caClient.BC.DASH.webhook.deleteAllMyWebhooks();
}


module.exports = Webhook;
