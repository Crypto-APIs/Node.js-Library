'use strict';

const http = require('https');

const API_URL = 'api.cryptoapis.io';
const API_VERSION = 'v1';

class CryptoAPIs {

    constructor (token) {

        this.token = token;
    }

    getRequest(path) {

        var token = this.token;

        return new Promise(function(resolve, reject) {

            var options = {
                hostname: API_URL,
                port: 443,
                path: '/' + API_VERSION + path,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
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
                            
                            resolve(obj);
                        } else {
                            
                            reject(obj);
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

    /*executeGetRequest (path) {

        var tasks = [];

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
    }*/

    getAllExchanges() {

        return this.getRequest('/exchanges');
    }

    getAllAssets() {

        return this.getRequest('/assets');
    }

    getAllSymbols() {

        return this.getRequest('/mappings');
    }

    getSpecificRate(baseAsset, quoteAsset) {

        return this.getRequest('/exchange-rates/' + baseAsset + '/' + quoteAsset);
    }

    getAllCurrentRates(baseAsset) {

        return this.getRequest('/exchange-rates/' + baseAsset);
    }

    getOHLCVPeriods() {
        
        return this.getRequest('/ohlcv/periods');
    }

    getOHLCVLatestData(symbol, period) {
        
        return this.getRequest('/ohlcv/latest/' + symbol + '?period=' + period);
    }

    getOHLCVHistoricalData(symbol, period, timePeriodStart, timePeriodEnd) {
        
        return this.getRequest('/ohlcv/history/' + symbol + '?period=' + period + '&timePeriodStart=' + timePeriodStart + '&timePeriodEnd=' + timePeriodEnd);
    }

    tradesGetLatestData() {
        
        return this.getRequest('/trades/latest');
    }

    tradesGetHistoricalData(symbol, timeStart, timeEnd) {
        
        return this.getRequest('/trades/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd);
    }

    quotesGetLatestData() {
        
        return this.getRequest('/quotes/latest');
    }

    quotesGetHistoricalData(symbol, timeStart, timeEnd) {
        
        return this.getRequest('/quotes/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd);
    }
}

module.exports = CryptoAPIs;