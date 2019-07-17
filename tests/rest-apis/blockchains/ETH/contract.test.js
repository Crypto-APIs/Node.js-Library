async function Contract(caClient) {
    console.log('\n::ETH Contract');

    await caClient.BC.ETH.contract.estimateSmartContractGas();

    // TODO deploySmartContract
}

module.exports = Contract;
