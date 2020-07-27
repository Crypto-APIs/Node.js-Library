async function Token(caClient) {
    console.log('\n::ETH Token');

    const testAddress = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';
    const testContract = '0x40f9405587B284f737Ef5c4c2ecEA1Fa8bfAE014';

    await caClient.BC.ETH.token.getAddressTokenBalance(testAddress, testContract);
    await caClient.BC.ETH.token.getAddressTokenTransfers(testAddress);
    await caClient.BC.ETH.token.getTokenTransactionsByAddress(testAddress);

    const fromAddress = '0xc065b539490f81b6c297c37b1925c3be2f190738';
    const toAddress = '0x6f2d8d4062dd05da2f4fb6b09a3869401d5a08a6';
    const contract = '0x092de782a7e1e0a92991ad829a0a33aef3c7545e';
    const tokenAmount = 10;
    await caClient.BC.ETH.token.estimateTokenTransactionGasLimit(fromAddress, toAddress, contract, tokenAmount);
}

module.exports = Token;
