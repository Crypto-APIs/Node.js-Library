async function Blockchain(caClient) {
    console.log('\n::BCH Blockchain');

    const chainInfo = await caClient.BC.BCH.blockchain.getInfo().then(response => response.payload);

    await caClient.BC.BCH.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.BC.BCH.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.BC.BCH.blockchain.getLatestBlock();
}

module.exports = Blockchain;
