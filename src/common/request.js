const http = require('https');
const querystring = require('querystring');
const Response = require('./response');
const Logger = require('./logger');

const API_URL = 'api.cryptoapis.io';
const API_PORT = 443;
const API_VERSION = 'v1';

const lg = Logger.getInstance();

const Request = (apiKey, path, opt = {}, postData = null) => {
    const queryParams = opt.queryParams ? querystring.stringify(opt.queryParams) : '';
    const query = queryParams ? '?' + queryParams : '';

    const options = {
        hostname: API_URL,
        port: API_PORT,
        path: '/' + API_VERSION + path + query,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey
        },
        ...opt
    };

    return new Promise((resolve, reject) => {
        const req = http.request(options, res => Response(res, options, resolve, reject));

        req.on('error', e => {
            const next = () => reject(e);
            if (!lg.enabled) {
                return next();
            }
            lg.log(next, options, e);
        });

        if (postData) {
            req.write(postData);
        }

        req.end();
    });
};

module.exports = Request;
