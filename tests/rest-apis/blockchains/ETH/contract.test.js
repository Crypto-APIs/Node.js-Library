async function Contract(caClient) {
    console.log('\n::ETH Contract');

    await caClient.BC.ETH.contract.estimateSmartContractGas();
}

module.exports = Contract;
