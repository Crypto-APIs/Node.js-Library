const BaseAddress = require('../../../common/blockchain/base-address');

class ETHAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

    generateEthereumAccount(password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/account', {
            password: password
        });
    }

    // TODO: Missing endpoint for nonce (on doc is the same as GET /v1/bc/eth/${NETWORK}/address/${ADDRESS}

}

module.exports = ETHAddress;
