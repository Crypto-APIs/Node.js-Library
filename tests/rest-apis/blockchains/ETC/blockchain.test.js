async function Blockchain(caClient) {
    console.log('\n::ETC Blockchain');

    const chainInfo = await caClient.BC.ETC.blockchain.getInfo().then(response => response.payload);

    await caClient.BC.ETC.blockchain.getBlockByHash(chainInfo.bestBlockHash);
    await caClient.BC.ETC.blockchain.getBlockByHeight(chainInfo.height);
    await caClient.BC.ETC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
