const Address = require('./address.test');
const Blockchain = require('./blockchain.test');
const Transaction = require('./transaction.test');
const Webhook = require('./webhook.test');

async function XRP(caClient) {
    console.log('\n::XRP');

    await Address(caClient);
    await Blockchain(caClient);
    await Transaction(caClient);
    await Webhook(caClient);
}

module.exports = caClient => XRP(caClient);
