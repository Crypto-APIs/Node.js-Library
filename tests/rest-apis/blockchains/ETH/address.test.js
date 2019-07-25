async function Address(caClient) {
    console.log('\n::ETH Address');

    const testPass = 'testPass13';
    const newAddress = await caClient.BC.ETH.address.generateAddress().then(response => response.payload.address);

    await caClient.BC.ETH.address.getInfo(newAddress);
    await caClient.BC.ETH.address.getAddressTransactions(newAddress);
    await caClient.BC.ETH.address.generateAccount(testPass);
    await caClient.BC.ETH.address.getAddressNonce(newAddress);
}

module.exports = Address;
