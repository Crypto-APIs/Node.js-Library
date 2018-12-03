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

-   `skip` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

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

-   `skip` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

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

-   `skip` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

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
-   `limit` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

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
-   `limit` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

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

-   `skip` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

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
-   `skip` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Offset results. Default value is 0
-   `limit` (optional) **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit results. Default limit is 100

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

## License

MIT