const BaseWebHook = require('../../../common/blockchain/base-web-hook');

class ETHWebHook extends BaseWebHook {

    constructor(...props) {
        super(...props);
    }

    // TODO?: implement hook for TOKEN?
    // TODO?: implement hook for TXPOOL?

}

module.exports = ETHWebHook;
