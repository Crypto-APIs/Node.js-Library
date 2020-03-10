async function Transaction(caClient) {
    console.log('\n::ZIL Transaction');

    const txHash = '0xf620ab8c2b5af189c5ad74cf6943b6ff6b94d780330d3dc139c6b59d08d7c410';

    const transaction = await caClient.BC.ZIL.transaction.getTransaction(txHash).then(response => response ? response.payload : null);

    if (transaction) {
        await caClient.BC.ZIL.transaction.getTransactionsByBlock(transaction.block_number);
        await caClient.BC.ZIL.transaction.getTransactionByBlockNumber(transaction.block_number, transaction.index);
        await caClient.BC.ZIL.transaction.getTransactionByBlockHash(transaction.block_hash, transaction.index);
    }
}

module.exports = Transaction;
