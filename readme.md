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


|   AddressService   | BlockchainService |  BlockService  | ContractService |  PaymentService  |    TokenService      | TransactionService  |    WebhookService     |               
| ------------------ | ----------------- | -------------- | --------------- | ---------------- | -------------------- | ------------------- | --------------------- |  
| getAddressInfo     | getBlockchainInfo | getBlock x2    | estimateGasSC   | createPFPvt      | getTokenBalance      | getTx x3            | createNewBlockWh      |
| generateNewAddress |                   | getLatestBlock | deploySC        | createPFPwd      | transferPvt          | getPendingTxs       | createAddressWh       | 
| generateAccount    |                   |                |                 | deletePF         | transferPwd          | getQueuedTxs        | createConfirmedTxWh   |
| getTxsByAddress    |                   |                |                 | listPayments     | getTokensByAddress   | getTxByIdxAndLimit  | createTokenWh         |
| getNonce           |                   |                |                 | listPastPayments | getTokenTxsByAddress | createTxKeyStore    | createTXPoolWh        |
|                    |                   |                |                 |                  |                      | createTxKeyStoreAll | deleteWebhook         |
|                    |                   |                |                 |                  |                      | createTxPvt         | listWebhooks          |
|                    |                   |                |                 |                  |                      | createTxPvtAll      |                       |
|                    |                   |                |                 |                  |                      | getRawTxBody        |                       |
|                    |                   |                |                 |                  |                      | estimateGasLimit    |                       |
|                    |                   |                |                 |                  |                      | broadcastSignedTx   |                       |
|                    |                   |                |                 |                  |                      | getGasFees          |                       |
    
                                
### Bitcoin, Litecoin, Bitcoin_Cash, Dogecoin - Services/Methods


|     AddressService     | BlockchainService |  BlockService  |  PaymentService  | TransactionService |       WalletService     |    WebhookService     |               
| ---------------------- | ----------------- | -------------- | ---------------- | ------------------ | ----------------------- | --------------------- |  
| getAddressInfo         | getBlockchainInfo | getBlock x2    | createPFPwd      | getTxByHash        | createWallet            | createNewBlockWh      |
| getMultisigAddressInfo |                   | getLatestBlock | deletePF         | getTxByBlock x2    | createHDWallet          | createAddressWh       | 
| generateNewAddress     |                   |                | listPayments     | getUnconfirmedTxs  | listWallets             | createConfirmedTxWh   |
| getTxsByAddress        |                   |                | listPastPayments | decodeTx           | listHDWallets           | deleteWebhook         |
|                        |                   |                |                  | createTx           | getWallet               | listWebhooks          |
|                        |                   |                |                  | signTx             | getHDWallet             |                       |
|                        |                   |                |                  | sendTx             | addAddressToWallet      |                       |
|                        |                   |                |                  | newTx              | generateAddressWallet   |                       |
|                        |                   |                |                  | getFees            | generateAddressHDWallet |                       |
|                        |                   |                |                  | newTxWithHDWallet  | removeAddress           |                       |
|                        |                   |                |                  |                    | deleteWallet            |                       |
|                        |                   |                |                  |                    | deleteHDWallet          |                       |
|                        |                   |                |                  |                    | createExtendedKey       |                       |
|                        |                   |                |                  |                    | getXpubReceiveAddresses |                       |
|                        |                   |                |                  |                    | getXpubChangeAddresses  |                       |
