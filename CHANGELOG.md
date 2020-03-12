## 2020-03-12, Version 4.4.0

#### Notable changes:
* README update - added all method arguments

#### Bugfixes:
* Added missing implementation for `listExchangesBySupportingAssets`, `listExchangesBySupportingPairs` and `listAllSymbolsSupportedInExchange`

#### Removed:
* Deprecated doc

## 2020-03-10, Version 4.3.0

#### Added:
* Zilliqa (ZIL) - new blockchain (under development)
    * `mainnet` only, `testnet` coming soon
    * exposed endpoints so far:
        * caClient.BC.ZIL.blockchain.getInfo
        * caClient.BC.ZIL.blockchain.getBlockByHash
        * caClient.BC.ZIL.blockchain.getBlockByHeight
        * caClient.BC.ZIL.blockchain.getLatestBlock
        * caClient.BC.ZIL.address.getInfo
        * caClient.BC.ZIL.address.getTransactionsByAddress
        * caClient.BC.ZIL.address.generateAddress
        * caClient.BC.ZIL.transaction.getTransaction
        * caClient.BC.ZIL.transaction.getTransactionsByBlock
        * caClient.BC.ZIL.transaction.getTransactionByBlockNumber
        * caClient.BC.ZIL.transaction.getTransactionByBlockHash
* XXX (BTC / BCH / LTC / DASH / DOGE)
    * caClient.BC.XXX.address.getUnconfirmedByAddress
    * caClient.BC.XXX.transaction.getTransactionSizeForHDWallet

## 2019-12-27, Version 4.2.2

#### Notable changes:
* README update

## 2019-12-20, Version 4.2.1

#### Notable changes:
* Added `getTransactionSize` method for BTC based

## 2019-12-20, Version 4.2.0

#### Notable changes:
* Added Omni Layer methods to BTC
    - getNodeInfo
    - getAddress
    - getAddressTransactions
    - createTransactions
    - signTransaction
    - sendTransaction
    - newTransaction
    - createHDWalletTransaction
    - getTransaction
    - getTransactionIndexByBlock
    - getTransactionsPropertyId
    - getUnconfirmedTransactions
* Added Omni Webhooks to BTC
    - createOmniConfirmedTransactionWebHook (OMNI_CONFIRMED_TX)
    - createOmniTransactionConfirmationsWebHook (OMNI_TRANSACTION_CONFIRMATIONS)
    - createOmniTokenWebHook (OMNI_TOKEN)
* README reworked

## 2019-12-20, Version 4.1.1

#### Breaking changes:
* createTokenWebHook method params updated

## 2019-12-06, Version 4.1.0

#### Notable changes:
* All methods are now up to date with the [documentation](https://docs.cryptoapis.io/)

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
