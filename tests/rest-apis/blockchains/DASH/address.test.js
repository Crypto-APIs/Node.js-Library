async function Address(caClient) {
    console.log('\n::DASH Address');

    const newAddress = await caClient.blockchain.DASH.address.generateAddress().then(response => response.payload.address);

    await caClient.blockchain.DASH.address.getInfo(newAddress);
    await caClient.blockchain.DASH.address.getAddressTransactions(newAddress);
}

module.exports = Address;
