const {NETWORKS: BCH_NETWORKS} = require('../../../src/rest-apis/blockchain/BCH');

async function NS(caClient) {

    console.log('\n::Network switching');
    console.log('\nShould switch to available network which can be (for autocompletion) added as static to the class');
    caClient.blockchain.BCH.switchNetwork(BCH_NETWORKS.TESTNET);
    await caClient.blockchain.BCH.blockchain.getInfo();

    console.log('\nShould switch to available network if it exists as a record for the current bc');
    caClient.blockchain.BCH.switchNetwork('mainnet');
    await caClient.blockchain.BCH.blockchain.getInfo();

    console.log('\nShould not switch to network which is not listed under the ones available in the bc class');
    caClient.blockchain.BCH.switchNetwork('ropsten');
    await caClient.blockchain.BCH.blockchain.getInfo();

    console.log('\nShould not switch to invalid network name');
    caClient.blockchain.BCH.switchNetwork('fakename');
    await caClient.blockchain.BCH.blockchain.getInfo();
}

module.exports = caClient => NS(caClient);
