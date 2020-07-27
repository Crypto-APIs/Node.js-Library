async function Blockchain(caClient) {
    console.log('\n::XRP Blockchain');

    const chainInfo = await caClient.BC.XRP.blockchain.getInfo().then(response => response.payload);
    const block = await caClient.BC.XRP.blockchain.getBlockByHeight(chainInfo.height - 1).then(response => response.payload);

    await caClient.BC.XRP.blockchain.getBlockByHash(block.hash);
    await caClient.BC.XRP.blockchain.getLatestBlock();
}

module.exports = Blockchain;
