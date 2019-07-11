class ETHToken {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    getAddressTokenBalance(network, address, contract) {
        return this.request.get(this.basePath + network + '/tokens/' + address + '/' + contract + '/balance');
    }

    transferTokens(network, fromAddress, toAddress, contract, gasPrice, gasLimit, token, password = null, privateKey = null) {
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

        return this.request.post(this.basePath + network + '/tokens/transfer', body);
    }

}

module.exports = ETHToken;
