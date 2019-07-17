async function Blockchain(caClient) {
    console.log('\n::DASH Blockchain');

    const chainInfo = await caClient.BC.DASH.blockchain.getInfo().then(response => response.payload);

    await caClient.BC.DASH.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.BC.DASH.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.BC.DASH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
