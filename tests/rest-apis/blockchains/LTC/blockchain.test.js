async function Blockchain(caClient) {
    console.log('\n::LTC Blockchain');

    const chainInfo = await caClient.BC.LTC.blockchain.getInfo().then(response => response.payload);

    await caClient.BC.LTC.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.BC.LTC.blockchain.getBlockByHeight(chainInfo.blocks);
    await caClient.BC.LTC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
