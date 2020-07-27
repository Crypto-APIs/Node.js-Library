async function Webhook(caClient) {
    console.log('\n::XRP Webhook');

    const testUrl = 'http://testUrl';
    const testAddress = 'rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe';

    await caClient.BC.XRP.webhook.createNewBlockWebHook(testUrl);
    await caClient.BC.XRP.webhook.createNewBlockWebHook(testUrl, {allowDuplicate: true});

    await caClient.BC.XRP.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1);
    await caClient.BC.XRP.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.XRP.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1);
    await caClient.BC.XRP.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.XRP.webhook.listAllHooks();
    await caClient.BC.XRP.webhook.deleteAllMyWebhooks();
}

module.exports = Webhook;
