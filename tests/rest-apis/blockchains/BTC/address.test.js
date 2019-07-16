async function Address(caClient) {
    console.log('\n::BTC Address');

    const newAddress = await caClient.blockchain.BTC.address.generateAddress().then(response => response.payload.address);

    await caClient.blockchain.BTC.address.getInfo(newAddress);
    await caClient.blockchain.BTC.address.getInfoMultisig(newAddress);
    await caClient.blockchain.BTC.address.getAddressTransactions(newAddress);
}

module.exports = Address;
