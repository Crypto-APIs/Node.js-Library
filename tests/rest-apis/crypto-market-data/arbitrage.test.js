async function Arbitrage(caClient) {
    console.log('\n::CMD Arbitrage');

    await caClient.cryptoMarketData.arbitrage.getLatest(); // TODO: Verify it's working now
}

module.exports = Arbitrage;
