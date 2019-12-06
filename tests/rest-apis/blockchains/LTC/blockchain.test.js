async function Blockchain(caClient) {
    console.log('\n::LTC Blockchain');

    const chainInfo = await caClient.BC.LTC.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.LTC.blockchain.getBlockByHeight(chainInfo.blocks - 6).then(response => response.payload);

    await caClient.BC.LTC.blockchain.getBlockByHash(block.hash);
    await caClient.BC.LTC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
