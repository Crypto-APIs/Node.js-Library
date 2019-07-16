async function Blockchain(caClient) {
    console.log('\n::BTC Blockchain');

    const chainInfo = await caClient.blockchain.BTC.blockchain.getInfo().then(response => response.payload);

    await caClient.blockchain.BTC.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.blockchain.BTC.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.blockchain.BTC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
