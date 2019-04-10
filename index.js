'use strict';

const http = require('https');

const API_URL = 'api.cryptoapis.io';
const API_VERSION = 'v1';

class CryptoAPIs {

    constructor (apiKey) {

        this.apiKey = apiKey;
    }

    getRequest(path) {

        var apiKey = this.apiKey;

        return new Promise(function(resolve, reject) {

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

    postRequest(path, data) {

        var apiKey = this.apiKey;

        return new Promise(function(resolve, reject) {

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

    deleteRequest(path) {

        var apiKey = this.apiKey;

        return new Promise(function(resolve, reject) {

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

    getAllExchanges(skip = 0, limit = 50) {

        return this.getRequest('/exchanges?skip=' + skip + '&limit=' + limit);
    }

    getAllAssets(skip = 0, limit = 50) {

        return this.getRequest('/assets?skip=' + skip + '&limit=' + limit);
    }

    getAllSymbols(skip = 0, limit = 50) {

        return this.getRequest('/mappings?skip=' + skip + '&limit=' + limit);
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

    getOHLCVLatestData(symbol, period, limit = 50) {
        
        return this.getRequest('/ohlcv/latest/' + symbol + '?period=' + period + '&limit=' + limit);
    }

    getOHLCVHistoricalData(symbol, period, timePeriodStart, timePeriodEnd, limit = 50) {
        
        return this.getRequest('/ohlcv/history/' + symbol + '?period=' + period + '&timePeriodStart=' + timePeriodStart + '&timePeriodEnd=' + timePeriodEnd + '&limit=' + limit);
    }

    tradesGetLatestData(skip = 0, limit = 50) {
        
        return this.getRequest('/trades/latest?skip=' + skip + '&limit=' + limit);
    }

    tradesGetLatestDataBySymbol(symbol) {
        
        return this.getRequest('/trades/' + symbol + '/latest');
    }

    tradesGetHistoricalData(symbol, timeStart, timeEnd, skip = 0, limit = 50) {
        
        return this.getRequest('/trades/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    quotesGetLatestData(skip = 0, limit = 50) {
        
        return this.getRequest('/quotes/latest?skip=' + skip + '&limit=' + limit);
    }

    quotesGetHistoricalData(symbol, timeStart, timeEnd, skip = 0, limit = 50) {
        
        return this.getRequest('/quotes/' + symbol + '/history?timeStart=' + timeStart + '&timeEnd=' + timeEnd + '&skip=' + skip + '&limit=' + limit);
    }

    /*
    BITCOIN methods
     */
    getBitcoinInfo(network) {

        return this.getRequest('/bc/btc/' + network + '/info');
    }

    getBitcoinBlock(network, block) {

        return this.getRequest('/bc/btc/' + network + '/blocks/' + block);
    }

    getBitcoinLatestBlock(network) {

        return this.getRequest('/bc/btc/' + network + '/blocks/latest');
    }

    getBitcoinAddressInfo(network, address) {

        return this.getRequest('/bc/btc/' + network + '/address/' + address);
    }

    generateBitcoinAddress(network) {

        return this.postRequest('/bc/btc/' + network + '/address', {});
    }

    getBitcoinAddressTransactions(network, address, index = 0, limit = 50) {

        return this.getRequest('/bc/btc/' + network + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }

    createBitcoinWallet(network, name, addresses) {

        return this.postRequest('/bc/btc/' + network + '/wallets', {
            walletName: name,
            addresses: addresses
        });
    }

    createBitcoinHDWallet(network, name, addressCount, password) {

        return this.postRequest('/bc/btc/' + network + '/wallets/hd', {
            walletName: name,
            addressCount: addressCount,
            password: password
        });
    }

    listBitcoinWallets(network, hd) {

        var path = '/bc/btc/' + network + '/wallets';

        if (hd) {
            path = path + '/hd';
        }

        return this.getRequest(path);
    }

    getBitcoinWallet(network, walletName, hd) {

        var path = '/bc/btc/' + network + '/wallets/';

        if (hd) {
            path = path + 'hd/';
        }

        path = path + walletName;

        return this.getRequest(path);
    }

    addAddressToBitcoinWallet(network, name, addresses) {

        return this.postRequest('/bc/btc/' + network + '/wallets/' + name + '/addresses', {
            addresses: addresses
        });
    }

    generateAddressInBitcoinWallet(network, name) {

        return this.postRequest('/bc/btc/' + network + '/wallets/' + name + '/addresses/generate', {});
    }

    generateAddressInBitcoinHDWallet(network, name, addressCount, password) {

        return this.postRequest('/bc/btc/' + network + '/wallets/hd/' + name + '/addresses/generate', {
            addressCount: addressCount,
            password: password
        });
    }

    deleteAddressFromBitcoinWallet(network, name, address) {

        return this.deleteRequest('/bc/btc/' + network + '/wallets/' + name + '/address/' + address);
    }

    deleteBitcoinWallet(network, name, hd) {

        var path = '/bc/btc/' + network + '/wallets/';

        if (hd) {
            path = path + 'hd/';
        }

        path = path + name;

        return this.deleteRequest(path);
    }

    getBitcoinTransaction(network, txID) {

        return this.getRequest('/bc/btc/' + network + '/txs/txid/' + txID);
    }

    getBitcoinTransactionByBlockIndex(network, block, index) {

        return this.getRequest('/bc/btc/' + network + '/txs/block/' + block + '/' + index);
    }

    getBitcoinTransactionsByBlockIndex(network, block, index, limit) {

        return this.getRequest('/bc/btc/' + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getBitcoinUnconfirmedTransactions(network) {

        return this.getRequest('/bc/btc/' + network + '/txs');
    }

    bitcoinTransactionTrace(network, txs) {

        return this.postRequest('/bc/btc/' + network + '/txs/trace', {
            txs: txs
        });
    }

    getBitcoinLatestTransactions(network, limit = 50) {

        return this.getRequest('/bc/btc/' + network + '/txs/latest?limit=' + limit);
    }

    getBitcoinTransactionsHistory(network, txsIncluded = true, index = 0, limit = 50) {

        return this.getRequest('/bc/btc/' + network + '/txs/history?txs-included=' + txsIncluded + '&index=' + index + '&limit=' + limit);
    }

    createBitcoinTransaction(network, inputs, outputs, fee) {

        return this.postRequest('/bc/btc/' + network + '/txs/new', {
            inputs: inputs,
            outputs: outputs,
            fee: fee
        });
    }

    sendBitcoinTransaction(network, toSend) {

        return this.postRequest('/bc/btc/' + network + '/txs/send', {
            toSend: toSend
        });
    }

    decodeRawBitcoinTransaction(network, txHex) {

        return this.postRequest('/bc/btc/' + network + '/txs/decode', {
            txHex: txHex
        });
    }

    bitcoinCreatePayment(network, from, to, callbackURL, wallet, password) {

        return this.postRequest('/bc/btc/' + network + '/payments', {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password
        });
    }

    bitcoinListPayment(network) {

        return this.getRequest('/bc/btc/' + network + '/payments');
    }

    bitcoinDeletePayment(network, paymentID) {

        return this.deleteRequest('/bc/btc/' + network + '/payments/' + paymentID);
    }

    bitcoinCreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.postRequest('/bc/btc/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    bitcoinCreateNewBlockWebHook(network, callbackURL) {

        return this.postRequest('/bc/btc/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    bitcoinCreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.postRequest('/bc/btc/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    bitcoinCreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.postRequest('/bc/btc/' + network + '/hooks', {
            event: 'ADDRESS',
            url: callbackURL,
            address: address
        });
    }

    listAllBitcoinHooks(network) {

        return this.getRequest('/bc/btc/' + network + '/hooks');
    }

    deleteBitcoinWebHook(network, webhookID) {

        return this.deleteRequest('/bc/btc/' + network + '/hooks/' + webhookID);
    }

    /*
    LITECOIN methods
     */
    getLitecoinInfo(network) {

        return this.getRequest('/bc/ltc/' + network + '/info');
    }

    getLitecoinBlock(network, block) {

        return this.getRequest('/bc/ltc/' + network + '/blocks/' + block);
    }

    getLitecoinLatestBlock(network) {

        return this.getRequest('/bc/ltc/' + network + '/blocks/latest');
    }

    getLitecoinAddressInfo(network, address) {

        return this.getRequest('/bc/ltc/' + network + '/address/' + address);
    }

    generateLitecoinAddress(network) {

        return this.postRequest('/bc/ltc/' + network + '/address', {});
    }

    getLitecoinAddressTransactions(network, address, index = 0, limit = 50) {

        return this.getRequest('/bc/ltc/' + network + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }

    createLitecoinWallet(network, name, addresses) {

        return this.postRequest('/bc/ltc/' + network + '/wallets', {
            walletName: name,
            addresses: addresses
        });
    }

    createLitecoinHDWallet(network, name, addressCount, password) {

        return this.postRequest('/bc/ltc/' + network + '/wallets/hd', {
            walletName: name,
            addressCount: addressCount,
            password: password
        });
    }

    listLitecoinWallets(network, hd) {

        var path = '/bc/ltc/' + network + '/wallets';

        if (hd) {
            path = path + '/hd';
        }

        return this.getRequest(path);
    }

    getLitecoinWallet(network, walletName, hd) {

        var path = '/bc/ltc/' + network + '/wallets/';

        if (hd) {
            path = path + 'hd/';
        }

        path = path + walletName;

        return this.getRequest(path);
    }

    addAddressToLitecoinWallet(network, name, addresses) {

        return this.postRequest('/bc/ltc/' + network + '/wallets/' + name + '/addresses', {
            addresses: addresses
        });
    }

    generateAddressInLitecoinWallet(network, name) {

        return this.postRequest('/bc/ltc/' + network + '/wallets/' + name + '/addresses/generate', {});
    }

    generateAddressInLitecoinHDWallet(network, name, addressCount, password) {

        return this.postRequest('/bc/ltc/' + network + '/wallets/hd/' + name + '/addresses/generate', {
            addressCount: addressCount,
            password: password
        });
    }

    deleteAddressFromLitecoinWallet(network, name, address) {

        return this.deleteRequest('/bc/ltc/' + network + '/wallets/' + name + '/address/' + address);
    }

    deleteLitecoinWallet(network, name, hd) {

        var path = '/bc/ltc/' + network + '/wallets/';

        if (hd) {
            path = path + 'hd/';
        }

        path = path + name;

        return this.deleteRequest(path);
    }

    getLitecoinTransaction(network, txID) {

        return this.getRequest('/bc/ltc/' + network + '/txs/txid/' + txID);
    }

    getLitecoinTransactionByBlockIndex(network, block, index) {

        return this.getRequest('/bc/ltc/' + network + '/txs/block/' + block + '/' + index);
    }

    getLitecoinTransactionsByBlockIndex(network, block, index, limit) {

        return this.getRequest('/bc/ltc/' + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getLitecoinUnconfirmedTransactions(network) {

        return this.getRequest('/bc/ltc/' + network + '/txs');
    }

    litecoinTransactionTrace(network, txs) {

        return this.postRequest('/bc/ltc/' + network + '/txs/trace', {
            txs: txs
        });
    }

    getLitecoinLatestTransactions(network, limit = 50) {

        return this.getRequest('/bc/ltc/' + network + '/txs/latest?limit=' + limit);
    }

    getLitecoinTransactionsHistory(network, txsIncluded = true, index = 0, limit = 50) {

        return this.getRequest('/bc/ltc/' + network + '/txs/history?txs-included=' + txsIncluded + '&index=' + index + '&limit=' + limit);
    }

    createLitecoinTransaction(network, inputs, outputs, fee) {

        return this.postRequest('/bc/ltc/' + network + '/txs/new', {
            inputs: inputs,
            outputs: outputs,
            fee: fee
        });
    }

    sendLitecoinTransaction(network, toSend) {

        return this.postRequest('/bc/ltc/' + network + '/txs/send', {
            toSend: toSend
        });
    }

    decodeRawLitecoinTransaction(network, txHex) {

        return this.postRequest('/bc/ltc/' + network + '/txs/decode', {
            txHex: txHex
        });
    }

    litecoinCreatePayment(network, from, to, callbackURL, wallet, password) {

        return this.postRequest('/bc/ltc/' + network + '/payments', {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password
        });
    }

    litecoinListPayment(network) {

        return this.getRequest('/bc/ltc/' + network + '/payments');
    }

    litecoinDeletePayment(network, paymentID) {

        return this.deleteRequest('/bc/ltc/' + network + '/payments/' + paymentID);
    }

    litecoinCreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.postRequest('/bc/ltc/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    litecoinCreateNewBlockWebHook(network, callbackURL) {

        return this.postRequest('/bc/ltc/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    litecoinCreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.postRequest('/bc/ltc/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    litecoinCreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.postRequest('/bc/ltc/' + network + '/hooks', {
            event: 'ADDRESS',
            url: callbackURL,
            address: address
        });
    }

    listAllLitecoinHooks(network) {

        return this.getRequest('/bc/ltc/' + network + '/hooks');
    }

    deleteLitecoinWebHook(network, webhookID) {

        return this.deleteRequest('/bc/ltc/' + network + '/hooks/' + webhookID);
    }

    /*
    ETHEREUM methods
     */
    getEthereumInfo(network) {

        return this.getRequest('/bc/eth/' + network + '/info');
    }

    getEthereumBlock(network, block) {

        return this.getRequest('/bc/eth/' + network + '/blocks/' + block);
    }

    getEthereumLatestBlock(network) {

        return this.getRequest('/bc/eth/' + network + '/blocks/latest');
    }

    getEthereumAddressInfo(network, address) {

        return this.getRequest('/bc/eth/' + network + '/address/' + address);
    }

    getEthereumAddressTransactions(network, address, index = 0, limit = 50) {

        return this.getRequest('/bc/eth/' + network + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }

    generateEthereumAddress(network) {

        return this.postRequest('/bc/eth/' + network + '/address', {});
    }

    generateEthereumAccount(network, password) {

        return this.postRequest('/bc/eth/' + network + '/account', {
            password: password
        });
    }

    getEthereumTransaction(network, txHash) {

        return this.getRequest('/bc/eth/' + network + '/txs/hash/' + txHash);
    }

    getEthereumTransactionsByBlock(network, block, index = 0, limit = 50) {

        return this.getRequest('/bc/eth/' + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getEthereumTransactionByIndexInBlock(network, block, index) {

        return this.getRequest('/bc/eth/' + network + '/txs/block/' + block + '/' + index);
    }

    createEthereumTransaction(network, from, to, gasPrice, gasLimit, value, password) {

        return this.postRequest('/bc/eth/' + network + '/txs/new', {
            fromAddress: from,
            toAddress: to,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            value: value,
            password: password
        });
    }

    createEthereumTransactionWithPrivateKey(network, from, to, gasPrice, gasLimit, value, privateKey) {

        return this.postRequest('/bc/eth/' + network + '/txs/new-pvtkey', {
            fromAddress: from,
            toAddress: to,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            value: value,
            privateKey: privateKey
        });
    }

    sendEthereumTransaction(network, from, to, value) {

        return this.postRequest('/bc/eth/' + network + '/txs/send', {
            fromAddress: from,
            toAddress: to,
            value: value
        });
    }

    pushEthereumTransaction(network, signedTx) {

        return this.postRequest('/bc/eth/' + network + '/txs/push', {
            signed_tx: signedTx
        });
    }

    estimateEthereumTransactionGas(network, from, to, value, data = null) {

        var body = {
            fromAddress: from,
            toAddress: to,
            value: value
        };

        if (data) {
            body['data'] = data;
        }

        return this.postRequest('/bc/eth/' + network + '/txs/gas', body);
    }

    estimateEthereumSmartContractGas(network) {

        return this.getRequest('/bc/eth/' + network + '/contracts/gas');
    }

    deployEthereumSmartContract(network, privateKey, from, gasPrice, gasLimit, byteCode) {

        return this.postRequest('/bc/eth/' + network + '/contracts', {
            privateKey: privateKey,
            fromAddress: from,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            byteCode: byteCode
        });
    }

    getEthereumAddressTokenBalance(network, address, contract) {

        return this.getRequest('/bc/eth/' + network + '/tokens/' + address + '/' + contract + '/balance');
    }

    ethereumTransferTokens(network, fromAddress, toAddress, contract, gasPrice, gasLimit, token, password = null, privateKey = null) {

        var body =  {
            fromAddress: fromAddress,
            toAddress: toAddress,
            contract: contract,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            token: token
        };

        if (password) {

            body['password'] = password;
        } else {
            body['privateKey'] = privateKey;
        }

        return this.postRequest('/bc/eth/' + network + '/tokens/transfer', body);
    }

    ethereumCreatePayment(network, fromAddress, toAddress, callbackURL, password = null, privateKey = null) {

        var body =  {
            fromAddress: fromAddress,
            toAddress: toAddress,
            callBack: callbackURL
        };

        if (password) {

            body['password'] = password;
        } else {
            body['privateKey'] = privateKey;
        }

        return this.postRequest('/bc/eth/' + network + '/payments', body);
    }

    ethereumDeletePayment(network, uuid) {

        return this.deleteRequest('/bc/eth/' + network + '/payments/' + uuid);
    }

    ethereumListPayment(network) {

        return this.getRequest('/bc/eth/' + network + '/payments');
    }

    ethereumListPaymentHistory(network) {

        return this.getRequest('/bc/eth/' + network + '/payments/history');
    }

    ethereumCreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.postRequest('/bc/eth/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    ethereumCreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.postRequest('/bc/eth/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            confirmations: confirmations,
            transaction: transaction
        });
    }

    ethereumCreateNewBlockWebHook(network, callbackURL) {

        return this.postRequest('/bc/eth/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    ethereumCreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.postRequest('/bc/eth/' + network + '/hooks', {
            event: 'ADDRESS',
            address: address,
            url: callbackURL
        });
    }

    ethereumListAllWebHooks(network) {

        return this.getRequest('/bc/eth/' + network + '/hooks');
    }

    ethereumDeleteWebHook(network, webhookID) {

        return this.deleteRequest('/bc/eth/' + network + '/hooks/' + webhookID);
    }

    /*
    BITCOIN-CASH methods
     */
    getBitcoinCashInfo(network) {

        return this.getRequest('/bc/bch/' + network + '/info');
    }

    getBitcoinCashBlock(network, block) {

        return this.getRequest('/bc/bch/' + network + '/blocks/' + block);
    }

    getBitcoinCashLatestBlock(network) {

        return this.getRequest('/bc/bch/' + network + '/blocks/latest');
    }

    getBitcoinCashAddressInfo(network, address) {

        return this.getRequest('/bc/bch/' + network + '/address/' + address);
    }

    generateBitcoinCashAddress(network) {

        return this.postRequest('/bc/bch/' + network + '/address', {});
    }

    getBitcoinCashAddressTransactions(network, address, index = 0, limit = 50) {

        return this.getRequest('/bc/bch/' + network + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }

    createBitcoinCashWallet(network, name, addresses) {

        return this.postRequest('/bc/bch/' + network + '/wallets', {
            walletName: name,
            addresses: addresses
        });
    }

    createBitcoinCashHDWallet(network, name, addressCount, password) {

        return this.postRequest('/bc/bch/' + network + '/wallets/hd', {
            walletName: name,
            addressCount: addressCount,
            password: password
        });
    }

    listBitcoinCashWallets(network, hd) {

        var path = '/bc/bch/' + network + '/wallets';

        if (hd) {
            path = path + '/hd';
        }

        return this.getRequest(path);
    }

    getBitcoinCashWallet(network, walletName, hd) {

        var path = '/bc/bch/' + network + '/wallets/';

        if (hd) {
            path = path + 'hd/';
        }

        path = path + walletName;

        return this.getRequest(path);
    }

    addAddressToBitcoinCashWallet(network, name, addresses) {

        return this.postRequest('/bc/bch/' + network + '/wallets/' + name + '/addresses', {
            addresses: addresses
        });
    }

    generateAddressInBitcoinCashWallet(network, name) {

        return this.postRequest('/bc/bch/' + network + '/wallets/' + name + '/addresses/generate', {});
    }

    generateAddressInBitcoinCashHDWallet(network, name, addressCount, password) {

        return this.postRequest('/bc/bch/' + network + '/wallets/hd/' + name + '/addresses/generate', {
            addressCount: addressCount,
            password: password
        });
    }

    deleteAddressFromBitcoinCashWallet(network, name, address) {

        return this.deleteRequest('/bc/bch/' + network + '/wallets/' + name + '/address/' + address);
    }

    deleteBitcoinCashWallet(network, name, hd) {

        var path = '/bc/bch/' + network + '/wallets/';

        if (hd) {
            path = path + 'hd/';
        }

        path = path + name;

        return this.deleteRequest(path);
    }

    getBitcoinCashTransaction(network, txID) {

        return this.getRequest('/bc/bch/' + network + '/txs/txid/' + txID);
    }

    getBitcoinCashTransactionByBlockIndex(network, block, index) {

        return this.getRequest('/bc/bch/' + network + '/txs/block/' + block + '/' + index);
    }

    getBitcoinCashTransactionsByBlockIndex(network, block, index, limit) {

        return this.getRequest('/bc/bch/' + network + '/txs/block/' + block + '?index=' + index + '&limit=' + limit);
    }

    getBitcoinCashUnconfirmedTransactions(network) {

        return this.getRequest('/bc/bch/' + network + '/txs');
    }

    bitcoinCashTransactionTrace(network, txs) {

        return this.postRequest('/bc/bch/' + network + '/txs/trace', {
            txs: txs
        });
    }

    getBitcoinCashLatestTransactions(network, limit = 50) {

        return this.getRequest('/bc/bch/' + network + '/txs/latest?limit=' + limit);
    }

    getBitcoinCashTransactionsHistory(network, txsIncluded = true, index = 0, limit = 50) {

        return this.getRequest('/bc/bch/' + network + '/txs/history?txs-included=' + txsIncluded + '&index=' + index + '&limit=' + limit);
    }

    createBitcoinCashTransaction(network, inputs, outputs, fee) {

        return this.postRequest('/bc/bch/' + network + '/txs/new', {
            inputs: inputs,
            outputs: outputs,
            fee: fee
        });
    }

    sendBitcoinCashTransaction(network, toSend) {

        return this.postRequest('/bc/bch/' + network + '/txs/send', {
            toSend: toSend
        });
    }

    decodeRawBitcoinCashTransaction(network, txHex) {

        return this.postRequest('/bc/bch/' + network + '/txs/decode', {
            txHex: txHex
        });
    }

    bitcoinCashCreatePayment(network, from, to, callbackURL, wallet, password) {

        return this.postRequest('/bc/bch/' + network + '/payments', {
            from: from,
            to: to,
            callback: callbackURL,
            wallet: wallet,
            password: password
        });
    }

    bitcoinCashListPayment(network) {

        return this.getRequest('/bc/bch/' + network + '/payments');
    }

    bitcoinCashDeletePayment(network, paymentID) {

        return this.deleteRequest('/bc/bch/' + network + '/payments/' + paymentID);
    }

    bitcoinCashCreateUnconfirmedTransactionWebHook(network, callbackURL) {

        return this.postRequest('/bc/bch/' + network + '/hooks', {
            event: 'UNCONFIRMED_TX',
            url: callbackURL
        });
    }

    bitcoinCashCreateNewBlockWebHook(network, callbackURL) {

        return this.postRequest('/bc/bch/' + network + '/hooks', {
            event: 'NEW_BLOCK',
            url: callbackURL
        });
    }

    bitcoinCashCreateConfirmedTransactionWebHook(network, callbackURL, transaction, confirmations) {

        return this.postRequest('/bc/bch/' + network + '/hooks', {
            event: 'CONFIRMED_TX',
            url: callbackURL,
            transaction: transaction,
            confirmations: confirmations
        });
    }

    bitcoinCashCreateAddressTransactionWebHook(network, callbackURL, address) {

        return this.postRequest('/bc/bch/' + network + '/hooks', {
            event: 'ADDRESS',
            url: callbackURL,
            address: address
        });
    }

    listAllBitcoinCashHooks(network) {

        return this.getRequest('/bc/bch/' + network + '/hooks');
    }

    deleteBitcoinCashWebHook(network, webhookID) {

        return this.deleteRequest('/bc/bch/' + network + '/hooks/' + webhookID);
    }
}

module.exports = CryptoAPIs;