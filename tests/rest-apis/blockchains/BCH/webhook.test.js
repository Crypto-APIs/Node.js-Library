async function Webhook(caClient) {
    console.log('\n::BCH Webhook');

    const testUrl = 'http://testUrl';

    const callback = await caClient.blockchain.BCH.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);

    await caClient.blockchain.BCH.webhook.listAllHooks();
    await caClient.blockchain.BCH.webhook.deleteWebHook(callback.uuid);

    // caClient.blockchain.BCH.webhook.createConfirmedTransactionWebHook(); // TODO
    // caClient.blockchain.BCH.webhook.createAddressTransactionWebHook(); // TODO
    // caClient.blockchain.BCH.webhook.createTransactionConfirmationsWebHook(); // TODO
}


module.exports = Webhook;
