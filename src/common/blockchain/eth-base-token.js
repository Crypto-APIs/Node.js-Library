const BaseChainComponent = require('./base-chain-component');

class EthBaseToken extends BaseChainComponent {

    /**
     * Get Token Balance
     *
     * @async
     * @desc In the request url you should provide the address you want to observe and the contract address that created the
     *      token. After sending the request you will receive a json object with the name of the token, the amount and its symbol.
     *
     * @param {string} address - address with tokens (e.g. "0x7857af2143cb06ddc1dab5d7844c9402e89717cb")
     * @param {string} contract - contract address (e.g. "0x40f9405587B284f737Ef5c4c2ecEA1Fa8bfAE014")
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getAddressTokenBalance(address, contract, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/tokens/' + address + '/' + contract + '/balance', queryParams);
    }

    /**
     * Transfer Tokens
     *
     * @async
     * @desc In order to transfer tokens from one address to another you should provide the from address, the private
     *      key or password (if it is an account stored on our servers), the to address, the contract adress that created
     *      the tokens and the amount of tokens you would like to transfer. It is also necessary to provide gas price and gas
     *      limit. By default these are set to: 21000000000 wei and 60000 wei, accordingly. The amount of token is per unit,
     * @example:
     *      if you want to send 120 tokens you should specify:
     *          "token" : 120;
     *      and for 10.5 tokens:
     *          "token" : 10.5,
     *
     *
     * @param {string} fromAddress
     * @param {string} toAddress
     * @param {string} contract
     * @param {number} gasPrice
     * @param {number} gasLimit
     * @param {number} token
     * @param {string} [password=null]
     * @param {string} [privateKey=null]
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    transferTokens(fromAddress, toAddress, contract, gasPrice, gasLimit, token, password = null, privateKey = null, optData = {}, queryParams = {}) {
        let data = {};

        Object.keys(optData).map(k => {
            data[k] = optData[k];
        });

        data = {
            ...data,
            fromAddress: fromAddress,
            toAddress: toAddress,
            contract: contract,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            token: token
        };

        if (password) {
            data.password = password;
        } else {
            data.privateKey = privateKey;
        }

        return this.request.post(this.basePath + this.getSelectedNetwork() + '/tokens/transfer', data, queryParams);
    }

    /**
     * Get Token Total Supply And Decimals
     *
     * @async
     * @desc In the request url you should provide the contract you want to observe. After sending the request you will
     *      receive a json object with the total supply and the decimals of the token. Works both for ERC-20 and ERC-721 Tokens.
     *
     * @param {string} contract - Contract address (e.g. "0xe9fa3d69c35b907e57f6561c1daf9bf7fc5d3786")
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTokenTotalSupplyAndDecimals(contract, queryParams = {}) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/tokens/contract/' + contract, queryParams);
    }

}

module.exports = EthBaseToken;
