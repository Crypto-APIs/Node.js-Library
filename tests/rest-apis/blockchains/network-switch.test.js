async function NS(caClient) {

    console.log('\n::Network switching');
    console.log('\nShould switch to available network which can be (for autocompletion) added as static to the class');
    caClient.BC.BCH.switchNetwork(caClient.BC.BCH.NETWORKS.TESTNET);
    await caClient.BC.BCH.blockchain.getInfo();

    console.log('\nShould switch to available network if it exists as a record for the current bc');
    caClient.BC.BCH.switchNetwork('mainnet');
    await caClient.BC.BCH.blockchain.getInfo();

    console.log('\nShould not switch to network which is not listed under the ones available in the bc class');
    caClient.BC.BCH.switchNetwork('ropsten');
    await caClient.BC.BCH.blockchain.getInfo();

    console.log('\nShould not switch to invalid network name');
    caClient.BC.BCH.switchNetwork('fakename');
    await caClient.BC.BCH.blockchain.getInfo();
}

module.exports = caClient => NS(caClient);
