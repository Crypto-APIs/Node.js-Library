async function Address(caClient) {
    console.log('\n::BCH Address');

    const newAddress = await caClient.BC.BCH.address.generateAddress().then(response => response.payload.address);

    await caClient.BC.BCH.address.getInfo(newAddress);
    await caClient.BC.BCH.address.getInfoMultisig(newAddress);
    await caClient.BC.BCH.address.getAddressTransactions(newAddress);
}

module.exports = Address;
