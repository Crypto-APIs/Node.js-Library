async function Blockchain(caClient) {
    console.log('\n::BCH Blockchain');

    const chainInfo = await caClient.BC.BCH.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.BCH.blockchain.getBlockByHeight(chainInfo.blocks - 10000).then(response => response.payload);

    await caClient.BC.BCH.blockchain.getBlockByHash(block.hash);
    await caClient.BC.BCH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
