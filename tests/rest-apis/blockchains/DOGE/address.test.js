async function Address(caClient) {
    console.log('\n::DOGE Address');

    const newAddress = await caClient.blockchain.DOGE.address.generateAddress().then(response => response.payload.address);

    await caClient.blockchain.DOGE.address.getInfo(newAddress);
    await caClient.blockchain.DOGE.address.getAddressTransactions(newAddress);
}

module.exports = Address;
