const Network = (function () {
    let instance;

    function createInstance() {
        return {
            BC: {},
            switchSelected: function (bcId, network) {
                if (!this.BC[bcId.toUpperCase()].available.includes(network)) {
                    return console.error('Invalid network');
                }

                this.BC[bcId.toUpperCase()].selected = network;
            },
            addBlockchain: function(bcId, available, selected) {
                if (Object.keys(this.BC).includes(bcId.toUpperCase())) {
                    return console.error('Record for this blockchain already exists.');
                }

                this.BC = {
                    ...this.BC,
                    [bcId.toUpperCase()]: {
                        selected: selected,
                        available: available,
                    }
                }
            },
            getSelected: function (bcId) {
                return this.BC[bcId.toUpperCase()].selected;
            },
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = Network;
