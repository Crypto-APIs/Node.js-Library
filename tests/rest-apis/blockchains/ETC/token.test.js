async function Token(caClient) {
    console.log('\n::ETC Token');

    const testAddress = '0xb50b63ca02b8f8d7dee851a9812c44a4a2791d47';
    const testContract = '0x40f9405587B284f737Ef5c4c2ecEA1Fa8bfAE014';

    await caClient.BC.ETC.token.getAddressTokenBalance(testAddress, testContract);
}

module.exports = Token;
