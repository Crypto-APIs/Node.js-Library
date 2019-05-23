# Cryptoapis.io

[CryptoAPIs](https://cryptoapis.io/) SDK for all Exchanges, Bitcoin and Ethereum endpoints. You can get API key [here](https://dashboard.cryptoapis.io/register).

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
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 50

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
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
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
-   `fee` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** (see example below)
-   `wifs` **[Array](ttps://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of private ECDSA keys of the addresses (see example below)

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
var fee = {
    address: "mmskWH7hG9CJNzb16JaVFJyWdgAwcVEAkz", //optional
    value: 0.00023141
};
var wifs = [
    "cUGddnJmuzfzpWXNwt1SRnQ8GMqZdQ1vg8BtwjG8f275pvExPzaX", 
    "cSEjySAREyai8eQhgoqixzmxCeSP8QtbwHxptL8ijofg68ZMjoud",
    "cV2u6dqfiQthWfPixJ7ucFW5Tza1ubLr6ipM35vSTy9xGEKbCbaJ"
];

caClient.createBitcoinTransaction('testnet', inputs, outputs, fee, wifs).then(function(result) {
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

### getEthereumInfo

General information about Ethereum blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumInfo('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumBlock

Information for particular block in the blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `block` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Block height or block hash

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumBlock('mainnet', 6873814).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumLatestBlock

Latest Block method gives you detail information for the latest block in the blockchain

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumLatestBlock('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumAddressInfo

Get address information

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Ethereum address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumAddressInfo('ropsten', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumAddressTransactions

Returns all transactions specified by the query params: index and limit.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Ethereum address
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Start from. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumAddressTransactions('ropsten', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11', 0, 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateEthereumAddress

Generate private-public key-pairs along with an associated public address.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateEthereumAddress('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateEthereumAccount

Generate private-public key-pairs along with an associated public address encoded in a keyfile.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Password

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateEthereumAccount('mainnet', 'kl423jkls$3kl').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumTransaction

Returns detailed information about a given transaction based on its hash.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `txHash` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction hash

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumTransaction('mainnet', '0x52afade154e72b3f9059f9a0330bd8f9c9b6ccf73f9a6ef75fa6814bf941ceae').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumTransactionsByBlock

Get ethereum transactions by block number

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `block` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Block number
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Start from. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumTransactionsByBlock('mainnet', 6878377, 0, 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumTransactionByIndexInBlock

Returns detailed information about a given transaction based on its index and block.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `block` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Block height or block hash
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index of the transaction in block

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumTransactionByIndexInBlock('mainnet', 6878377, 0).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createEthereumTransaction

Create new transaction using keystore file stored on our server. In order to use this endpoint you should have an account (keystore file) stored on our servers.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `from` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input address
-   `to` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Output address
-   `gasPrice` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas price
-   `gasLimit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas limit
-   `value` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Value to transfer (in Ether)
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Account password

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.createEthereumTransaction('ropsten', '0xc56b7f5264eb24b6b2bf2eb59184c521f0770d52', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11', 21000000000, 21000, 1.12, 'kl423jkls$3kl').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createEthereumTransactionWithPrivateKey

Create new transaction for address which is not hold on Crypto APIs servers.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `from` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input address
-   `to` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Output address
-   `gasPrice` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas price
-   `gasLimit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas limit
-   `value` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Value to transfer (in Ether)
-   `privateKey` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Private key

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.createEthereumTransactionWithPrivateKey('ropsten', '0xc56b7f5264eb24b6b2bf2eb59184c521f0770d52', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11', 21000000000, 21000, 1.12, '0x17de216dff24b36c35af535c7d4d9d36f57326f3ee8aaf7fd373715c27a15b7e').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### sendEthereumTransaction

Send transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `from` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input address
-   `to` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Output address
-   `value` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Value to transfer (in Ether)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.sendEthereumTransaction('ropsten', '0xc56b7f5264eb24b6b2bf2eb59184c521f0770d52', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11', 1.12).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### pushEthereumTransaction

Push transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `signedTx` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Hex-encoded raw representation of your transaction

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var signedTx = '0xf86a22827d00831e8480941b85a43e2e7f52e766ddfdfa2b901c42cb1201be8801b27f33b807c0008029a084ccbf02b27e0842fb1eda7a187a5589c3759be0e969e0ca989dc469a5e5e394a02e111e1156b197f1de4c1d9ba4af26e50665ea6d617d05b3e4047da12b915e69';
caClient.pushEthereumTransaction('ropsten', signedTx).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### estimateEthereumTransactionGas

Estimate Transaction Gas

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `from` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input address
-   `to` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Output address
-   `value` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Value to transfer (in Ether)
-   `data` (optional) **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Optional data. However, if data is added it should be a valid hexadecimal number otherwise an error will be returned

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var data = '24224747A80F225FD841E7AB2806A2FDF78525B58C1BC1F5D5A5D3943B4214B6C350CE0D973CAD81BD7A6E57048A487939D7CD6373BF8C9F3ADB6328f7';
caClient.estimateEthereumTransactionGas('ropsten', '0x7857af2143cb06ddc1dab5d7844c9402e89717cb', '0xc595B20EEC3d35E8f993d79262669F3ADb6328f7', 0.12, data).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### estimateEthereumSmartContractGas

Estimate Gas Smart Contract

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.estimateEthereumSmartContractGas('ropsten').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deployEthereumSmartContract

Deploy Smart Contract

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `privateKey` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Private key
-   `from` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input address
-   `gasPrice` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas price
-   `gasLimit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas limit
-   `byteCode` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Contract bytecode - compiled to binary solidity code

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
var privateKey = '4f75aff19dd7acbf7c4d5d6f736176a3fe2db1ec9b60cc11d30dc3c343520ed1';
var byteCode = '0x60806040523480156200001157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040805190810160405280600481526020017f4d464b54000000000000000000000000000000000000000000000000000000008fffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116b457600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373fffff';
caClient.deployEthereumSmartContract('rinkeby', privateKey, '0xe7cc96ba0562dfba61a55c8dd2e162a30942f402', 21000000000, 2100000, byteCode).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getEthereumAddressTokenBalance

Get Token Balance

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Ethereum address
-   `contract` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Contract address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getEthereumAddressTokenBalance('rinkeby', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11', '0xe7d553c3aab5943ec097d60535fd06f1b75db43e').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumTransferTokens

Transfer Tokens. You must use the private key or password (if it is an account stored on our servers)

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `fromAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** From address
-   `toAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** To address
-   `contract` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Contract address
-   `gasPrice` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas price
-   `gasLimit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Gas limit
-   `token` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The amount of tokens you would like to transfer
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Account password. Pass null if you use privateKey
-   `privateKey` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Private key

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumTransferTokens('rinkeby', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11', '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11', '0xe7d553c3aab5943ec097d60535fd06f1b75db43e', 11500000000, 60000, 115, null, '0xeb38783ad75d8081fb9105baee6ac9413c4abd732ef889116714f271cde6aed').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumCreatePayment

Create Payment Forwarding. You must use the private key or password (if it is an account stored on our servers)

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `fromAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** From address
-   `toAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** To address
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Account password. Pass null if you use privateKey
-   `privateKey` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Private key

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumCreatePayment('rinkeby', '0x195831d0fa4888c3fd577110d23ee464265c551a', '0x12b1883c01377f45ee5d7448a32b5ac1709af076', 'your callback url', null, '0x17de216dff24b36c35af535c7d4d9d36f57326f3ee8aaf7fd373715c27a15b7e').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumDeletePayment

Delete Payment Forwarding

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `uuid` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The uuid of the payment

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumDeletePayment('rinkeby', 'a2e2498a-a8e5-40a0-adb4-4b4b736c233c').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumListPayment

List of Forward Payments By Users

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumListPayment('rinkeby').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumListPaymentHistory

List of Past Forward Payments By Users

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumListPaymentHistory('rinkeby').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumCreateUnconfirmedTransactionWebHook

Create WebHook triggered for every pending transaction in the Ethereum Blockchain before it's confirmed in a block, basically, for every unconfirmed transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumCreateUnconfirmedTransactionWebHook('ropsten', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumCreateConfirmedTransactionWebHook

Create WebHook triggered for every new transaction making it into a new block

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `transaction` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction hash
-   `confirmations` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Confirmations

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumCreateConfirmedTransactionWebHook('mainnet', 'your callback url', '0x87da27245076441baf7bcc6e93d328d80d11297a3a247a1ce3019168be3b7a36', 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumCreateNewBlockWebHook

Create WebHook triggered for every new block

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumCreateNewBlockWebHook('rinkeby', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumCreateAddressTransactionWebHook

Create Ethereum Address Transaction WebHook

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Ethereum address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumCreateAddressTransactionWebHook('ropsten', 'your callback url', '0xe816c453a99b12bb65ea55db22a6fe70f63c2c7a').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumListAllWebHooks

Provides a list with all WebHooks of current user

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumListAllWebHooks('ropsten').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### ethereumDeleteWebHook

Delete WebHook

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet, ropsten or rinkeby)
-   `webhookID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** WebHook ID

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.ethereumDeleteWebHook('ropsten', '75012af1-12b6-4472-98de-a7fb5d66dba9').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinInfo

General information about a blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinInfo('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinBlock

Block endpoint gives you detail information for particular block in the blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `block` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Block height or block hash

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinBlock('mainnet', 546903).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinLatestBlock

Latest Block Endpoint gives you detail information for the latest block in the blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinLatestBlock('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinAddressInfo

The default Address Endpoint strikes a general information about addresses.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Litecoin address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinAddressInfo('mainnet', '1DBrYbe5U7LGDcHA5tiLCxivZ7JZAGqGhJ').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateLitecoinAddress

The Generate Address endpoint allows you to generate private-public key-pairs along with an associated public address.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateLitecoinAddress('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinAddressTransactions

The Address Transactions Endpoint returns all information available about a particular address, including an array of complete transactions.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Litecoin address
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinAddressTransactions('mainnet', '3DrVotri9Rq2xcHqCMKpVUoyU6pvoWRtY3', 0, 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createLitecoinWallet

Create Litecoin Wallet

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
caClient.createLitecoinWallet('mainnet', 'myWallet', addresses).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createLitecoinHDWallet

Create Litecoin HD Wallet

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
caClient.createLitecoinHDWallet('mainnet', 'myHDWallet', 5, 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### listLitecoinWallets

List Wallets

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `hd` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** False for normal wallets, true for HD wallets

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.listLitecoinWallets('mainnet', true).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinWallet

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
caClient.getLitecoinWallet('mainnet', 'myHDWallet', true).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### addAddressToLitecoinWallet

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
caClient.addAddressToLitecoinWallet('mainnet', 'myWallet', ['1Eeu3eC2b35LWtjXeRMJMSfrDnfDEjNwW6']).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateAddressInLitecoinWallet

Generate Address in Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateAddressInLitecoinWallet('mainnet', 'myWallet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateAddressInLitecoinHDWallet

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
caClient.generateAddressInLitecoinHDWallet('mainnet', 'myHDWallet', 2, 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteAddressFromLitecoinWallet

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
caClient.deleteAddressFromLitecoinWallet('mainnet', 'myWallet', '1GdnJh1r3xWsst7o7JXykgGD13AF4NSmh3').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteLitecoinWallet

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
caClient.deleteLitecoinWallet('mainnet', 'myWallet', false).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinTransaction

Returns detailed information about a given transaction based on its id.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `transactionID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction ID

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinTransaction('mainnet', '54287345c01d64a3365166b380adf04e738ec52935f2751aead7ae60ff4fcb21').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinTransactionByBlockIndex

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
caClient.getLitecoinTransactionByBlockIndex('mainnet', '0000000000000000002523785a5a3a0f4a04536baf589f9c5fbf2b6273daf62b', 3).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinTransactionsByBlockIndex

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
caClient.getLitecoinTransactionsByBlockIndex('mainnet', 553394, 0, 3).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinUnconfirmedTransactions

Returns an array of the latest transactions relayed by nodes in a blockchain that haven’t been included in any blocks.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinUnconfirmedTransactions('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinTransactionTrace

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
caClient.litecoinTransactionTrace('mainnet', txs).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinLatestTransactions

Returns an array of the latest transactions relayed by nodes in a blockchain that could be mined or not.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `limit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinLatestTransactions('mainnet', 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getLitecoinTransactionsHistory

Returns an array of the latest transactions. By default it is for last 24 hours

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `txsIncluded` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether transactions to be included in response. Default true
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getLitecoinTransactionsHistory('mainnet', true, 0, 5).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createLitecoinTransaction

Create transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `inputs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Array of objects (see example below)
-   `outputs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Array of objects (see example below)
-   `fee` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** (see example below)
-   `wifs` **[Array](ttps://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of private ECDSA keys of the addresses (see example below)

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
var fee = {
    address: "mmskWH7hG9CJNzb16JaVFJyWdgAwcVEAkz", //optional
    value: 0.00023141
};
var wifs = [
    "cUGddnJmuzfzpWXNwt1SRnQ8GMqZdQ1vg8BtwjG8f275pvExPzaX", 
    "cSEjySAREyai8eQhgoqixzmxCeSP8QtbwHxptL8ijofg68ZMjoud",
    "cV2u6dqfiQthWfPixJ7ucFW5Tza1ubLr6ipM35vSTy9xGEKbCbaJ"
];

caClient.createLitecoinTransaction('testnet', inputs, outputs, fee, wifs).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### sendLitecoinTransaction

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
caClient.sendLitecoinTransaction('testnet', toSend).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### decodeRawLitecoinTransaction

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
caClient.decodeRawLitecoinTransaction('mainnet', txHex).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinCreatePayment

Create Payment

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `fromAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Destination litecoin address
-   `toAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Target litecoin address
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet created by current
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet password

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.litecoinCreatePayment('mainnet', '12CHjjowV5koCpyMXHeYFhMQzd4KE6JUdF', '1DoAHYHRd72RBbScbr678vXhAwHPPfhY34', 'your callback url', 'myHDWallet', 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinListPayment

To list your currently active payment forwarding addresses

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.litecoinListPayment('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinDeletePayment

Delete Payment

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `paymentID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Generated UUID when payment forwarding have been created

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.litecoinDeletePayment('mainnet', '1f3e4771-ce6c-4b25-805b-cc27a38e2603').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinCreateUnconfirmedTransactionWebHook

Triggered for every new transaction CryptoAPIs receives before it's confirmed in a block, basically, for every unconfirmed transaction.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.litecoinCreateUnconfirmedTransactionWebHook('mainnet', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinCreateNewBlockWebHook

Triggered for every new block.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.litecoinCreateNewBlockWebHook('mainnet', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinCreateConfirmedTransactionWebHook

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
caClient.litecoinCreateConfirmedTransactionWebHook('mainnet', 'your callback url', '56ee588e6ac4df324d5e1cdd0fa7d58a479295bad71f3c62865f1c302e0ca2a6', 5).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### litecoinCreateAddressTransactionWebHook

Create Address Transaction WebHook

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Litecoin address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.litecoinCreateAddressTransactionWebHook('mainnet', 'your callback url', '1GdnJh1r3xWsst7o7JXykgGD13AF4NSmh3').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### listAllLitecoinHooks

List all web hooks that you have created.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.listAllLitecoinHooks('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteLitecoinWebHook

Delete a WebHook by WebHook ID

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `webhookID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** WebHook ID

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.deleteLitecoinWebHook('mainnet', '232c9f47-ff47-401c-9681-9d854e497c8a').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```
### getBitcoinCashInfo

General information about a blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashInfo('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashBlock

Block endpoint gives you detail information for particular block in the blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `block` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Block height or block hash

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashBlock('mainnet', 546903).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashLatestBlock

Latest Block Endpoint gives you detail information for the latest block in the blockchain.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashLatestBlock('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashAddressInfo

The default Address Endpoint strikes a general information about addresses.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** BitcoinCash address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashAddressInfo('mainnet', '1DBrYbe5U7LGDcHA5tiLCxivZ7JZAGqGhJ').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateBitcoinCashAddress

The Generate Address endpoint allows you to generate private-public key-pairs along with an associated public address.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateBitcoinCashAddress('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashAddressTransactions

The Address Transactions Endpoint returns all information available about a particular address, including an array of complete transactions.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** BitcoinCash address
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashAddressTransactions('mainnet', '3DrVotri9Rq2xcHqCMKpVUoyU6pvoWRtY3', 0, 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createBitcoinCashWallet

Create BitcoinCash Wallet

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
caClient.createBitcoinCashWallet('mainnet', 'myWallet', addresses).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createBitcoinCashHDWallet

Create BitcoinCash HD Wallet

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
caClient.createBitcoinCashHDWallet('mainnet', 'myHDWallet', 5, 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### listBitcoinCashWallets

List Wallets

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `hd` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** False for normal wallets, true for HD wallets

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.listBitcoinCashWallets('mainnet', true).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashWallet

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
caClient.getBitcoinCashWallet('mainnet', 'myHDWallet', true).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### addAddressToBitcoinCashWallet

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
caClient.addAddressToBitcoinCashWallet('mainnet', 'myWallet', ['1Eeu3eC2b35LWtjXeRMJMSfrDnfDEjNwW6']).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateAddressInBitcoinCashWallet

Generate Address in Wallet

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet name

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.generateAddressInBitcoinCashWallet('mainnet', 'myWallet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### generateAddressInBitcoinCashHDWallet

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
caClient.generateAddressInBitcoinCashHDWallet('mainnet', 'myHDWallet', 2, 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteAddressFromBitcoinCashWallet

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
caClient.deleteAddressFromBitcoinCashWallet('mainnet', 'myWallet', '1GdnJh1r3xWsst7o7JXykgGD13AF4NSmh3').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteBitcoinCashWallet

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
caClient.deleteBitcoinCashWallet('mainnet', 'myWallet', false).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashTransaction

Returns detailed information about a given transaction based on its id.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `transactionID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Transaction ID

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashTransaction('mainnet', '54287345c01d64a3365166b380adf04e738ec52935f2751aead7ae60ff4fcb21').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashTransactionByBlockIndex

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
caClient.getBitcoinCashTransactionByBlockIndex('mainnet', '0000000000000000002523785a5a3a0f4a04536baf589f9c5fbf2b6273daf62b', 3).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashTransactionsByBlockIndex

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
caClient.getBitcoinCashTransactionsByBlockIndex('mainnet', 553394, 0, 3).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashUnconfirmedTransactions

Returns an array of the latest transactions relayed by nodes in a blockchain that haven’t been included in any blocks.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashUnconfirmedTransactions('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashTransactionTrace

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
caClient.bitcoinCashTransactionTrace('mainnet', txs).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashLatestTransactions

Returns an array of the latest transactions relayed by nodes in a blockchain that could be mined or not.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `limit` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashLatestTransactions('mainnet', 10).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getBitcoinCashTransactionsHistory

Returns an array of the latest transactions. By default it is for last 24 hours

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `txsIncluded` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether transactions to be included in response. Default true
-   `index` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit. Default limit is 50

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.getBitcoinCashTransactionsHistory('mainnet', true, 0, 5).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### createBitcoinCashTransaction

Create transaction

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `inputs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Array of objects (see example below)
-   `outputs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Array of objects (see example below)
-   `fee` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** (see example below)
-   `wifs` **[Array](ttps://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Array of private ECDSA keys of the addresses (see example below)

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
var fee = {
    address: "mmskWH7hG9CJNzb16JaVFJyWdgAwcVEAkz", //optional
    value: 0.00023141
};
var wifs = [
    "cUGddnJmuzfzpWXNwt1SRnQ8GMqZdQ1vg8BtwjG8f275pvExPzaX", 
    "cSEjySAREyai8eQhgoqixzmxCeSP8QtbwHxptL8ijofg68ZMjoud",
    "cV2u6dqfiQthWfPixJ7ucFW5Tza1ubLr6ipM35vSTy9xGEKbCbaJ"
];

caClient.createBitcoinCashTransaction('testnet', inputs, outputs, fee, wifs).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### sendBitcoinCashTransaction

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
caClient.sendBitcoinCashTransaction('testnet', toSend).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### decodeRawBitcoinCashTransaction

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
caClient.decodeRawBitcoinCashTransaction('mainnet', txHex).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashCreatePayment

Create Payment

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `fromAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Destination bitcoinCash address
-   `toAddress` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Target bitcoinCash address
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `walletName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet created by current
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Wallet password

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCashCreatePayment('mainnet', '12CHjjowV5koCpyMXHeYFhMQzd4KE6JUdF', '1DoAHYHRd72RBbScbr678vXhAwHPPfhY34', 'your callback url', 'myHDWallet', 'jr9023kes%kj').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashListPayment

To list your currently active payment forwarding addresses

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCashListPayment('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashDeletePayment

Delete Payment

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `paymentID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Generated UUID when payment forwarding have been created

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCashDeletePayment('mainnet', '1f3e4771-ce6c-4b25-805b-cc27a38e2603').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashCreateUnconfirmedTransactionWebHook

Triggered for every new transaction CryptoAPIs receives before it's confirmed in a block, basically, for every unconfirmed transaction.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCashCreateUnconfirmedTransactionWebHook('mainnet', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashCreateNewBlockWebHook

Triggered for every new block.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCashCreateNewBlockWebHook('mainnet', 'your callback url').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashCreateConfirmedTransactionWebHook

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
caClient.bitcoinCashCreateConfirmedTransactionWebHook('mainnet', 'your callback url', '56ee588e6ac4df324d5e1cdd0fa7d58a479295bad71f3c62865f1c302e0ca2a6', 5).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### bitcoinCashCreateAddressTransactionWebHook

Create Address Transaction WebHook

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `callbackURL` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Callback URL
-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** BitcoinCash address

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.bitcoinCashCreateAddressTransactionWebHook('mainnet', 'your callback url', '1GdnJh1r3xWsst7o7JXykgGD13AF4NSmh3').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### listAllBitcoinCashHooks

List all web hooks that you have created.

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.listAllBitcoinCashHooks('mainnet').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### deleteBitcoinCashWebHook

Delete a WebHook by WebHook ID

#### Parameters

-   `network` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Network name (mainnet or testnet)
-   `webhookID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** WebHook ID

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const apiKey = 'your API key';
var caClient = new CryptoApis(apiKey);
caClient.deleteBitcoinCashWebHook('mainnet', '232c9f47-ff47-401c-9681-9d854e497c8a').then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

## License

MIT