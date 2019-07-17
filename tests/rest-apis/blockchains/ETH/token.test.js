async function Token(caClient) {
    console.log('\n::ETH Token');

    const testAddress = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';
    const testContract = '0x40f9405587B284f737Ef5c4c2ecEA1Fa8bfAE014';

    await caClient.blockchain.ETH.token.getAddressTokenBalance(testAddress, testContract);
    await caClient.blockchain.ETH.token.getAddressTokenTransfers(testAddress);
    await caClient.blockchain.ETH.token.getTokenTransactionsByAddress(testAddress);

    // TODO transferTokens
}

module.exports = Token;
