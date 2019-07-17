async function Address(caClient) {
    console.log('\n::LTC Address');

    const newAddress = await caClient.BC.LTC.address.generateAddress().then(response => response.payload.address);

    await caClient.BC.LTC.address.getInfo(newAddress);
    await caClient.BC.LTC.address.getInfoMultisig(newAddress);
    await caClient.BC.LTC.address.getAddressTransactions(newAddress);
}

module.exports = Address;
