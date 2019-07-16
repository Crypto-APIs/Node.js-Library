const http = require('https');
const {DEBUG} = require('../consts');

const API_URL = 'api.cryptoapis.io';
const API_PORT = 443;
const API_VERSION = 'v1';

const Request = (function () {
    let instance;

    function createInstance(apiKey) {
        return {
            apiKey: apiKey,
            get: function (path) {
                const apiKey = this.apiKey;
                const method = 'GET';

                return new Promise(function (resolve, reject) {
                    var options = {
                        hostname: API_URL,
                        port: API_PORT,
                        path: '/' + API_VERSION + path,
                        method: method,
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': apiKey
                        }
                    };

                    var req = http.request(options, (res) => {
                        res.setEncoding('utf8');

                        var responseStr = '';

                        res.on('data', (str) => {
                            responseStr += str;
                        });

                        res.on('end', () => {
                            try {
                                var obj = JSON.parse(responseStr);

                                if (res.statusCode != 200) {
                                    reject(obj);
                                } else {
                                    resolve(obj);
                                }
                            } catch (e) {
                                reject('Technical problem.');
                            }
                        });
                    });

                    req.on('error', (e) => {
                        reject('Technical problem.');
                    });

                    req.end();
                })
                    .then(res => {
                        if (DEBUG) {
                            console.log('\x1b[32m', 'OK', '\x1b[0m', method + ' ' + path);
                        }

                        return res;
                    })
                    .catch(err => {
                        if (DEBUG) {
                            console.log('\x1b[31m', 'ERR', '\x1b[0m', method + ' ' + path);
                        }
                        console.error(err);

                        return err;
                    });
            },
            post: function (path, data) {
                const apiKey = this.apiKey;
                const method = 'POST';

                return new Promise(function (resolve, reject) {
                    var postData = JSON.stringify(data);

                    var options = {
                        hostname: API_URL,
                        port: API_PORT,
                        path: '/' + API_VERSION + path,
                        method: method,
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': apiKey
                        }
                    };

                    var req = http.request(options, (res) => {
                        res.setEncoding('utf8');

                        var responseStr = '';

                        res.on('data', (str) => {
                            responseStr += str;
                        });

                        res.on('end', () => {
                            try {
                                var obj = JSON.parse(responseStr);

                                if (res.statusCode != 200) {
                                    reject(obj);
                                } else {
                                    resolve(obj);
                                }
                            } catch (e) {
                                reject('Technical problem.');
                            }
                        });
                    });

                    req.on('error', (e) => {
                        reject('Technical problem.');
                    });

                    req.write(postData);
                    req.end();
                })
                    .then(res => {
                        if (DEBUG) {
                            console.log('\x1b[32m', 'OK', '\x1b[0m', method + ' ' + path);
                        }

                        return res;
                    })
                    .catch(err => {
                        if (DEBUG) {
                            console.log('\x1b[31m', 'ERR', '\x1b[0m', method + ' ' + path);
                        }
                        console.error(err);
                    });
            },
            delete: function (path) {
                const apiKey = this.apiKey;
                const method = 'DELETE';

                return new Promise(function (resolve, reject) {
                    var options = {
                        hostname: API_URL,
                        port: API_PORT,
                        path: '/' + API_VERSION + path,
                        method: method,
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': apiKey
                        }
                    };

                    var req = http.request(options, (res) => {
                        res.setEncoding('utf8');

                        var responseStr = '';

                        res.on('data', (str) => {
                            responseStr += str;
                        });

                        res.on('end', () => {
                            try {
                                var obj = JSON.parse(responseStr);

                                if (res.statusCode != 200) {
                                    reject(obj);
                                } else {
                                    resolve(obj);
                                }
                            } catch (e) {
                                reject('Technical problem.');
                            }
                        });
                    });

                    req.on('error', (e) => {
                        reject('Technical problem.');
                    });

                    req.end();
                })
                    .then(res => {
                        if (DEBUG) {
                            console.log('\x1b[32m', 'OK', '\x1b[0m', method + ' ' + path);
                        }

                        return res;
                    })
                    .catch(err => {
                        if (DEBUG) {
                            console.log('\x1b[31m', 'ERR', '\x1b[0m', method + ' ' + path);
                        }
                        console.error(err);
                    });
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

module.exports = Request;
