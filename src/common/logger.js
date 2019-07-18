const Logger = (function () {
    let instance;

    function createInstance() {
        return {
            enabled: false,
            setLogging: function(state) {
                this.enabled = state;
            },
            log: function (next, meta, err) {
                const metaStr = Object.keys(meta).reduce((a, c) => `${a} ${c}=${meta[c]}`, '');

                if (!err) {
                    console.log('\x1b[32m', 'OK', '\x1b[0m', metaStr);
                } else {
                    console.log('\x1b[31m', 'ERR', '\x1b[0m', metaStr);
                    console.error(err);
                }

                next();
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

module.exports = Logger;
