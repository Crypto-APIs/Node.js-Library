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