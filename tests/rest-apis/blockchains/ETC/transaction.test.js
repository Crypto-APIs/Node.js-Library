async function Transaction(caClient) {
    console.log('\n::ETC Transaction');

    const txHash = '0x7a7f3afed522a106d4b1ea469352cf4ca128eacfbb70b9002c37db5db9ef5d01';

    const transaction = await caClient.BC.ETC.transaction.getTransaction(txHash).then(response => response ? response.payload : null);

    if (transaction) {

        await caClient.BC.ETC.transaction.getTransactionsByBlock(transaction.block_number, transaction.index);
        await caClient.BC.ETC.transaction.getTransactionByBlockNumber(transaction.block_number, transaction.index);
        await caClient.BC.ETC.transaction.getTransactionByBlockHash(transaction.block_hash, transaction.index);
    }

    const from = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';
    const to = '0xc595B20EEC3d35E8f993d79262669F3ADb6328f7';
    const value = 0.01;

    await caClient.BC.ETC.transaction.estimateTransactionGas(from, to, value);
    await caClient.BC.ETC.transaction.getPendingTransactions();
    await caClient.BC.ETC.transaction.getQueuedTransactions();
}


module.exports = Transaction;
