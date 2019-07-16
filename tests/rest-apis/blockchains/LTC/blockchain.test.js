async function Blockchain(caClient) {
    console.log('\n::LTC Blockchain');

    const chainInfo = await caClient.blockchain.LTC.blockchain.getInfo().then(response => response.payload);

    await caClient.blockchain.LTC.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.blockchain.LTC.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.blockchain.LTC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
