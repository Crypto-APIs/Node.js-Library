async function Address(caClient) {
    console.log('\n::DASH Address');

    const newAddress = await caClient.BC.DASH.address.generateAddress().then(response => response.payload.address);

    await caClient.BC.DASH.address.getInfo(newAddress);
    await caClient.BC.DASH.address.getAddressTransactions(newAddress);
}

module.exports = Address;
