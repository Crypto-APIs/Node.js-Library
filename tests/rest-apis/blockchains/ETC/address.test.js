async function Address(caClient) {
    console.log('\n::ETC Address');

    const testPass = 'testPass13';
    const newAddress = await caClient.BC.ETC.address.generateAddress().then(response => response.payload.address);

    await caClient.BC.ETC.address.getInfo(newAddress);
    await caClient.BC.ETC.address.getAddressTransactions(newAddress);
    await caClient.BC.ETC.address.generateAccount(testPass);
    await caClient.BC.ETC.address.getAddressNonce(newAddress);
}

module.exports = Address;
