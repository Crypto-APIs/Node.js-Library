const BaseWebHook = require('../../../common/blockchain/base-web-hook');
const {BTCBasedOmniWebhooks} = require('../../../common/mixins');

class BTCWebHook extends BaseWebHook {

}

Object.assign(BTCWebHook.prototype, BTCBasedOmniWebhooks);

module.exports = BTCWebHook;
