# Cryptoapis.io

[CryptoAPIs](https://cryptoapis.io/) SDK for all Exchanges endpoints. You can get API key [here](https://dashboard.cryptoapis.io/register).

## Table of Contents

-   [Install](#install)
-   [How to use](#howtouse)
-   [Functions](#functions)
-   [License](#license)

## Install

```sh
$ npm install cryptoapis.io
```

## How to use

```js
const CryptoApis = require('cryptoapis.io');

const apiKey = 'your API key';

var caClient = new CryptoApis(apiKey);

caClient.getAllExchanges().then(function(result) {

    console.log(result);
}, function(error) {
    console.log(error);
});
```

Check out [CryptoAPIs documentation](https://docs.cryptoapis.io) for more information.

## Functions

### constructor

#### Parameters

-   `apiKey` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Your API key

### getAllExchanges

Get a detailed list of all supported exchanges provided by CryptoAPIs.

#### Parameters

-   `skip` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var skip = 0;
var limit = 20;
var caClient = new CryptoApis(apiKey);
caClient.getAllExchanges(skip, limit).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getAllAssets

Get detailed list of all associated assets.

#### Parameters

-   `skip` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var skip = 0;
var limit = 5;
var caClient = new CryptoApis(apiKey);
caClient.getAllAssets(skip, limit).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getAllSymbols

Get a detailed list of all symbol mappings.

#### Parameters

-   `skip` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var skip = 0;
var limit = 10;
var caClient = new CryptoApis(apiKey);
caClient.getAllSymbols(skip, limit).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getSpecificRate

Get exchange rates between pair of requested assets.

#### Parameters

-   `baseAsset` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Base asset identifier
-   `quoteAsset` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Quote asset identifier

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getSpecificRate('BTC', 'USD').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getAllCurrentRates

Get the current exchange rate between requested asset and all other assets.

#### Parameters

-   `baseAsset` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Base asset identifier

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getAllCurrentRates('BTC').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getOHLCVPeriods

Get full list of time periods available for requesting OHLCV data.

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getOHLCVPeriods().then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getOHLCVLatestData

Get OHLCV latest time-series data for requested symbol and period, returned in time descending order.

#### Parameters

-   `symbol` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Symbol identifier used to filter response.
-   `period` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Period
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getOHLCVLatestData('5bfc329f9c40a100014dc5a7', '1day', 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getOHLCVHistoricalData

Get OHLCV time-series data for requested symbol and period, returned in time ascending order.

#### Parameters

-   `symbol` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Symbol identifier used to filter response.
-   `period` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Period
-   `timePeriodStart` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Time period start
-   `timePeriodEnd` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Time period end
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getOHLCVHistoricalData('5bfc329f9c40a100014dc5a7', '1day', 1542955177, 1556355177, 2).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### tradesGetLatestData

Get latest trades from all symbols up to 1 hour ago

#### Parameters

-   `skip` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.tradesGetLatestData(0, 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### tradesGetLatestDataBySymbol

Get latest trades from a specific symbol without time limitation

#### Parameters

-   `symbol` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Symbol identifier used to filter response.

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.tradesGetLatestDataBySymbol('5bfc329f9c40a100014dc5a7').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### tradesGetHistoricalData

Get history transactions from specific symbol, returned in time ascending order. If no start & end time is defined, your data results will be provided 24 hours back, by default.

#### Parameters

-   `symbol_id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Symbol identifier used to filter response.
-   `timeStart` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Time start
-   `timeEnd` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Time end
-   `skip` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.tradesGetHistoricalData('5bfc329f9c40a100014dc5a7', 1542955177, 1556355177, 0, 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### quotesGetLatestData

Get latest quote updates for up to 1 hour ago.

#### Parameters

-   `skip` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.quotesGetLatestData().then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### quotesGetHistoricalData

Get historical quote updates within requested time range, returned in time ascending order.

#### Parameters

-   `symbol_id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Symbol identifier used to filter response.
-   `timeStart` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Time start
-   `timeEnd` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Time end
-   `skip` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.quotesGetHistoricalData('5bfc329f9c40a100014dc5a7', 1532955177, 1556355177, 0, 50).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinInfo

General information about a blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinInfo('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinBlock

Block endpoint gives you detail information for particular block in the blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `block` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Block height or block hash

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinBlock('mainnet', 546903).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinLatestBlock

Latest Block Endpoint gives you detail information for the latest block in the blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinLatestBlock('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinAddressInfo

The default Address Endpoint strikes a general information about addresses.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Bitcoin address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinAddressInfo('mainnet', '1DBrYbe5U7LGDcHA5tiLCxivZ7JZAGqGhJ').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateBitcoinAddress

The Generate Address endpoint allows you to generate private-public key-pairs along with an associated public address.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateBitcoinAddress('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinAddressTransactions

The Address Transactions Endpoint returns all information available about a particular address, including an array of complete transactions.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Bitcoin address
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number** Limit results. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinAddressTransactions('mainnet', '3DrVotri9Rq2xcHqCMKpVUoyU6pvoWRtY3', 0, 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createBitcoinWallet

Create Bitcoin Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name
-   `addresses` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of addresses that will be added to wallet

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var addresses = ["1MfyBywPTSj9aAPr8cccCTcch71fd4vkDA", "1B5WsYR8m4axbmEMMifveDL2gtZjtpaFr5", "1KRYkrh3dAkeBWPwxDZhrz9u8xf5NRK9UH"];
caClient.createBitcoinWallet('mainnet', 'myWallet', addresses).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createBitcoinHDWallet

Create Bitcoin HD Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name
-   `addressCount` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of addresses that should be generated in new wallet
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet password

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.createBitcoinHDWallet('mainnet', 'myHDWallet', 5, 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### listBitcoinWallets

List Wallets

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `hd` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** False for normal wallets, true for HD wallets

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.listBitcoinWallets('mainnet', true).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinWallet

Get Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name
-   `hd` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** False for normal wallets, true for HD wallets

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinWallet('mainnet', 'myHDWallet', true).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### addAddressToBitcoinWallet

Add Addresses to Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name
-   `addresses` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of addresses that will be added to wallet

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.addAddressToBitcoinWallet('mainnet', 'myWallet', ['1Eeu3eC2b35LWtjXeRMJMSfrDnfDEjNwW6']).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateAddressInBitcoinWallet

Generate Address in Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateAddressInBitcoinWallet('mainnet', 'myWallet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateAddressInBitcoinHDWallet

Generate Address in HD Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name
-   `addressCount` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of addresses that should be generated
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet password

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateAddressInBitcoinHDWallet('mainnet', 'myHDWallet', 2, 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteAddressFromBitcoinWallet

Remove Addresses from Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Address which should be deleted

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.deleteAddressFromBitcoinWallet('mainnet', 'myWallet', '1GdnJh1r3xWsst7o7JXykgGD13AF4NSmh3').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteBitcoinWallet

Delete Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name
-   `hd` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** False for normal wallets, true for HD wallets

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.deleteBitcoinWallet('mainnet', 'myWallet', false).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinTransaction

Returns detailed information about a given transaction based on its id.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `transactionID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction ID

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinTransaction('mainnet', '54287345c01d64a3365166b380adf04e738ec52935f2751aead7ae60ff4fcb21').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinTransactionByBlockIndex

Returns detailed information about a given transaction based on its hash and index of transaction in the block.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `blockHash` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Block hash
-   `index` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index of the transaction in block

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinTransactionByBlockIndex('mainnet', '0000000000000000002523785a5a3a0f4a04536baf589f9c5fbf2b6273daf62b', 3).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinTransactionsByBlockIndex

The Transaction Index Endpoint by Index, Limit and Block Height returns detailed information about transactions for the block height defined, starting from the index defined up to the limit defined.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `blockHeight` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Block height
-   `index` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index - start from
-   `limit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit - up to

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinTransactionsByBlockIndex('mainnet', 553394, 0, 3).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinUnconfirmedTransactions

Returns an array of the latest transactions relayed by nodes in a blockchain that haven’t been included in any blocks.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinUnconfirmedTransactions('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinTransactionTrace

Returns detailed information about a given set of transactions based on theirs hashes.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `transactions` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of transactions

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var txs = ['54287345c01d64a3365166b380adf04e738ec52935f2751aead7ae60ff4fcb21', '4ed3bbc8297b69a002ac7dc5fcf0acf01f6ffd92871c1027061a7eabc1e74623'];
caClient.bitcoinTransactionTrace('mainnet', txs).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinLatestTransactions

Returns an array of the latest transactions relayed by nodes in a blockchain that could be mined or not.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `limit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinLatestTransactions('mainnet', 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinTransactionsHistory

Returns an array of the latest transactions. By default it is for last 24 hours

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `txsIncluded` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether transactions to be included in response. Default true
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinTransactionsHistory('mainnet', true, 0, 5).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createBitcoinTransaction

Create transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `inputs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Array of objects (see example below)
-   `outputs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Array of objects (see example below)
-   `fee` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Transaction fee

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var inputs = [{
    address: "2N4Peeewfgghac69z6evCAmab91oEuWmkgy",
    value: 0.54
}, {
    address: "2MuqsmttygX6RWkxS1MLjDgwJ2DavbG9JPu",
    value: 1.0
}];
var outputs = [{
    address: "2Mx93LzsoPWR8UmoJMBFnCb2KkCGt2Jg8Dd",
    value: 1.54
}];
caClient.createBitcoinTransaction('testnet', inputs, outputs, 0.00001500).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### sendBitcoinTransaction

Send Transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `toSend` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Signed hash

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var toSend = '02000000013f810859c03252a897dc1f5707ed9a3a5234ec4ef0ddafca9d933a0d32375380000000006a4730440220789cf627bc7e84e97dae9e94b97f6a790492511ad0be63afe424953846f9306a02206b99656cc96e58a717d5f47126b2ba49d612d9ef5ffb2d8b707d64d7629a776d0121023cf830a861754675344b72f0ef3654d5d47f156f7800cc6926b10309acf68899ffffffff011ced3200000000001976a914b20ecbedbb8c648e263487d40ab234cecefd34d588ac00000000';
caClient.sendBitcoinTransaction('testnet', toSend).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### decodeRawBitcoinTransaction

Decode Raw Transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `txHex` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Hex of raw transaction

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var txHex = '0200000005c1ab663c05cc557f522d55d42734eb3fe7bfacf3737cba5102233b312b0c95590000000000ffffffffbfd5dc9ac3129f2a9788d0ab2c201861790d66ce147bf6ebe8ee44019b69ed790100000000ffffffff2837839555246cc3f0f9374f73030341d641f3beae71eeafb2461f8ba8daa1d40000000000ffffffffbe23166dca2f0b9a24d9704e5e6ecfe3e57265cda29468e68c19644d24e1f1c70000000000ffffffff41994176b4bb3f00bb128a982b907e0a3b139ac02d90253c61815dea3d16f98d0000000000ffffffff0140420f00000000001976a9141a96349a5025735fe18f3e783098e471edbad83388ac00000000';
caClient.decodeRawBitcoinTransaction('mainnet', txHex).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCreatePayment

Create Payment

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `fromAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Destination bitcoin address
-   `toAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Target bitcoin address
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet created by current
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet password

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCreatePayment('mainnet', '12CHjjowV5koCpyMXHeYFhMQzd4KE6JUdF', '1DoAHYHRd72RBbScbr678vXhAwHPPfhY34', 'your callback url', 'myHDWallet', 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinListPayment

To list your currently active payment forwarding addresses

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinListPayment('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinDeletePayment

Delete Payment

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `paymentID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Generated UUID when payment forwarding have been created

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinDeletePayment('mainnet', '1f3e4771-ce6c-4b25-805b-cc27a38e2603').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCreateUnconfirmedTransactionWebHook

Triggered for every new transaction CryptoAPIs receives before it's confirmed in a block, basically, for every unconfirmed transaction.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCreateUnconfirmedTransactionWebHook('mainnet', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCreateNewBlockWebHook

Triggered for every new block.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCreateNewBlockWebHook('mainnet', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCreateConfirmedTransactionWebHook

Create Confirmed Transaction WebHook

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `transaction` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction ID
-   `confirmations` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Confirmations

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCreateConfirmedTransactionWebHook('mainnet', 'your callback url', '56ee588e6ac4df324d5e1cdd0fa7d58a479295bad71f3c62865f1c302e0ca2a6', 5).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCreateAddressTransactionWebHook

Create Address Transaction WebHook

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Bitcoin address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCreateAddressTransactionWebHook('mainnet', 'your callback url', '1GdnJh1r3xWsst7o7JXykgGD13AF4NSmh3').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### listAllBitcoinHooks

List all web hooks that you have created.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.listAllBitcoinHooks('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteBitcoinWebHook

Delete a WebHook by WebHook ID

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `webhookID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** WebHook ID

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.deleteBitcoinWebHook('mainnet', '232c9f47-ff47-401c-9681-9d854e497c8a').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

## License

MIT