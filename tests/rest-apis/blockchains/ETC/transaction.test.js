async function Transaction(caClient) {
    console.log('\n::ETC Transaction');

    const txHash = '0x9bdfc6a9f315a8841699a2754eab5deacc3e35c4c86f239069b566ca31264eca';

    const transaction = await caClient.BC.ETC.transaction.getTransaction(txHash).then(response => response ? response.payload : null);

    if (transaction) {

        await caClient.BC.ETC.transaction.getTransactionsByBlock(transaction.block_number, transaction.index);
        await caClient.BC.ETC.transaction.getTransactionByBlockNumber(transaction.block_number, transaction.index);
        await caClient.BC.ETC.transaction.getTransactionByBlockHash(transaction.block_hash, transaction.index);
    }

    const from = '0xD76fF6e847d4BE1A12Cae03Bf9992D61E4DE1340';
    const to = '0x1Dd64259174527Acc37C145Ea53c7E473b440E6A';
    const value = 0.01;

    await caClient.BC.ETC.transaction.estimateTransactionGas(from, to, value);
    await caClient.BC.ETC.transaction.getPendingTransactions();
    await caClient.BC.ETC.transaction.getQueuedTransactions();
}


module.exports = Transaction;
