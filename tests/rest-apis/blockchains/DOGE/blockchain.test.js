async function Blockchain(caClient) {
    console.log('\n::DOGE Blockchain');

    const chainInfo = await caClient.BC.DOGE.blockchain.getInfo().then(response => response.payload);

    await caClient.BC.DOGE.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.BC.DOGE.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.BC.DOGE.blockchain.getLatestBlock();
}

module.exports = Blockchain;
