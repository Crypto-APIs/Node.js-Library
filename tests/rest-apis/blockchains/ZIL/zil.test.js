const Address = require('./address.test');
const Blockchain = require('./blockchain.test');
const Transaction = require('./transaction.test');

async function ZIL(caClient) {
    console.log('\n::ZIL');

    await Address(caClient);
    await Blockchain(caClient);
    await Transaction(caClient);
}

module.exports = caClient => ZIL(caClient);
