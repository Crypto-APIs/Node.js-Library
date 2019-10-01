## 2019-10-01, Version 4.0.0

#### Breaking changes:
* `TR.exchangeAccounts` methods now accept camelCase parameters instead of snake_case 

## 2019-09-27, Version 3.2.0

#### Notable changes:
* Transaction refund added

## 2019-09-24, Version 3.1.0

#### Notable changes:
* Trading APIs added

## 2019-09-09, Version 3.0.0

#### Breaking changes:
* Optional parameters in methods moved into a separate parameter. Methods who may need revisiting:
  - getAddressTransactions
  - getTransactionIndexByBlock
  - getUnconfirmedTransactions
  - createHDWalletTransaction
  - getInfoMultisig
  - createPaymentForwarding
  - getTokenTransactionsByAddress
  - getAddressTokenTransfers
  - getTransactionsByBlock
  - newTransaction
  - newAllTransaction
  - newTransactionWithPrivateKey
  - newAllTransactionWithPrivateKey
  - estimateTransactionGas
  - getPendingTransactions
  - getQueuedTransactions
  - listAllExchanges
  - listAllAssets
  - getSpecificRate
  - getAllCurrentRates
  - listAllSymbols
  - latestData
  - historicalData
  - getLatestData
  - getLatestDataBySymbol
  - getLatestDataByExchange
  - getLatestDataByAsset
  - getLatestDataByAssetsPair
  - getLatestDataByExchangeAssetsPair
  - tradesGetHistoricalData
  - tradesGetHistoricalDataByExchange
  - tradesGetHistoricalDataByAsset
  - tradesGetHistoricalDataByAssetPair
  - tradesGetHistoricalDataByExchangeAssetPair

#### Notable changes:
* All optional parameters in methods moved into a separate parameter
* `switchAllNetworks` method added to the `BC` class for easier bulk switch of networks

## 2019-08-30, Version 2.1.0

#### Notable changes:
* ETC support added

## 2019-08-28, Version 2.0.1

#### Notable changes:
* Error propagation interrupted fix


## 2019-07-25, Version 2.0.0

This is a rewrite release.

#### Notable changes:
* DASH support added
* Previous implementations of this library will need to adapt their calls to the new structure 
* Network utility methods added to each chain
* Tests updated
