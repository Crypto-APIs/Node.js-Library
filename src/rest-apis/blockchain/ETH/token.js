const Base = require('../../../common/blockchain/base-chain-component');

class ETHToken extends Base {

    constructor(...props) {
        super(...props);
    }

    getAddressTokenBalance(address, contract) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/tokens/' + address + '/' + contract + '/balance');
    }

    transferTokens(fromAddress, toAddress, contract, gasPrice, gasLimit, token, password = null, privateKey = null) {
        var body = {
            fromAddress: fromAddress,
            toAddress: toAddress,
            contract: contract,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            token: token
        };

        if (password) {
            body['password'] = password;
        } else {
            body['privateKey'] = privateKey;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/tokens/transfer', body);
    }

}

module.exports = ETHToken;
