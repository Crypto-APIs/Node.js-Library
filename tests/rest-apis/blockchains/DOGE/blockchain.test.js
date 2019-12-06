async function Blockchain(caClient) {
    console.log('\n::DOGE Blockchain');

    const chainInfo = await caClient.BC.DOGE.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.DOGE.blockchain.getBlockByHeight(chainInfo.blocks - 6).then(response => response.payload);

    await caClient.BC.DOGE.blockchain.getBlockByHash(block.hash);
    await caClient.BC.DOGE.blockchain.getLatestBlock();
}

module.exports = Blockchain;
