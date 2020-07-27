async function Transaction(caClient) {
    console.log('\n::XRP Transaction');

    const txHash = '150e6abe46171e9ba83d96856a351faa656c1a9b9b3b71d5f735e8228f545af4';

    const transaction = await caClient.BC.XRP.transaction.getTransaction(txHash).then(response => response ? response.payload : null);

    if (transaction) {
        await caClient.BC.XRP.transaction.getTransactionsByBlock(transaction.block_height);
        await caClient.BC.XRP.transaction.getTransactionByBlockNumber(transaction.block_height, transaction.index);
        await caClient.BC.XRP.transaction.getTransactionByBlockHash(transaction.block_hash, transaction.index);
    }
}

module.exports = Transaction;
