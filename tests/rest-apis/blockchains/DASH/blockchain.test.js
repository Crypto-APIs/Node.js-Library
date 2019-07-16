async function Blockchain(caClient) {
    console.log('\n::DASH Blockchain');

    const chainInfo = await caClient.blockchain.DASH.blockchain.getInfo().then(response => response.payload);

    await caClient.blockchain.DASH.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.blockchain.DASH.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.blockchain.DASH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
