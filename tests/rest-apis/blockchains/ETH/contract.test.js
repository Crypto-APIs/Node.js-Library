async function Contract(caClient) {
    console.log('\n::ETH Contract');

    await caClient.BC.ETH.contract.estimateSmartContractGas();

    const contractAddress = '0x7589fdcc0754a82959800a5250f6dd7f9ba240e1';
    await caClient.BC.ETH.contract.getContractGasPrice(contractAddress);
}

module.exports = Contract;
