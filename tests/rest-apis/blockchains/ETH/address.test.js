async function Address(caClient) {
    console.log('\n::ETH Address');

    const testPass = 'testPass13';
    const newAddress = await caClient.blockchain.ETH.address.generateAddress().then(response => response.payload.address);

    await caClient.blockchain.ETH.address.getInfo(newAddress);
    await caClient.blockchain.ETH.address.getAddressTransactions(newAddress);
    await caClient.blockchain.ETH.address.generateAccount(testPass);
    await caClient.blockchain.ETH.address.getAddressNonce(newAddress);
}

module.exports = Address;
