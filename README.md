# ⚠️ SDK Deprecation Notice

> **Status:** Archived & Deprecated  
> **Effective Date:** 1st April, 2025

---

This SDK has been officially **deprecated** and is no longer actively maintained or updated.

To give you more flexibility, we recommend generating your own SDK using our official **OpenAPI specification**, available for download from the Crypto APIs Developer Portal:

👉 [https://developers.cryptoapis.io/](https://developers.cryptoapis.io/)

---

## 💡 Recommended Approach

You can easily generate SDKs in most major programming languages using tools such as:

- [OpenAPI Generator](https://openapi-generator.tech/)
- [Swagger Codegen](https://swagger.io/tools/swagger-codegen/)

Simply use our OpenAPI JSON to create SDKs tailored to your specific needs.

---

This repository will remain available for reference but is no longer supported.

For questions, please contact us via our official support channels.

---

_Thank you for your understanding and for building with Crypto APIs!_

## Previous version of this doc [here](./README--deprecated.md)

JavaScript SDK for [CryptoAPIs.io](https://cryptoapis.io/)
===========

You can get API key [here](https://dashboard.cryptoapis.io/register).
-----

Docs [here](https://docs.cryptoapis.io/).
-----


## How to install
```sh
$ npm install cryptoapis.io
```
-----
## How to use
```js
const CryptoApis = require('cryptoapis.io');

const apiKey = 'your API key';
const caClient = new CryptoApis(apiKey);

// You can use several instances of the client which can coexist in the same environment

// By default the calls are made to the mainnet for each chain.

// The selected network for each chain at any moment can be checked with the <chain>.getSelectedNetwork() method.
caClient.BC.DOGE.getSelectedNetwork();

// To switch to a different network you need to call the <chain>.switchNetwork method.

// The network can be specified via the respective <chain>.NETWORKS.<network>
caClient.BC.ETH.switchNetwork(caClient.BC.ETH.NETWORKS.ROPSTEN);
caClient.BC.BTC.switchNetwork(caClient.BC.BTC.NETWORKS.TESTNET);
caClient.BC.BCH.switchNetwork(caClient.BC.BCH.NETWORKS.TESTNET);
caClient.BC.LTC.switchNetwork(caClient.BC.LTC.NETWORKS.TESTNET);
caClient.BC.DOGE.switchNetwork(caClient.BC.DOGE.NETWORKS.TESTNET);
caClient.BC.DASH.switchNetwork(caClient.BC.DASH.NETWORKS.TESTNET);

// Or by passing a valid network name for the chain
caClient.BC.ETH.switchNetwork('rinkeby');
```

## Examples (for more examples, you can check out the [tests](./tests))

### Generate new address

```js
caClient.BC.ETH.address.generateAddress()
    .then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      console.error(err);
    });
```
It will print the following:
    
```json
{
  "payload": {
    "address": "0xd1b99ca3971c06af48474aa6606ec885e7aff600",
    "privateKey": "31f5d2a8d3f4a816fb498200423461ec52aefe579c13b807a8140c7a7ecc8448",
    "publicKey": "51767e84342ea3d10faf35676997cf1dbd4d2c0168fe46a4a920c4c1f557bc8851445ff17aaba144546e7aac45b1754352d860c617eff441778c4e053178f97b"
  }
}
```

### Usage notes
* `required` arguments (e.g. `getBlockByHeight(blockHeight)` means the correct usage is `getBlockByHeight(567)`
* `one of` arguments (e.g. `transferTokens(fromAddress, toAddress, contract, gasPrice, gasLimit, token, password/privateKey)` means the following are correct usages:
    1. `transferTokens(fromAddress, toAddress, contract, gasPrice, gasLimit, token, password)`
    2. `transferTokens(fromAddress, toAddress, contract, gasPrice, gasLimit, token, privateKey)`
* `optional` arguments are marked with `?` (e.g. `getAddressTransactions(address, ?{?index, ?limit} = {index: 0, limit: 50}` means the following are all correct usages:
    1. `getAddressTransactions(address)`
    2. `getAddressTransactions(address, {index: 1})`
    3. `getAddressTransactions(address, {limit: 10})`
    4. `getAddressTransactions(address, {index: 1, limit: 10})`
and if omitted, the default values are given in `= {index: 0, limit: 50}` meaning `getAddressTransactions(address)` implies `index: 0` and `limit: 50` unless specified otherwise via usages `ii`, `iii`, `iv`

# Blockchain as a Service APIs

## List of all methods available
NOTES: 
* XXX - blockchain (BTC / BCH / LTC / DOGE / DASH / ETH / ETC / ZIL, XRP)
* doc links target BTC / ETH in our documentation to avoid repetition. For other blockchains refer to the corresponding parts in our [documentation](https://docs.cryptoapis.io/)

### BTC / BCH / LTC / DOGE / DASH methods

#### Blockchain methods
* caClient.BC.XXX.blockchain.getInfo() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-blockchain-chain-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHash(blockHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-blockchain-block-hash-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHeight(blockHeight) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-blockchain-block-height-endpoint))
* caClient.BC.XXX.blockchain.getLatestBlock() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-latest-block-endpoint))

#### Addresses methods
* caClient.BC.XXX.address.getInfo(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-info-endpoint))
* (``BTC / BCH / LTC only``) caClient.BC.XXX.address.getInfoMultisig(address, ?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-multisig-info-endpoint))
* caClient.BC.XXX.address.generateAddress() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-generate-address-endpoint))
* caClient.BC.XXX.address.getAddressTransactions(address, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-transactions-endpoint))
* caClient.BC.XXX.address.multipleAddressesInfo(addresses) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-multiple-addresses-info-endpoint))
* caClient.BC.XXX.address.getUnconfirmedByAddress(address, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-unconfirmed-transactions-endpoint))

#### Wallets methods
* caClient.BC.XXX.wallet.createWallet(name, addresses) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-create-wallet-endpoint))
* caClient.BC.XXX.wallet.createHDWallet(name, addressCount, password) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-create-wallet-endpoint))
* caClient.BC.XXX.wallet.listWallets() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-list-wallets-endpoint))
* caClient.BC.XXX.wallet.listHDWallets() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-list-wallets-endpoint))
* caClient.BC.XXX.wallet.getWallet(walletName) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-get-wallet-endpoint))
* caClient.BC.XXX.wallet.getHDWallet(walletName) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-get-wallet-endpoint))
* caClient.BC.XXX.wallet.addAddressToWallet(name, addresses) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-add-addresses-to-wallet-endpoint))
* caClient.BC.XXX.wallet.generateAddressInWallet(name) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-generate-address-in-wallet-endpoint))
* caClient.BC.XXX.wallet.generateAddressInHDWallet(name, addressCount, password) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-generate-address-in-wallet-endpoint))
* caClient.BC.XXX.wallet.removeAddressFromWallet(name, address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-remove-addresses-from-wallet-endpoint))
* caClient.BC.XXX.wallet.deleteWallet(name) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-delete-wallet-endpoint))
* caClient.BC.XXX.wallet.deleteHDWallet(name) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-delete-wallet-endpoint))
* caClient.BC.XXX.wallet.createXPub(password) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-create-xpub-endpoint))
* caClient.BC.XXX.wallet.getXPubChangeAddresses(xpub, from, to) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-get-xpub-change-addresses-endpoint))
* caClient.BC.XXX.wallet.getXPubReceiveAddresses(xpub, from, to) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-get-xpub-receive-addresses-endpoint))
* caClient.BC.XXX.wallet.importAddressAsWallet(walletName, password, privateKey, address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-import-wallet-endpoint))

#### Transaction methods
* caClient.BC.XXX.transaction.getTransaction(txID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-transaction-txid-endpoint))
* caClient.BC.XXX.transaction.getBasicTransaction(txID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-basic-transaction-txid-endpoint))
* caClient.BC.XXX.transaction.getTransactionIndexByBlock(block, ?{?index, ?limit} = {index: 0, limit: 1}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-transaction-by-block-endpoint))
* caClient.BC.XXX.transaction.getUnconfirmedTransactions(?{?index, ?limit} = {index: 0, limit: 100}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-unconfirmed-transactions-endpoint))
* caClient.BC.XXX.transaction.decodeRawTransaction(hex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-decode-raw-transaction-endpoint))
* caClient.BC.XXX.transaction.createTransaction(inputs, outputs, fee) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-creating-transactions))
* caClient.BC.XXX.transaction.signTransaction(hex, wifs) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-sign))
* caClient.BC.XXX.transaction.sendTransaction(hex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-send-transactions))
* caClient.BC.XXX.transaction.newTransaction(inputs, outputs, fee, wifs) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-new-transactions))
* caClient.BC.XXX.transaction.createHDWalletTransaction(walletName, password, outputs, fee, ?{?inputs, ?locktime} = {inputs: null, locktime: 0}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-hdwallet-transactions))
* caClient.BC.XXX.transaction.getTransactionsFee() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-fee-endpoint))
* caClient.BC.XXX.transaction.getTransactionSize(inputs, outputs, fee) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-size))
* caClient.BC.XXX.transaction.refund(txid, wif) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-refund-transaction))
* caClient.BC.XXX.transaction.getTransactionSizeForHDWallet(walletName, password, outputs) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-hd-wallet-transactions-size))

#### Payment Forwarding methods
* caClient.BC.XXX.paymentForwarding.createPaymentForwarding(from, to, callbackURL, wallet, password, confirmations, ?{?fee} = {fee: null}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-forwarding-create-payment-endpoint))
* caClient.BC.XXX.paymentForwarding.listPayments() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-forwarding-list-payment-endpoints))
* caClient.BC.XXX.paymentForwarding.listPaymentsHistory() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-history-list-payment-endpoints))
* caClient.BC.XXX.paymentForwarding.deletePayment(paymentID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-forwarding-delete-payment-endpoints))

#### Webhook methods
* caClient.BC.XXX.webhook.createNewBlockWebHook(callbackURL, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-new-block-webhook-endpoint))
* caClient.BC.XXX.webhook.createConfirmedTransactionWebHook(callbackURL, transaction, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-confirmed-transaction-webhook-endpoint))
* caClient.BC.XXX.webhook.createAddressTransactionWebHook(callbackURL, address, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-address-transaction-webhook-endpoint))
* caClient.BC.XXX.webhook.createTransactionConfirmationsWebHook(callbackURL, address, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-transaction-confirmations-webhook-endpoint))
* (``BTC only``) caClient.BC.XXX.webhook.createOmniConfirmedTransactionWebHook(callbackURL, transaction, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-omni-confirmed-transaction-webhook-endpoint))
* (``BTC only``) caClient.BC.XXX.webhook.createOmniTransactionConfirmationsWebHook(callbackURL, address, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-omni-transaction-confirmations-webhook-endpoint))
* (``BTC only``) caClient.BC.XXX.webhook.createOmniTokenWebHook(callbackURL, address, confirmations, ?{?allowDuplicate, ?everyConfirmation} = {allowDuplicate: false, everyConfirmation: false}}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-omni-token-webhook-endpoint))
* caClient.BC.XXX.webhook.listAllHooks() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-list-webhooks-endpoint))
* caClient.BC.XXX.webhook.deleteWebHook(webhookID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-delete-webhook-endpoint))
* caClient.BC.XXX.webhook.deleteAllMyWebhooks() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-delete-all-webhooks-endpoint))

#### Omni Layer methods
* (``BTC only``) caClient.BC.XXX.omniLayer.getNodeInfo() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-blockchain-chain-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getAddress(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-address-info-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getAddressTransactions(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-address-txs-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.createTransactions(from, to, value, fee, propertyID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-creating-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.signTransaction(hex, wif) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-sign))
* (``BTC only``) caClient.BC.XXX.omniLayer.sendTransaction(hex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-send-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.newTransaction(from, to, value, fee, propertyID, wif) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-new-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.createHDWalletTransaction(walletName, password, from, to, value, fee, propertyID, ?{?locktime} = {locktime: 0}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-hdwallet-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.getTransaction(txID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transaction-txid-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getTransactionIndexByBlock(block, ?{?index, ?limit} = {index: 0, limit: 1}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transaction-by-block-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getTransactionsPropertyId(propertyId, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transaction-by-propertyid-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getUnconfirmedTransactions(?{?index} = {index: 0}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-unconfirmed-txs-endpoint))


### ETH / ETC methods

#### Blockchain methods
* caClient.BC.XXX.blockchain.getInfo() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-chain-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHash(blockHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-block-hash-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHeight(blockHeight) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-block-height-endpoint))
* caClient.BC.XXX.blockchain.getLatestBlock() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-latest-block-endpoint))

#### Addresses methods
* caClient.BC.XXX.address.getInfo(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-address-endpoint))
* caClient.BC.XXX.address.getTransactionsByAddress(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transactions-address-endpoint))
* caClient.BC.XXX.address.generateAddress() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-generate-address-endpoint))
* caClient.BC.XXX.address.generateAccount(password) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-generate-account-endpoint))
* caClient.BC.XXX.address.getAddressNonce(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-nonce-endpoint))
* caClient.BC.XXX.address.multipleAddressesInfo(addresses) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-multiple-addresses-info-endpoint))

#### Transaction methods
* caClient.BC.XXX.transaction.getTransaction(txHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-hash-endpoint))
* caClient.BC.XXX.transaction.getTransactionsByBlock(block, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-index-endpoint-by-index-limit-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockNumber(blockNumber, txIndex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-index-endpoint-by-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockHash(blockHash, txIndex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-index-endpoint-by-block-hash))
* caClient.BC.XXX.transaction.newTransaction(fromAddress, toAddress, password, value, gasPrice, gasLimit, ?{?nonce, ?data} = {nonce: null, data: null}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.newAllTransaction(fromAddress, toAddress, password, ?{?gasPrice, ?gasLimit} = {gasPrice: null, gasLimit: null}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.newTransactionWithPrivateKey(fromAddress, toAddress, privateKey, value, gasPrice, gasLimit, ?{?nonce, ?data} = {nonce: null, data: null}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.newAllTransactionWithPrivateKey(fromAddress, toAddress, privateKey, ?{?gasPrice, ?gasLimit} = {gasPrice: null, gasLimit: null}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.sendTransaction(fromAddress, toAddress, value) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-locally-sign-your-transaction-endpoint))
* caClient.BC.XXX.transaction.pushTransaction(hex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-push-raw-transaction-endpoint))
* caClient.BC.XXX.transaction.getPendingTransactions(?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-pending-endpoint))
* caClient.BC.XXX.transaction.getQueuedTransactions(?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-queued-endpoint))
* caClient.BC.XXX.transaction.estimateTransactionGas(fromAddress, toAddress, value) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-estimate-transaction-gas-limit-endpoint))
* caClient.BC.XXX.transaction.getTransactionsFee() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-gas-price-endpoint))
* (``ETH only``) caClient.BC.XXX.transaction.getInternalTransaction(txHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-internal-transactions-endpoint))
* caClient.BC.XXX.transaction.refund(txid, wif) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-refund-transaction))

#### Contract methods
* caClient.BC.XXX.contract.estimateSmartContractGas() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-estimate-gas-smart-contract-endpoint))
* caClient.BC.XXX.contract.deploySmartContract(privateKey, fromAddress, gasPrice, gasLimit, byteCode) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-deploy-smart-contract-endpoint))
* (``ETH only``) caClient.BC.XXX.contract.getContractGasPrice() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-contract-gas-price-endpoint))

#### Tokens methods
* caClient.BC.XXX.token.getAddressTokenBalance(address, contract) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-token-balance))
* caClient.BC.XXX.token.transferTokens(fromAddress, toAddress, contract, gasPrice, gasLimit, token, password/privateKey) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transfer-tokens))
* (``ETH only``) caClient.BC.XXX.token.getTokenTransactionsByAddress(address, ?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-address-token-transactions))
* (``ETH only``) caClient.BC.XXX.token.getAddressTokenTransfers(address, ?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-address-token-transfers))
* caClient.BC.XXX.token.getTokenTotalSupplyAndDecimals(contract) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-token-total-supply))
* (``ETH only``) caClient.BC.XXX.token.estimateTokenTransactionGasLimit() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-estimate-token-transaction-gas-limit-endpoint))

#### Payment Forwarding methods
* caClient.BC.XXX.paymentForwarding.createPaymentForwarding(from, to, callbackURL, wallet, password, confirmations, ?{?fee} = {fee: null}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-payment-forwarding))
* (``ETH only``) caClient.BC.XXX.paymentForwarding.createPaymentForwardingWithPrivateKey(from, to, callbackURL, privateKey, confirmations, ?{?gasPrice, ?gasLimit} = {gasPrice: null, gasLimit: null}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-payment-forwarding))
* caClient.BC.XXX.paymentForwarding.deletePayment(paymentID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-delete-payment-forwarding))
* caClient.BC.XXX.paymentForwarding.listPayments() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-list-payment-forwarding))
* caClient.BC.XXX.paymentForwarding.listPaymentsHistory() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-list-payment-forwarding-history))

#### Webhook methods
* caClient.BC.XXX.webhook.createNewBlockWebHook(callbackURL, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createConfirmedTransactionWebHook(callbackURL, transaction, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createAddressTransactionWebHook(callbackURL, address, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createTransactionConfirmationsWebHook(callbackURL, address, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* (``ETH only``) caClient.BC.XXX.webhook.createTokenWebHook(callbackURL, address, confirmations, ?{?allowDuplicate, ?everyConfirmation} = {allowDuplicate: false, everyConfirmation: false}}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.listAllHooks() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-list-webhook-endpoint))
* caClient.BC.XXX.webhook.deleteWebHook(webhookID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-delete-webhook-endpoints))
* caClient.BC.XXX.webhook.deleteAllMyWebhooks() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-delete-all-webhooks-endpoints))


### ZIL methods

#### Blockchain methods
* caClient.BC.XXX.blockchain.getInfo() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-chain-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHash(blockHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-block-hash-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHeight(blockHeight) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-block-height-endpoint))
* caClient.BC.XXX.blockchain.getLatestBlock() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-latest-block-endpoint))

#### Addresses methods
* caClient.BC.XXX.address.getInfo(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-address-endpoint))
* caClient.BC.XXX.address.getAddressTransactions(address, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-transactions-address-endpoint))
* caClient.BC.XXX.address.generateAddress() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-generate-address-endpoint))

#### Transaction methods
* caClient.BC.XXX.transaction.getTransaction(txHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-transaction-hash-endpoint))
* caClient.BC.XXX.transaction.getTransactionsByBlock(block, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-transaction-index-endpoint-by-index-limit-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockNumber(blockNumber, txIndex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-transaction-index-endpoint-by-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockHash(blockHash, txIndex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/zil/index#zil-transaction-index-endpoint-by-block-hash))


### XRP methods

#### Blockchain methods
* caClient.BC.XXX.blockchain.getInfo() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-chain-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHash(blockHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-block-hash-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHeight(blockHeight) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-block-height-endpoint))
* caClient.BC.XXX.blockchain.getLatestBlock() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-latest-block-endpoint))

#### Addresses methods
* caClient.BC.XXX.address.getInfo(address) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-address-endpoint))
* caClient.BC.XXX.address.getAddressTransactions(address, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-transactions-address-endpoint))
* caClient.BC.XXX.address.generateAddress() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-generate-address-endpoint))

#### Transaction methods
* caClient.BC.XXX.transaction.getTransaction(txHash) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-transaction-hash-endpoint))
* caClient.BC.XXX.transaction.getTransactionsByBlock(block, ?{?index, ?limit} = {index: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-transaction-index-endpoint-by-index-limit-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockNumber(blockNumber, txIndex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-transaction-index-endpoint-by-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockHash(blockHash, txIndex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-transaction-index-endpoint-by-block-hash))
* caClient.BC.XXX.transaction.pushTransaction(hex) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-transactions-send-transactions))

#### Webhook methods
* caClient.BC.XXX.webhook.createNewBlockWebHook(callbackURL, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createAddressTransactionWebHook(callbackURL, address, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createTransactionConfirmationsWebHook(callbackURL, address, confirmations, ?{allowDuplicate} = {allowDuplicate: false}) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-create-webhook-endpoint))
* caClient.BC.XXX.webhook.listAllHooks() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-list-webhooks-endpoint))
* caClient.BC.XXX.webhook.deleteWebHook(webhookID) ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-delete-webhook-endpoint))
* caClient.BC.XXX.webhook.deleteAllMyWebhooks() ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/xrp/index#xrp-delete-all-webhooks-endpoints))


# Crypto Market Data APIs

#### Metadata
* caClient.CMD.meta.listAllExchanges(?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-all-exchanges))
* caClient.CMD.meta.listExchangesBySupportingAssets(assetId, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-exchanges-by-supporting-assets))
* caClient.CMD.meta.listExchangesBySupportingPairs(assetId_1, assetId_2, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-exchanges-by-supporting-pairs))
* caClient.CMD.meta.listAllSymbolsSupportedInExchange(exchangeId, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-all-symbols-supported-in-exchange))
* caClient.CMD.meta.listAllAssets(?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-all-assets))
* caClient.CMD.meta.listAllSymbols(?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-all-symbols))

#### Base data
* caClient.CMD.base.listAllExchanges(?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-all-exchanges-base-data))
* caClient.CMD.base.getExchangeDetails(exchangeId) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#get-exchange-details))
* caClient.CMD.base.listAllAssets(?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-all-assets-base-data))
* caClient.CMD.base.getAssetDetails(assetId) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#get-asset-details))
* caClient.CMD.base.getSymbolDetails(symbolId) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#get-symbol-details))

#### Exchange Rates
* caClient.CMD.exchangeRates.getSpecificRate(baseAssetId, quoteAssetId, ?{?timestamp} = {timestamp: null}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#get-specific-rate))
* caClient.CMD.exchangeRates.getAllCurrentRates(baseAssetId, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#get-all-current-rates))
* caClient.CMD.exchangeRates.getSpecificRateInSpecificExchange(exchangeId, baseAssetId, quoteAssetId, ?{?timestamp} = {timestamp: null}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#get-specific-rate-in-a-specific-exchange))
* caClient.CMD.exchangeRates.getAllCurrentRatesInSpecificExchange(exchangeId, baseAssetId, ?{?timestamp, ?skip, ?limit} = {timestamp: null, skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#get-all-current-rates-in-a-specific-exchange))

#### OHLCV
* caClient.CMD.OHLCV.listAllPeriods() ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#list-all-periods))
* caClient.CMD.OHLCV.latestData(symbolId, periodId, ?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#latest-data))
* caClient.CMD.OHLCV.historicalData(symbolId, period, timePeriodStart, timePeriodEnd, ?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#historical-data))

#### Trades
* caClient.CMD.trades.getLatestData(?{?limit} = {limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-latest-data))
* caClient.CMD.trades.getLatestDataBySymbol(symbolId, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-latest-data-by-symbol))
* caClient.CMD.trades.getLatestDataByExchange(exchangeId, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-latest-data-by-exchange))
* caClient.CMD.trades.getLatestDataByAsset(baseAsset, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-latest-data-by-base-asset))
* caClient.CMD.trades.getLatestDataByAssetsPair(baseAsset, quoteAsset, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-latest-data-by-pair))
* caClient.CMD.trades.getLatestDataByExchangeAssetsPair(exchangeId, baseAsset, quoteAsset, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-latest-data-by-exchange-pair))
* caClient.CMD.trades.tradesGetHistoricalData(symbolId, timeStart, timeEnd, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-historical-data))
* caClient.CMD.trades.tradesGetHistoricalDataByExchange(exchangeId, timeStart, timeEnd, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-historical-data-by-exchange))
* caClient.CMD.trades.tradesGetHistoricalDataByAsset(baseAsset, timeStart, timeEnd, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-historical-data-by-base-asset))
* caClient.CMD.trades.tradesGetHistoricalDataByAssetPair(baseAsset, quoteAsset, timeStart, timeEnd, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-historical-data-by-pair))
* caClient.CMD.trades.tradesGetHistoricalDataByExchangeAssetPair(exchangeId, baseAsset, quoteAsset, timeStart, timeEnd, ?{?skip, ?limit} = {skip: 0, limit: 50}) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#trades-historical-data-by-exchange-pair))

#### Order Book
* caClient.CMD.orderBook.getSnapshotBySymbol(symbolId) ([docs](https://docs.cryptoapis.io/rest-apis/crypto-market-data-apis/index#order-book-snapshot-by-symbol))


# Trading APIs

#### Exchange Accounts
* caClient.TR.exchangeAccounts.create(exchangeId, exchangeApiKey) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/exchange-accounts/index#create-account))
* caClient.TR.exchangeAccounts.listAll() ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/exchange-accounts/index#list-all-accounts))
* caClient.TR.exchangeAccounts.get(accountId) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/exchange-accounts/index#get-account))
* caClient.TR.exchangeAccounts.update(accountId) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/exchange-accounts/index#update-account))
* caClient.TR.exchangeAccounts.delete(accountId) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/exchange-accounts/index#delete-account))

#### Private APIs
* caClient.TR.privateAPIs.listAllExchanges() ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#list-all-exchanges))
* caClient.TR.privateAPIs.getBalance(accountId) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#balance))
* caClient.TR.privateAPIs.getDepositAddress(accountId, code) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#get-deposit-address))
* caClient.TR.privateAPIs.getMyTrades(accountId) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#get-my-trades))
* caClient.TR.privateAPIs.getOpenOrders(accountId) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#get-open-orders))
* caClient.TR.privateAPIs.createOrder(accountId, symbol, type, side, amount, price) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#create-order))
* caClient.TR.privateAPIs.cancelOrder(accountId, id) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#cancel-order))
* caClient.TR.privateAPIs.withdraw(accountId, code, amount, address) ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/private-apis/index#withdraw))

#### Arbitrage
* caClient.TR.arbitrage.listAll() ([docs](https://docs.cryptoapis.io/rest-apis/trading-apis/arbitrage/index#arbitrage))

