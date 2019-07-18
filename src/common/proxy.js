const Request = require('./request');

const Proxy = (function () {
    let instances = {};

    function createInstance(apiKey) {
        return {
            log: false,
            apiKey: apiKey,
            setLogging: function (enable) {
                this.log = enable;
            },
            get: function (path) {
                return Request(this.log, this.apiKey, path);
            },
            post: function (path, data) {
                return Request(this.log, this.apiKey, path, {method: 'POST'}, JSON.stringify(data))
            },
            delete: function (path) {
                return Request(this.log, this.apiKey, path, {method: 'DELETE'})
            }
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

module.exports = Proxy;
