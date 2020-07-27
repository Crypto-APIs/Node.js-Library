async function Address(caClient) {
    console.log('\n::XRP Address');

    const testAddress = 'rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe';

    await caClient.BC.XRP.address.generateAddress();
    await caClient.BC.XRP.address.getInfo(testAddress);
    await caClient.BC.XRP.address.getAddressTransactions(testAddress);
}

module.exports = Address;
