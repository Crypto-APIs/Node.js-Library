async function Address(caClient) {
    console.log('\n::BTC Address');

    const newAddress = await caClient.BC.BTC.address.generateAddress().then(response => response.payload.address);

    await caClient.BC.BTC.address.getInfo(newAddress);
    await caClient.BC.BTC.address.getInfoMultisig(newAddress);
    await caClient.BC.BTC.address.getAddressTransactions(newAddress);
}

module.exports = Address;
