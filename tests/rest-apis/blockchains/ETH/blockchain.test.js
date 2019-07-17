async function Blockchain(caClient) {
    console.log('\n::ETH Blockchain');

    const chainInfo = await caClient.blockchain.ETH.blockchain.getInfo().then(response => response.payload);

    await caClient.blockchain.ETH.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.blockchain.ETH.blockchain.getBlockByHeight(chainInfo.height);
    await caClient.blockchain.ETH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
