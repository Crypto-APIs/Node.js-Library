const Request = require('./request');

const Proxy = (function () {
    let instances = {};

    function createInstance(apiKey) {
        return {
            apiKey: apiKey,
            get: function (path) {
                return Request(this.apiKey, path);
            },
            post: function (path, data) {
                return Request(this.apiKey, path, {method: 'POST'}, JSON.stringify(data))
            },
            delete: function (path) {
                return Request(this.apiKey, path, {method: 'DELETE'})
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
