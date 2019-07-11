class ETHContract {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    estimateSmartContractGas(network) {
        return this.request.get(this.basePath + network + '/contracts/gas');
    }

    deploySmartContract(network, privateKey, from, gasPrice, gasLimit, byteCode) {
        return this.request.post(this.basePath + network + '/contracts', {
            privateKey: privateKey,
            fromAddress: from,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            byteCode: byteCode
        });
    }

}

module.exports = ETHContract;
