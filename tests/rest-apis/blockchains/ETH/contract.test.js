async function Contract(caClient) {
    console.log('\n::ETH Contract');

    await caClient.blockchain.ETH.contract.estimateSmartContractGas();

    // TODO deploySmartContract
}

module.exports = Contract;
