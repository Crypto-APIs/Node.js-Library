async function Arbitrage(caClient) {
    console.log('\n::CMD Arbitrage');

    await caClient.CMD.arbitrage.getLatest();
}

module.exports = Arbitrage;
