async function Blockchain(caClient) {
    console.log('\n::DOGE Blockchain');

    const chainInfo = await caClient.blockchain.DOGE.blockchain.getInfo().then(response => response.payload);

    await caClient.blockchain.DOGE.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.blockchain.DOGE.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.blockchain.DOGE.blockchain.getLatestBlock();
}

module.exports = Blockchain;
