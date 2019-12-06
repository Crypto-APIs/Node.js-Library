async function Blockchain(caClient) {
    console.log('\n::BTC Blockchain');

    const chainInfo = await caClient.BC.BTC.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.BTC.blockchain.getBlockByHeight(chainInfo.blocks - 6).then(response => response.payload);

    await caClient.BC.BTC.blockchain.getBlockByHash(block.hash);
    await caClient.BC.BTC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
