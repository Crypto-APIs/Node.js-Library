const {BCH} = require('./BCH');
const {BTC} = require('./BTC');
const {DASH} = require('./DASH');
const {DOGE} = require('./DOGE');
const {ETC} = require('./ETC');
const {ETH} = require('./ETH');
const {LTC} = require('./LTC');

class Blockchain {

    constructor(...props) {
        this.BCH = new BCH(...props);
        this.BTC = new BTC(...props);
        this.DASH = new DASH(...props);
        this.DOGE = new DOGE(...props);
        this.ETC = new ETC(...props);
        this.ETH = new ETH(...props);
        this.LTC = new LTC(...props);
    }

    /**
     * Helper method. Switches all networks to given config.
     * NOTE: If 'testnet' is passed as a string, ETH will switch to 'ropsten', ETC - to 'morden'.
     *
     * @param {string/object} networkConfig
     */
    switchAllNetworks(networkConfig) {
        const blockchains = Object.keys(this);

        switch (typeof networkConfig) {
            case 'string':
                if (networkConfig === 'mainnet') {
                    blockchains.map(bc => this[bc].switchNetwork(networkConfig));
                }
                if (networkConfig === 'testnet') {
                    blockchains.map(bc => {
                        if (bc === 'ETH') {
                            return this[bc].switchNetwork(this.ETH.NETWORKS.ROPSTEN);
                        }
                        if (bc === 'ETC') {
                            return this[bc].switchNetwork(this.ETC.NETWORKS.MORDEN);
                        }

                        this[bc].switchNetwork(networkConfig);
                    });
                }
                break;
            case 'object': {
                Object.keys(networkConfig).map(bc => {
                    this[bc].switchNetwork(networkConfig[bc])
                });
                break;
            }
        }
    }

}

module.exports = Blockchain;
