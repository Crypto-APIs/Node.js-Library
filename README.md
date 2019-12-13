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


## List of all methods available
NOTES: 
* XXX - blockchain (BTC / BCH / LTC / DOGE / DASH / ETH / ETC)
* doc links target BTC / ETH in our documentation to avoid repetition. For other blockchains refer to the corresponding parts in our [documentation](https://docs.cryptoapis.io/)

### BTC / BCH / LTC / DOGE / DASH methods

#### Blockchain methods
* caClient.BC.XXX.blockchain.getInfo ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-blockchain-chain-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHash ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-blockchain-block-hash-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHeight ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-blockchain-block-height-endpoint))
* caClient.BC.XXX.blockchain.getLatestBlock ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-latest-block-endpoint))

#### Addresses methods
* caClient.BC.XXX.address.getInfo ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-info-endpoint))
* (``BTC / BCH / LTC only``) caClient.BC.XXX.address.getInfoMultisig ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-multisig-info-endpoint))
* caClient.BC.XXX.address.generateAddress ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-generate-address-endpoint))
* caClient.BC.XXX.address.getAddressTransactions ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-address-transactions-endpoint))
* caClient.BC.XXX.address.multipleAddressesInfo ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-multiple-addresses-info-endpoint))

#### Wallets methods
* caClient.BC.XXX.wallet.createWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-create-wallet-endpoint))
* caClient.BC.XXX.wallet.createHDWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-create-wallet-endpoint))
* caClient.BC.XXX.wallet.listWallets ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-list-wallets-endpoint))
* caClient.BC.XXX.wallet.listHDWallets ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-list-wallets-endpoint))
* caClient.BC.XXX.wallet.getWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-get-wallet-endpoint))
* caClient.BC.XXX.wallet.getHDWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-get-wallet-endpoint))
* caClient.BC.XXX.wallet.addAddressToWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-add-addresses-to-wallet-endpoint))
* caClient.BC.XXX.wallet.generateAddressInWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-generate-address-in-wallet-endpoint))
* caClient.BC.XXX.wallet.generateAddressInHDWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-generate-address-in-wallet-endpoint))
* caClient.BC.XXX.wallet.removeAddressFromWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-remove-addresses-from-wallet-endpoint))
* caClient.BC.XXX.wallet.deleteWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-delete-wallet-endpoint))
* caClient.BC.XXX.wallet.deleteHDWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-delete-wallet-endpoint))
* caClient.BC.XXX.wallet.createXPub ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-create-xpub-endpoint))
* caClient.BC.XXX.wallet.getXPubChangeAddresses ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-get-xpub-change-addresses-endpoint))
* caClient.BC.XXX.wallet.getXPubReceiveAddresses ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-get-xpub-receive-addresses-endpoint))
* caClient.BC.XXX.wallet.importAddressAsWallet ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-wallet-import-wallet-endpoint))

#### Transaction methods
* caClient.BC.XXX.transaction.getTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-transaction-txid-endpoint))
* caClient.BC.XXX.transaction.getTransactionIndexByBlock ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-transaction-by-block-endpoint))
* caClient.BC.XXX.transaction.getUnconfirmedTransactions ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-unconfirmed-transactions-endpoint))
* caClient.BC.XXX.transaction.decodeRawTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-decode-raw-transaction-endpoint))
* caClient.BC.XXX.transaction.createTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-creating-transactions))
* caClient.BC.XXX.transaction.signTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-sign))
* caClient.BC.XXX.transaction.sendTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-send-transactions))
* caClient.BC.XXX.transaction.newTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-new-transactions))
* caClient.BC.XXX.transaction.createHDWalletTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-hdwallet-transactions))
* caClient.BC.XXX.transaction.getTransactionsFee ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-transactions-fee-endpoint))
* caClient.BC.XXX.transaction.refund ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-refund-transaction))

#### Payment Forwarding methods
* caClient.BC.XXX.paymentForwarding.createPaymentForwarding ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-forwarding-create-payment-endpoint))
* caClient.BC.XXX.paymentForwarding.listPayments ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-forwarding-list-payment-endpoints))
* caClient.BC.XXX.paymentForwarding.listPaymentsHistory ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-history-list-payment-endpoints))
* caClient.BC.XXX.paymentForwarding.deletePayment ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-payment-forwarding-delete-payment-endpoints))

#### Webhook methods
* caClient.BC.XXX.webhook.createNewBlockWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-new-block-webhook-endpoint))
* caClient.BC.XXX.webhook.createConfirmedTransactionWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-confirmed-transaction-webhook-endpoint))
* caClient.BC.XXX.webhook.createAddressTransactionWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-address-transaction-webhook-endpoint))
* caClient.BC.XXX.webhook.createTransactionConfirmationsWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-transaction-confirmations-webhook-endpoint))
* (``BTC only``) caClient.BC.XXX.webhook.createOmniConfirmedTransactionWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-omni-confirmed-transaction-webhook-endpoint))
* (``BTC only``) caClient.BC.XXX.webhook.createOmniTransactionConfirmationsWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-omni-transaction-confirmations-webhook-endpoint))
* (``BTC only``) caClient.BC.XXX.webhook.createOmniTokenWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-create-omni-token-webhook-endpoint))
* caClient.BC.XXX.webhook.listAllHooks ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-list-webhooks-endpoint))
* caClient.BC.XXX.webhook.deleteWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-delete-webhook-endpoint))
* caClient.BC.XXX.webhook.deleteAllMyWebhooks ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-webhooks-delete-all-webhooks-endpoint))

#### Omni Layer methods
* (``BTC only``) caClient.BC.XXX.omniLayer.getNodeInfo ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-blockchain-chain-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getAddress ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-address-info-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getAddressTransactions ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-address-txs-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.createTransactions ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-creating-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.signTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-sign))
* (``BTC only``) caClient.BC.XXX.omniLayer.sendTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-send-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.newTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-new-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.createHDWalletTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transactions-hdwallet-transactions))
* (``BTC only``) caClient.BC.XXX.omniLayer.getTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transaction-txid-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getTransactionIndexByBlock ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transaction-by-block-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getTransactionsPropertyId ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-transaction-by-propertyid-endpoint))
* (``BTC only``) caClient.BC.XXX.omniLayer.getUnconfirmedTransactions ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/btc/index#btc-omni-unconfirmed-txs-endpoint))


### ETH / ETC methods

#### Blockchain methods
* caClient.BC.XXX.blockchain.getInfo ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-chain-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHash ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-block-hash-endpoint))
* caClient.BC.XXX.blockchain.getBlockByHeight ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-block-height-endpoint))
* caClient.BC.XXX.blockchain.getLatestBlock ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-latest-block-endpoint))

#### Addresses methods
* caClient.BC.XXX.address.getInfo ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-address-endpoint))
* caClient.BC.XXX.address.getTransactionsByAddress ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transactions-address-endpoint))
* caClient.BC.XXX.address.generateAddress ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-generate-address-endpoint))
* caClient.BC.XXX.address.generateAccount ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-generate-account-endpoint))
* caClient.BC.XXX.address.getAddressNonce ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-nonce-endpoint))
* caClient.BC.XXX.address.multipleAddressesInfo ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-multiple-addresses-info-endpoint))

#### Transaction methods
* caClient.BC.XXX.transaction.getTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-hash-endpoint))
* caClient.BC.XXX.transaction.getTransactionsByBlock ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-index-endpoint-by-index-limit-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockNumber ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-index-endpoint-by-block-number))
* caClient.BC.XXX.transaction.getTransactionByBlockHash ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-index-endpoint-by-block-hash))
* caClient.BC.XXX.transaction.newTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.newAllTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.newTransactionWithPrivateKey ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.newAllTransactionWithPrivateKey ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-creating-transactions))
* caClient.BC.XXX.transaction.sendTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-locally-sign-your-transaction-endpoint))
* caClient.BC.XXX.transaction.pushTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-push-raw-transaction-endpoint))
* caClient.BC.XXX.transaction.getPendingTransactions ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-pending-endpoint))
* caClient.BC.XXX.transaction.getQueuedTransactions ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-queued-endpoint))
* caClient.BC.XXX.transaction.estimateTransactionGas ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-estimate-transaction-gas-limit-endpoint))
* caClient.BC.XXX.transaction.getTransactionsFee ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transaction-gas-price-endpoint))
* (``ETH only``) caClient.BC.XXX.transaction.getInternalTransaction ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-internal-transactions-endpoint))
* caClient.BC.XXX.transaction.refund ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-refund-transaction))

#### Contract methods
* caClient.BC.XXX.contract.estimateSmartContractGas ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-estimate-gas-smart-contract-endpoint))
* caClient.BC.XXX.contract.deploySmartContract ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-deploy-smart-contract-endpoint))

#### Tokens methods
* caClient.BC.XXX.token.getAddressTokenBalance ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-token-balance))
* caClient.BC.XXX.token.transferTokens ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-transfer-tokens))
* (``ETH only``) caClient.BC.XXX.token.getTokenTransactionsByAddress ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-address-token-transactions))
* (``ETH only``) caClient.BC.XXX.token.getAddressTokenTransfers ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-address-token-transfers))
* caClient.BC.XXX.token.getTokenTotalSupplyAndDecimals ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-get-token-total-supply))

#### Payment Forwarding methods
* caClient.BC.XXX.paymentForwarding.createPaymentForwarding ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-payment-forwarding))
* caClient.BC.XXX.paymentForwarding.deletePayment ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-delete-payment-forwarding))
* caClient.BC.XXX.paymentForwarding.listPayments ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-list-payment-forwarding))
* caClient.BC.XXX.paymentForwarding.listPaymentsHistory ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-list-payment-forwarding-history))

#### Webhook methods
* caClient.BC.XXX.webhook.createNewBlockWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createConfirmedTransactionWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createAddressTransactionWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.createTransactionConfirmationsWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* (``ETH only``) caClient.BC.XXX.webhook.createTokenWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-create-webhook-endpoint))
* caClient.BC.XXX.webhook.listAllHooks ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-list-webhook-endpoint))
* caClient.BC.XXX.webhook.deleteWebHook ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-delete-webhook-endpoints))
* caClient.BC.XXX.webhook.deleteAllMyWebhooks ([docs](https://docs.cryptoapis.io/rest-apis/blockchain-as-a-service-apis/eth/index#eth-delete-all-webhooks-endpoints))
