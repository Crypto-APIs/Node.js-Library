### Exchanges - Services/Methods


| Arbitrage  | ExchangeRatesService | MetadataService    | OHLCVService   | QuotesService                         | TradesService                              |             
| ---------- | -------------------- | ------------------ | -------------- | ------------------------------------- | ------------------------------------------ |  
| getLatest  | getSpecificRate      | listAllExchanges   | listAllPeriods | getLatestData                         | getLatestData                              |
|            | getAllCurrentRates   | getExchangeDetails | latestData     | getLatestDataByExchange               | getLatestDataBySymbol                      |
|            |                      | listAllAssets      | historicalData | getLatestDataByBaseAsset              | getLatestDataByExchange                    |
|            |                      | listAllSymbols     |                | getLatestDataByExchangeAssetsPair     | getLatestDataByAsset                       |
|            |                      | getSymbolDetails   |                | getHistoricalData                     | getLatestDataByAssetsPair                  |
|            |                      |                    |                | getHistoricalDataByExchange           | getLatestDataByExchangeAssetsPair          |
|            |                      |                    |                | getHistoricalDataByAsset              | tradesGetHistoricalData                    |
|            |                      |                    |                | getHistoricalDataByAssetsPair         | tradesGetHistoricalDataByExchange          |
|            |                      |                    |                | getHistoricalDataByExchangeAssetsPair | tradesGetHistoricalDataByAsset             |
|            |                      |                    |                |                                       | tradesGetHistoricalDataByAssetPair         |
|            |                      |                    |                |                                       | tradesGetHistoricalDataByExchangeAssetPair |


### Ethereum - Services/Methods


| AddressService         | BlockchainService | ContractService          | PaymentForwardingService | TokenService                  | TransactionService              | WebhookService                        |               
| ---------------------- | ----------------- | ------------------------ | ------------------------ | ----------------------------- | ------------------------------- | ------------------------------------- |  
| getInfo                | getInfo           | estimateSmartContractGas | createPaymentForwarding  | getAddressTokenBalance        | getTransaction                  | createNewBlockWebHook                 |
| generateAddress        | getBlockByHash    | deploySmartContract      | listPayments              | transferTokens                | getTransactionsByBlock          | createConfirmedTransactionWebHook     | 
| generateAccount        | getBlockByHeight  |                          | listPaymentsHistory       | getTokenTransactionsByAddress | getTransactionByBlockNumber     | createAddressTransactionWebHook       |
| getAddressTransactions | getLatestBlock    |                          | deletePayment            | getAddressTokenTransfers      | getTransactionByBlockHash       | createTransactionConfirmationsWebHook |
| getAddressNonce        |                   |                          |                          |                               | newTransaction                  | createTokenWebHook                    |
|                        |                   |                          |                          |                               | newAllTransaction               | createTxPoolWebHook                   |
|                        |                   |                          |                          |                               | newTransactionWithPrivateKey    | listAllHooks                          |
|                        |                   |                          |                          |                               | newAllTransactionWithPrivateKey | deleteWebHook                         |
|                        |                   |                          |                          |                               | sendTransaction                 |                                       |
|                        |                   |                          |                          |                               | pushTransaction                 |                                       |
|                        |                   |                          |                          |                               | estimateTransactionGas          |                                       |
|                        |                   |                          |                          |                               | getPendingTransactions          |                                       |
|                        |                   |                          |                          |                               | getQueuedTransactions           |                                       |
|                        |                   |                          |                          |                               | getTransactionsFee              |                                       |
    
                                
### Bitcoin, Litecoin, Bitcoin Cash, Dogecoin, DASH - Services/Methods


| AddressService                                   | BlockchainService | PaymentForwardingService | TransactionService         | WalletService             | WebhookService                        |               
| ------------------------------------------------ | ----------------- | ------------------------ | -------------------------- | ------------------------- | ------------------------------------- |  
| getInfo                                          | getInfo           | createPaymentForwarding  | getTransaction             | createWallet              | createNewBlockWebHook                 |
| getInfoMultisig (not supported in Dogecoin/DASH) | getBlockByHash    | deletePayment            | getTransactionIndexByBlock | createHDWallet            | createConfirmedTransactionWebHook     | 
| generateAddress                                  | getBlockByHeight  | listPayments              | getUnconfirmedTransactions | listWallets               | createAddressTransactionWebHook       |
| getAddressTransactions                           | getLatestBlock    | listPaymentsHistory       | decodeRawTransaction       | listHDWallets             | createTransactionConfirmationsWebHook |
|                                                  |                   |                          | createTransaction          | getWallet                 | listAllHooks                          |
|                                                  |                   |                          | signTransaction            | getHDWallet               | deleteWebHook                         |
|                                                  |                   |                          | sendTransaction            | addAddressToWallet        |                                       |
|                                                  |                   |                          | newTransaction             | generateAddressInWallet   |                                       |
|                                                  |                   |                          | createHDWalletTransaction  | generateAddressInHDWallet |                                       |
|                                                  |                   |                          | getTransactionsFee         | removeAddressFromWallet   |                                       |
|                                                  |                   |                          |                            | deleteWallet              |                                       |
|                                                  |                   |                          |                            | deleteHDWallet            |                                       |
|                                                  |                   |                          |                            | createXPub                |                                       |
|                                                  |                   |                          |                            | getXPubChangeAddresses    |                                       |
|                                                  |                   |                          |                            | getXPubReceiveAddresses   |                                       |
