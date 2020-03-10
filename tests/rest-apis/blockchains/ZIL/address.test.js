async function Address(caClient) {
    console.log('\n::ZIL Address');

    const newAddress = await caClient.BC.ZIL.address.generateAddress().then(response => response.payload.bechAddress);
    await caClient.BC.ZIL.address.getInfo(newAddress);
    await caClient.BC.ZIL.address.getAddressTransactions(newAddress);
}

module.exports = Address;
