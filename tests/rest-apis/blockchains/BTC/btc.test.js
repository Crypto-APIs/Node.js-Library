const Address = require('./address.test');
const Blockchain = require('./blockchain.test');
const PaymentForwarding = require('./payment-forwarding.test');
const Transaction = require('./transaction.test');
const Wallet = require('./wallet.test');
const Webhook = require('./webhook.test');
const OmniLayer = require('./omni-layer.test');

async function BTC(caClient) {
    console.log('\n::BTC');

    await Address(caClient);
    await Blockchain(caClient);
    await PaymentForwarding(caClient);
    await Transaction(caClient);
    await Wallet(caClient);
    await Webhook(caClient);
    await OmniLayer(caClient);
}

module.exports = caClient => BTC(caClient);
