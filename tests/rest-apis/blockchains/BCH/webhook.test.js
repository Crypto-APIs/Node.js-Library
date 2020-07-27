async function Webhook(caClient) {
    console.log('\n::BCH Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testLegacyAddress = 'mr3nDS1RSLzJryatXm9uDU6XCodWi3mLoa';
    const testQAddress = 'bchtest:qpect0g3kjqzdp5kdyzsqtx7hvyw0p84aq3mjqs0x5';

    await caClient.BC.BCH.webhook.createNewBlockWebHook(testUrl);
    await caClient.BC.BCH.webhook.createNewBlockWebHook(testUrl, {allowDuplicate: true});

    await caClient.BC.BCH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1);
    await caClient.BC.BCH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1, {allowDuplicate: true});

    await caClient.BC.BCH.webhook.createAddressTransactionWebHook(testUrl, testQAddress, 1);
    await caClient.BC.BCH.webhook.createAddressTransactionWebHook(testUrl, testLegacyAddress, 1, {allowDuplicate: true});

    await caClient.BC.BCH.webhook.createTransactionConfirmationsWebHook(testUrl, testQAddress, 1);
    await caClient.BC.BCH.webhook.createTransactionConfirmationsWebHook(testUrl, testLegacyAddress, 1, {allowDuplicate: true});

    await caClient.BC.BCH.webhook.listAllHooks();
    await caClient.BC.BCH.webhook.deleteAllMyWebhooks();
}


module.exports = Webhook;
