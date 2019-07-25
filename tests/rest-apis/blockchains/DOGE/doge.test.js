const Address = require('./address.test');
const Blockchain = require('./blockchain.test');
const PaymentForwarding = require('./payment-forwarding.test');
const Transaction = require('./transaction.test');
const Wallet = require('./wallet.test');
const Webhook = require('./webhook.test');

async function DOGE(caClient) {
    console.log('\n::DOGE');

    await Address(caClient);
    await Blockchain(caClient);
    await PaymentForwarding(caClient);
    await Transaction(caClient);
    await Wallet(caClient);
    await Webhook(caClient);
}

module.exports = caClient => DOGE(caClient);
