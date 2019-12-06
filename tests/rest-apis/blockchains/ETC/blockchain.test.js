async function Blockchain(caClient) {
    console.log('\n::ETC Blockchain');

    const chainInfo = await caClient.BC.ETC.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.ETC.blockchain.getBlockByHeight(chainInfo.height - 1200).then(response => response.payload);

    await caClient.BC.ETC.blockchain.getBlockByHash(block.hash);
    await caClient.BC.ETC.blockchain.getLatestBlock();
}

module.exports = Blockchain;
