async function Blockchain(caClient) {
    console.log('\n::ZIL Blockchain');

    const chainInfo = await caClient.BC.ZIL.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.ZIL.blockchain.getBlockByHeight(chainInfo.height - 12).then(response => response.payload);

    await caClient.BC.ZIL.blockchain.getBlockByHash(block.hash);
    await caClient.BC.ZIL.blockchain.getLatestBlock();
}

module.exports = Blockchain;
