async function Address(caClient) {
    console.log('\n::DOGE Address');

    const newAddress = await caClient.BC.DOGE.address.generateAddress().then(response => response.payload.address);

    await caClient.BC.DOGE.address.getInfo(newAddress);
    await caClient.BC.DOGE.address.getAddressTransactions(newAddress);
}

module.exports = Address;
