async function Blockchain(caClient) {
    console.log('\n::DASH Blockchain');

    const chainInfo = await caClient.BC.DASH.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.DASH.blockchain.getBlockByHeight(chainInfo.blocks - 6).then(response => response.payload);

    await caClient.BC.DASH.blockchain.getBlockByHash(block.hash);
    await caClient.BC.DASH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
