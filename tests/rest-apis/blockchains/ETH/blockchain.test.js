async function Blockchain(caClient) {
    console.log('\n::ETH Blockchain');

    const chainInfo = await caClient.BC.ETH.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.ETH.blockchain.getBlockByHeight(chainInfo.height - 12).then(response => response.payload);

    await caClient.BC.ETH.blockchain.getBlockByHash(block.hash);
    await caClient.BC.ETH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
