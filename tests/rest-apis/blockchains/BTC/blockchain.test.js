async function Blockchain(caClient) {
    console.log('\n::BTC Blockchain');

    const chainInfo = await caClient.BC.BTC.blockchain.getInfo().then(response => response.payload);

    await caClient.BC.BTC.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.BC.BTC.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.BC.BTC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
