async function Webhook(caClient) {
    console.log('\n::ETH Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';

    const newBlockHook = await caClient.BC.ETH.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.BC.ETH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.BC.ETH.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.BC.ETH.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const tokenCreationHook = await caClient.BC.ETH.webhook.createTokenWebHook(testUrl).then(res => res.payload);
    const txPoolCreationHook = await caClient.BC.ETH.webhook.createTxPoolWebHook(testUrl).then(res => res.payload);

    await caClient.BC.ETH.webhook.listAllHooks();
    await caClient.BC.ETH.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.BC.ETH.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.BC.ETH.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.ETH.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
    await caClient.BC.ETH.webhook.deleteWebHook(tokenCreationHook.uuid); // (Cleanup)
    await caClient.BC.ETH.webhook.deleteWebHook(txPoolCreationHook.uuid); // (Cleanup)
}


module.exports = Webhook;
