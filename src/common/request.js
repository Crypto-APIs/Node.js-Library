'use strict';

const http = require('https');

const API_URL = 'api.cryptoapis.io';
const API_VERSION = 'v1';

class Request {

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    get(path) {
        var apiKey = this.apiKey;

        return new Promise(function (resolve, reject) {

            var options = {
                hostname: API_URL,
                port: 443,
                path: '/' + API_VERSION + path,
                method: 'GET',
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
        });
    }

    post(path, data) {

        var apiKey = this.apiKey;

        return new Promise(function (resolve, reject) {

            var postData = JSON.stringify(data);

            var options = {
                hostname: API_URL,
                port: 443,
                path: '/' + API_VERSION + path,
                method: 'POST',
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
        });
    }

    delete(path) {

        var apiKey = this.apiKey;

        return new Promise(function (resolve, reject) {

            var options = {
                hostname: API_URL,
                port: 443,
                path: '/' + API_VERSION + path,
                method: 'DELETE',
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
        });
    }

}

module.exports = apiKey => new Request(apiKey);