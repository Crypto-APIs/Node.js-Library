const Base = require('../../../common/blockchain/base-chain-component');

class ETHContract extends Base {

    constructor(...props) {
        super(...props);
    }

    estimateSmartContractGas() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/contracts/gas');
    }

    deploySmartContract(privateKey, from, gasPrice, gasLimit, byteCode) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/contracts', {
            privateKey: privateKey,
            fromAddress: from,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            byteCode: byteCode
        });
    }

}

module.exports = ETHContract;
