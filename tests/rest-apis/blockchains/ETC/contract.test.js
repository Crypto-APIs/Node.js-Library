async function Contract(caClient) {
    console.log('\n::ETC Contract');

    await caClient.BC.ETC.contract.estimateSmartContractGas();
}

module.exports = Contract;
