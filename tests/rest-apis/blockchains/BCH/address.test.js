async function Address(caClient) {
    console.log('\n::BCH Address');

    const newAddress = await caClient.blockchain.BCH.address.generateAddress().then(response => response.payload.address);

    await caClient.blockchain.BCH.address.getInfo(newAddress);
    await caClient.blockchain.BCH.address.getInfoMultisig(newAddress);
    await caClient.blockchain.BCH.address.getAddressTransactions(newAddress);
}

module.exports = Address;
