const Address = require('./address.test');
const Blockchain = require('./blockchain.test');
const Contract = require('./contract.test');
const PaymentForwarding = require('./payment-forwarding.test');
const Token = require('./token.test');
const Transaction = require('./transaction.test');
const Webhook = require('./webhook.test');

async function ETC(caClient) {
    console.log('\n::ETC');

    await Address(caClient);
    await Blockchain(caClient);
    await Contract(caClient);
    await PaymentForwarding(caClient);
    await Token(caClient);
    await Transaction(caClient);
    await Webhook(caClient);
}

module.exports = caClient => ETC(caClient);
