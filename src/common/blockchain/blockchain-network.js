const Network = require('../../common/network');

class BlockchainNetwork {

    constructor(apiKey, bcId, networks, defaultNetwork) {
        this.apiKey = apiKey;
        this.bcId = bcId;
        this.NETWORKS = networks;

        this.addNetwork(networks, defaultNetwork);
    }

    addNetwork(networks, defaultNetwork) {
        Network.getInstance(this.apiKey).addBlockchain(this.bcId, Object.values(networks), defaultNetwork);
    }

    switchNetwork(network) {
        Network.getInstance(this.apiKey).switchSelected(this.bcId, network);
    }

    getSelectedNetwork() {
        return Network.getInstance(this.apiKey).getSelected(this.bcId);
    }

}

module.exports = BlockchainNetwork;
