const Network = require('../../common/network');

class BlockchainNetwork {

    constructor(bcId, networks, defaultNetwork) {
        this.bcId = bcId;
        this.NETWORKS = networks;

        this.addNetwork(networks, defaultNetwork);
    }

    addNetwork(networks, defaultNetwork) {
        Network.getInstance().addBlockchain(this.bcId, Object.values(networks), defaultNetwork);
    }

    switchNetwork(network) {
        Network.getInstance().switchSelected(this.bcId, network);
    }

    getSelectedNetwork() {
        Network.getInstance().getSelected(this.bcId);
    }

}

module.exports = BlockchainNetwork;
