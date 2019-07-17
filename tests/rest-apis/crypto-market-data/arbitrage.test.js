async function Arbitrage(caClient) {
    console.log('\n::CMD Arbitrage');

    await caClient.CMD.arbitrage.getLatest(); // TODO: Verify it's working now
}

module.exports = Arbitrage;
