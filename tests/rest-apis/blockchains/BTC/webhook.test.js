async function Webhook(caClient) {
    console.log('\n::BTC Webhook');

    const testUrl = 'http://testUrl';
    const testTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'mr3nDS1RSLzJryatXm9uDU6XCodWi3mLoa';

    const omniTestTx = 'e11b979a9396282b3aa53f57512fa187a820069ae07259c969589246151198d6';
    const omniTestAddress = 'mittVBKCvyVRNVc5cq5sWXf8VsLsvn9j4f';

    await caClient.BC.BTC.webhook.createNewBlockWebHook(testUrl);
    await caClient.BC.BTC.webhook.createNewBlockWebHook(testUrl, {allowDuplicate: true});

    await caClient.BC.BTC.webhook.createConfirmedTransactionWebHook(testUrl, testTx, 1);
    await caClient.BC.BTC.webhook.createConfirmedTransactionWebHook(testUrl, testTx, 1, {allowDuplicate: true});

    await caClient.BC.BTC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1);
    await caClient.BC.BTC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.BTC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1);
    await caClient.BC.BTC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.BTC.webhook.createOmniConfirmedTransactionWebHook(testUrl, omniTestTx, 1);
    await caClient.BC.BTC.webhook.createOmniConfirmedTransactionWebHook(testUrl, omniTestTx, 1, {allowDuplicate: true});

    await caClient.BC.BTC.webhook.createOmniTransactionConfirmationsWebHook(testUrl, omniTestAddress, 1);
    await caClient.BC.BTC.webhook.createOmniTransactionConfirmationsWebHook(testUrl, omniTestAddress, 1, {allowDuplicate: true});

    await caClient.BC.BTC.webhook.createOmniTokenWebHook(testUrl, omniTestAddress, 1);
    await caClient.BC.BTC.webhook.createOmniTokenWebHook(testUrl, omniTestAddress, 1, {allowDuplicate: true, everyConfirmation: true});

    await caClient.BC.BTC.webhook.listAllHooks();
    await caClient.BC.BTC.webhook.deleteAllMyWebhooks();
}


module.exports = Webhook;
