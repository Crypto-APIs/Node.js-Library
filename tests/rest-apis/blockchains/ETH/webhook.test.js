async function Webhook(caClient) {
    console.log('\n::ETH Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '0x9966e469b5ace55eab8f3bb09affde3efb0ed0d094b11eb1f90e64107d3eb906';
    const testAddress = '0x21795d753752ccc1ac728002d23ba33cbf13b8b0';

    await caClient.BC.ETH.webhook.createNewBlockWebHook(testUrl);
    await caClient.BC.ETH.webhook.createNewBlockWebHook(testUrl, {allowDuplicate: true});

    await caClient.BC.ETH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1);
    await caClient.BC.ETH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1, {allowDuplicate: true});

    await caClient.BC.ETH.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1);
    await caClient.BC.ETH.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.ETH.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1);
    await caClient.BC.ETH.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1, {allowDuplicate: true});

    await caClient.BC.ETH.webhook.createTokenWebHook(testUrl, testAddress, 1);
    await caClient.BC.ETH.webhook.createTokenWebHook(testUrl, testAddress, 1, {allowDuplicate: true, everyConfirmation: true});

    await caClient.BC.ETH.webhook.listAllHooks();
    await caClient.BC.ETH.webhook.deleteAllMyWebhooks();
}


module.exports = Webhook;
