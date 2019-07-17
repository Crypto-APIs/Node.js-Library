async function Webhook(caClient) {
    console.log('\n::BCH Webhook');

    const testUrl = 'http://testUrl';
    const textTx = '96749686ff70751cbc0c64a8171fc4598f6ccb6c595d235b8b6c3052748d284c';
    const testAddress = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';

    const newBlockHook = await caClient.blockchain.ETH.webhook.createNewBlockWebHook(testUrl).then(response => response.payload);
    const confirmedTxHook = await caClient.blockchain.ETH.webhook.createConfirmedTransactionWebHook(testUrl, textTx, 1).then(response => response.payload);
    const addressConfirmationHook = await caClient.blockchain.ETH.webhook.createAddressTransactionWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const txConfirmationHook = await caClient.blockchain.ETH.webhook.createTransactionConfirmationsWebHook(testUrl, testAddress, 1).then(response => response.payload);
    const tokenCreationHook = await caClient.blockchain.ETH.webhook.createTokenWebHook(testUrl).then(res => res.payload);
    const txPoolCreationHook = await caClient.blockchain.ETH.webhook.createTxPoolWebHook(testUrl).then(res => res.payload);

    await caClient.blockchain.ETH.webhook.listAllHooks();
    await caClient.blockchain.ETH.webhook.deleteWebHook(newBlockHook.uuid);
    await caClient.blockchain.ETH.webhook.deleteWebHook(confirmedTxHook.uuid); // (Cleanup)
    await caClient.blockchain.ETH.webhook.deleteWebHook(addressConfirmationHook.uuid); // (Cleanup)
    await caClient.blockchain.ETH.webhook.deleteWebHook(txConfirmationHook.uuid); // (Cleanup)
    await caClient.blockchain.ETH.webhook.deleteWebHook(tokenCreationHook.uuid); // (Cleanup)
    await caClient.blockchain.ETH.webhook.deleteWebHook(txPoolCreationHook.uuid); // (Cleanup)

    await caClient.blockchain.ETH.webhook.listAllHooks().then(console.log); // TODO RM
}


module.exports = Webhook;
