'use strict';

const http = require('https');
const async = require('async');

const API_URL = 'api.cryptoapis.io';
const API_VERSION = 'v1';

class CryptoAPIs {

    constructor (email, password) {

        this.email = email;
        this.password = password;
        
        this.tokenFetchTime = 0;
        this.token = false;
    }

    isTokenAvailable() {

        var ts = Date.now();

        if (this.token && (ts - this.tokenFetchTime) < 2700000) {
            
            return true;
        } else {
            return false;
        }
    }

    getToken (callback) {

        var postData = JSON.stringify({ 
            email: this.email,
            password: this.password
        });
    
        var options = {
            hostname: API_URL,
            port: 443,
            path: '/' + API_VERSION + '/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var req = http.request(options, (res) => {
                
            res.setEncoding('utf8');
            
            res.on('data', (str) => {
                
                try {

                    var obj = JSON.parse(str);

                    if (res.statusCode != 200) {

                        if (obj.meta && obj.meta.message) {

                            callback(obj.meta.message);
                        } else {
                            callback('Technical problem.');
                        }

                    } else {

                        if (obj.payload && obj.payload.token) {

                            this.token = obj.payload.token;
                            this.tokenFetchTime = Date.now();
                            callback(null, 'success');
                        } else {
                            callback('Technical problem.');
                        }
                    }

                } catch (e) {
                    callback('Technical problem.');
                }
            });

            res.on('end', () => {
                
            });
        });
    
        req.on('error', (e) => {
            callback('Technical problem.');
        });
        
        req.write(postData);
        req.end();
    }

    getRequest(path, callback) {

        var options = {
            hostname: API_URL,
            port: 443,
            path: '/' + API_VERSION + path,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
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
                        
                        callback(obj);
                    } else {
                        
                        callback(null, obj);
                    }
                } catch (e) {
                    callback('Technical problem.');
                }
            });
        });
    
        req.on('error', (e) => {
            callback('Technical problem.');
        });
        
        req.end();
    }

    executeGetRequest (path) {

        var tasks = [];

        if (!this.isTokenAvailable()) {
            tasks.push(this.getToken.bind(this));
        }

        tasks.push(this.getRequest.bind(this, path));

        return new Promise(function(resolve, reject) {

            async.series(tasks, function(error, results) {
                
                if (error) {
                    reject(error);
                } else {
                    resolve(results.pop());
                }
            });
        });
    }

    getAllExchanges() {

        return this.executeGetRequest('/exchanges');
    }

    getAllAssets() {

        return this.executeGetRequest('/assets');
    }

    getAllSymbols() {

        return this.executeGetRequest('/mappings');
    }

    getSpecificRate(baseAsset, quoteAsset) {

        return this.executeGetRequest('/exchange-rates/' + baseAsset + '/' + quoteAsset);
    }

    getAllCurrentRates(baseAsset) {

        return this.executeGetRequest('/exchange-rates/' + baseAsset);
    }

    getOHLCVPeriods() {
        
        return this.executeGetRequest('/ohlcv/periods');
    }

    getOHLCVLatestData(symbol, period) {
        
        return this.executeGetRequest('/ohlcv/latest/' + symbol + '?period=' + period);
    }

    getOHLCVHistoricalData(symbol, period, timePeriodStart, timePeriodEnd) {
        
        return this.executeGetRequest('/ohlcv/history/' + symbol + '?period=' + period + '&timePeriodStart=' + timePeriodStart + '&timePeriodEnd=' + timePeriodEnd);
    }

    tradesGetLatestData() {
        
        return this.executeGetRequest('/trades/latest');
    }

    tradesGetHistoricalData(symbol, timeStart, timeEnd) {
        
        return this.executeGetRequest('/trades/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd);
    }

    quotesGetLatestData() {
        
        return this.executeGetRequest('/quotes/latest');
    }

    quotesGetHistoricalData(symbol, timeStart, timeEnd) {
        
        return this.executeGetRequest('/quotes/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd);
    }
}

module.exports = CryptoAPIs;