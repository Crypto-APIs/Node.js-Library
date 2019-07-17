async function Blockchain(caClient) {
    console.log('\n::ETH Blockchain');

    const chainInfo = await caClient.BC.ETH.blockchain.getInfo().then(response => response.payload);

    await caClient.BC.ETH.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.BC.ETH.blockchain.getBlockByHeight(chainInfo.height);
    await caClient.BC.ETH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
