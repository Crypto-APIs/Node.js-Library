async function Webhook(caClient) {
    console.log('\n::LTC Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = 'mr3nDS1RSLzJryatXm9uDU6XCodWi3mLoa';

    await caClient.BC.LTC.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    await caClient.BC.LTC.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    await caClient.BC.LTC.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    await caClient.BC.LTC.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);

    await caClient.BC.LTC.webhook.listAllHooks();
    await caClient.BC.LTC.webhook.deleteAllMyWebhooks();
}


module.exports = Webhook;
