async function Blockchain(caClient) {
    console.log('\n::BCH Blockchain');

    const chainInfo = await caClient.blockchain.BCH.blockchain.getInfo().then(response => response.payload);

    await caClient.blockchain.BCH.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.blockchain.BCH.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.blockchain.BCH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
