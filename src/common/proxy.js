const Request = require('./request');

const Proxy = (function () {
    let instance;

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
            if (!instance) {
                instance = createInstance(apiKey);
            }
            return instance;
        }
    };
})();

module.exports = Proxy;
