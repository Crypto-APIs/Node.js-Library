async function Webhook(caClient) {
    console.log('\n::ETH Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '0x9966e469b5ace55eab8f3bb09affde3efb0ed0d094b11eb1f90e64107d3eb906';
    const testAddress = '0x21795d753752ccc1ac728002d23ba33cbf13b8b0';

    const newBlockHook = await caClient.BC.ETH.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.BC.ETH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.BC.ETH.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.BC.ETH.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const tokenCreationHook = await caClient.BC.ETH.webhook.createTokenWebHook(testUrl, testAddress).then(res => res.payload);

    await caClient.BC.ETH.webhook.listAllHooks();
    await caClient.BC.ETH.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.BC.ETH.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.BC.ETH.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.ETH.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.ETH.webhook.deleteWebHook(tokenCreationHook.uuid); // (Cleanup)
}


module.exports = Webhook;
