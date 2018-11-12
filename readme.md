# Cryptoapis.io

[CryptoAPIs](https://cryptoapis.io/) SDK for all Exchanges endpoints. You can get API credentials [here](https://dashboard.cryptoapis.io/register).

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

const email = 'your email';
const password = 'your password';

var caClient = new CryptoApis(email, password);

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

-   `email` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Your email
-   `password` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Your password

### getAllExchanges

Get a detailed list of all supported exchanges provided by CryptoAPIs.

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
caClient.getAllExchanges().then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getAllAssets

Get detailed list of all associated assets.

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
caClient.getAllAssets().then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### getAllSymbols

Get a detailed list of all symbol mappings.

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
caClient.getAllSymbols().then(function(result) {
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
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
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
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
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
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
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

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
caClient.getOHLCVLatestData('5b45b055401814000123ebf7', '1day').then(function(result) {
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
-   `timePeriodStart` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))?** Time period start
-   `timePeriodEnd` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))?** Time period end

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
caClient.getOHLCVHistoricalData('5b1ea92e584bf50020130612', '1day', 1514764800, 1546300800).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### tradesGetLatestData

Get latest trades from all symbols up to 1 hour ago

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
caClient.tradesGetLatestData().then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```

### tradesGetHistoricalData

Get history transactions from specific symbol, returned in time ascending order. If no start & end time is defined, your data results will be provided 24 hours back, by default.

#### Parameters

-   `symbol_id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Symbol identifier used to filter response.
-   `timeStart` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))?** Time start
-   `timeEnd` **([Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))?** Time end

#### Example

```js
const CryptoApis = require('cryptoapis.io');
const email = 'your email';
const password = 'your password';
var caClient = new CryptoApis(email, password);
caClient.tradesGetHistoricalData('5b45b055401814000123ebf7', 1542955177, 1556355177).then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
```