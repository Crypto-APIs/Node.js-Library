const Network = (function () {
    let instances = {};

    function createInstance() {
        return {
            BC: {},
            switchSelected: function (bcId, network) {
                if (!this.BC[bcId.toUpperCase()].available.includes(network)) {
                    return console.error(`Invalid network (${network}) for this bc`);
                }

                this.BC[bcId.toUpperCase()].selected = network;
            },
            addBlockchain: function (bcId, available, selected) {
                if (Object.keys(this.BC).includes(bcId.toUpperCase())) {
                    return console.error(`Record for this blockchain (${bcId}) already exists.`);
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
        getInstance: function (apiKey) {
            if (!instances[apiKey]) {
                instances[apiKey] = createInstance(apiKey);
            }
            return instances[apiKey];
        }
    };
})();

module.exports = Network;
