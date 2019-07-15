async function Transaction(caClient) {
    console.log('\n::BCH Transaction');

    const chainInfo = await caClient.blockchain.BCH.blockchain.getInfo().then(response => response.payload);
    const transactions = await caClient.blockchain.BCH.transaction.getTransactionIndexByBlock(chainInfo.bestBlockHash).then(response => response.payload);

    if (transactions.length) {
        await caClient.blockchain.BCH.transaction.getTransaction(transactions[0].txid);
    }

    await caClient.blockchain.BCH.transaction.getUnconfirmedTransactions();
    await caClient.blockchain.BCH.transaction.getTransactionsFee();

    // caClient.blockchain.BCH.transaction.decodeRawTransaction(); // TODO OK with hex
    // caClient.blockchain.BCH.transaction.createTransaction(); // TODO
    // caClient.blockchain.BCH.transaction.signTransaction(); // TODO
    // caClient.blockchain.BCH.transaction.sendTransaction(); // TODO
    // caClient.blockchain.BCH.transaction.newTransaction(); // TODO
    // caClient.blockchain.BCH.transaction.createHDWalletTransaction(); // TODO
}


module.exports = Transaction;
