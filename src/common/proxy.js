const Request = require('./request');

const Proxy = (function () {
    let instances = {};

    function createInstance(apiKey) {
        return {
            apiKey: apiKey,
            get: function (path, queryParams = {}) {
                return Request(this.apiKey, path, {queryParams});
            },
            post: function (path, data, queryParams = {}) {
                return Request(this.apiKey, path, {method: 'POST', queryParams}, JSON.stringify(data))
            },
            patch: function (path, data, queryParams = {}) {
                return Request(this.apiKey, path, {method: 'PATCH', queryParams}, JSON.stringify(data))
            },
            put: function (path, data, queryParams = {}) {
                return Request(this.apiKey, path, {method: 'PUT', queryParams}, JSON.stringify(data))
            },
            delete: function (path, queryParams = {}) {
                return Request(this.apiKey, path, {method: 'DELETE', queryParams})
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
