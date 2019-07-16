async function Address(caClient) {
    console.log('\n::LTC Address');

    const newAddress = await caClient.blockchain.LTC.address.generateAddress().then(response => response.payload.address);

    await caClient.blockchain.LTC.address.getInfo(newAddress);
    await caClient.blockchain.LTC.address.getInfoMultisig(newAddress);
    await caClient.blockchain.LTC.address.getAddressTransactions(newAddress);
}

module.exports = Address;
