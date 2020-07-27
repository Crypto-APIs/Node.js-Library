async function Webhook(caClient) {
    console.log('\n::ETC Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';

    await caClient.BC.ETC.webhook.createNewBlockWebHook(testUrl);
    await caClient.BC.ETC.webhook.createNewBlockWebHook(testUrl, {allowDuplicate: true});

    await caClient.BC.ETC.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1);
    await caClient.BC.ETC.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1, {allowDuplicate: true});

    await caClient.BC.ETC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1);
    await caClient.BC.ETC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.ETC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1);
    await caClient.BC.ETC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.ETC.webhook.listAllHooks();
    await caClient.BC.ETC.webhook.deleteAllMyWebhooks();
}


module.exports = Webhook;
