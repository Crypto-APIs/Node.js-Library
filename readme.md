JavaScript SDK for [CryptoAPIs.io](https://cryptoapis.io/)
===========

You can get API key [here](https://dashboard.cryptoapis.io/register).
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

// By default the calls are made to the mainnet for each chain.
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

## Ethereum examples

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
    "publicKey": "51767e84342ea3d10faf35676997cf1dbd4d2c0168fe46a4a920c4c1f557bc8851445ff17aaba144546e7aac45b1754352d860c617eff441778c4e053178f97b",
  }
}
```

### Generate new account

```js
const password = 'your password - l3tt3rs and d1g1ts';
caClient.BC.ETH.address.generateAccount(password).then(console.log);
```

It will print the following:
 
```json
{
  "payload": {
    "success": "keystore saved:",
    "address": "0x95b954b475b908df6c3ee60db0e23c13607d4971:"
  }
}

```
 
If an error occurs, it will print the following (e.g. your password is weak):
  
```json
{
  "meta": {
    "error": {
      "message": "Password is too weak! It should be at least 7 characters and should contain at least one letter and one digit",
      "code": 15
    }
  },
  "statusCode": 400
}
```

### Get address balance

```js
const address = '0xd6cb6744b7f2da784c5afd6b023d957188522198';
caClient.BC.ETH.address.getInfo(address).then(console.log);
```

It will print the following:

```json
{
  "payload": {
    "chain": "ETH.mainnet",
    "address": "0xd6cb6744b7f2da784c5afd6b023d957188522198",
    "balance": "1981.86598254851838",
    "txs_count": 180546,
    "from": 60509,
    "to": 120037,
  }
}
```

### Get block info by number

```js
const blockNumber = 6123321;
caClient.BC.ETH.blockchain.getBlockByHeight(blockNumber).then(console.log);
```

It will print the following:

```json
{
  "payload": {
    "chain": "ETH.mainnet",
    "height": 6123321,
    "hash": "0xdd9cda46ecc76633504931d5f7fd4bbff4c39ca3d6d173550f37789a863135b2",
    "parent_hash": "0xa19c2538a3ffa5077645dc1ecef2ef99fcbf9707b106df5536244e87b13d06bc",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "gas_used": "7992049",
    "size": "5332 bytes",
    "timestamp": 1533919094,
    "date": "2018-08-10 16"38"14 +UTC",
    "transactions": 36,
    "difficulty": "3544115802240984",
    "total_difficulty": "5917863156620322787518",
    "gas_limit": "8000029",
    "nonce": "0x20f173b005ccec35",
    "mined_by": "0xea674fdde714fd979de3edf0f56aa9716b898ec8 (Ethermine) in 3 secs",
    "uncles": [],
    "extra_data": "0x65746865726d696e652d657538",
    "confirmations": 2045393,
    "total_fees": "100689146837974998",
  }
}
```

### Get an existing transaction by a given hash:

```js
const tx = '0xe7abcffe85acf8e6d3186f1378d201b0857c41d300885c9c3c2f2c72afaecbcd';
caClient.BC.ETH.transaction.getTransaction(tx).then(console.log);
```

If the queried transaction exists it will print the following:
 
```json
{
  "payload": {
    "chain": "ETH.mainnet",
    "status": "0x1",
    "index": 1,
    "hash": "0xe7abcffe85acf8e6d3186f1378d201b0857c41d300885c9c3c2f2c72afaecbcd",
    "value": "0",
    "from": "0xf51a8cee8d3e9dc1764d2b6ef3fad973ebdb0ec5",
    "to": "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd",
    "date": "2018-12-06 10:09:38 +UTC",
    "block_hash": "0x503c138005347065a606d3d0d02b3528790227b3a17b6fd6b54ce54ed79f144a",
    "block_number": 6836009,
    "gas": "36657",
    "gas_price": "97000000000",
    "gas_used": "36657",
    "nonce": 573,
    "confirmations": 1332739,
    "token_transfers": [
      {
        "from": "0xf51a8cee8d3e9dc1764d2b6ef3fad973ebdb0ec5",
        "to": "0xcfbd73a1404a2cbf956e9e506ff5006601bcd2a4",
        "value": "39.000",
        "tokenName": "Free Coin",
        "symbol": "FREE",
        "tokenType": "ERC-20"
      }
    ],
    "input": "0xa9059cbb000000000000000000000000cfbd73a1404a2cbf956e9e506ff5006601bcd2a40000000000000000000000000000000000000000000000021d3bd55e803c0000"
  }
}
```

If transaction is not found, the following message will be printed:

```json
{
  "meta": {
    "error": {
      "message": "Transaction not found",
      "code": 21
    }
  },
  "statusCode": 404
}
```

### Create payment forwarding using an account

```js
caClient.BC.ETH.paymentForwarding.createPaymentForwarding(
    "https://somepoint.com", 
    "0x7857af2143cb06ddc1dab5d7844c9402e89717cb", 
    "0x4ab47e7b0204d6b3bf0e956db14e63142b9b5ab8", 
    "your-password-123", 
    6, 
    11000000000, 
    21000
)
    .then(console.log);
```

It will print similar to the following:

```json
{
  "payload": {
  "uuid": "7f0c4666-af1f-44a3-b5f5-1a3c2b904283",
  "from": "0x7857af2143cb06ddc1dab5d7844c9402e89717cb",
  "to": "0x4ab47e7b0204d6b3bf0e956db14e63142b9b5ab8",
  "confirmations": 2,
  "callback": "http://somepoint.com",
  "gasPrice": "11000000000",
  "gasLimit": "21000"
  }
}
```

If password is misspelled the following will be printed:

```json
{
  "meta": {
    "error": {
      "message": "Wrong password",
      "code": 19
    }
  },
  "statusCode": 400
}
```

### Create, sign and send a transaction to the blockchain 

```js
const from = '0xc438d912235ff5facc22c502e5bd6dc1ae14a7ff';
const to = '0x0cb1883c01377f45ee5d7448a32b5ac1709afc11';
const gasPrice = 8000000000;
const gasLimit = 30000;
const password = 'your-password-123';
const value = 0.012;
const hexData = 0x123;

caClient.BC.ETH.transaction.newTransaction(from, to, password, value, gasPrice, gasLimit, null, hexData);
```

It will print similar to the following:

```json
{
    "payload": {
        "hex": "0xfebf0691cc92f67ace032897a83587c44c5b2ef437341c6cfd5dbf1f8f4c288d"
    }
}
```
 
## Bitcoin, Litecoin, Bitcoin Cash, Doge and DASH examples

### Generate new address

```js
caClient.BC.BTC.address.generateAddress().then(console.log);
caClient.BC.LTC.address.generateAddress().then(console.log);
caClient.BC.BCH.address.generateAddress().then(console.log);
caClient.BC.DOGE.address.generateAddress().then(console.log);
caClient.BC.DASH.address.generateAddress().then(console.log);
```

It will print similar to the following:

```json
{
    "payload": {
        "privateKey": "2edfe66bed8a17e58cd51a3da72f63d0a6b0ca8775d237772f88e42c27f992e0",
        "publicKey": "037039ac5fac75ab9eb8bdbde8a9ba2dc5d7576b711e69a241a5e2dfdbc71647a5",
        "address": "1P2CyS7TPqHPQeQExDXSK25hPs2jCk3c46",
        "wif": "Kxnq2zxvNatWtHbQzmakRdH21YNozFjD141s2mKpo21C6sVwa16e"
    }
}
```

### Get block info by a given hash

```js
const hash = '000000000000000002dbd3af3c654b77ea277238b02df23d93ca6b3e4eedb295';

caClient.BC.BTC.blockchain.getBlockByHash(hash).then(console.log);
caClient.BC.LTC.blockchain.getBlockByHash(hash).then(console.log);
caClient.BC.BCH.blockchain.getBlockByHash(hash).then(console.log);
caClient.BC.DOGE.blockchain.getBlockByHash(hash).then(console.log);
caClient.BC.DASH.blockchain.getBlockByHash(hash).then(console.log);
```

It will print similar to the following:

```json
{
    "payload": {
        "hash": "000000000000000002dbd3af3c654b77ea277238b02df23d93ca6b3e4eedb295",
        "size": 974324,
        "height": 419398,
        "version": 536870912,
        "versionHex": "20000000",
        "merkleroot": "67c988f47c40ef54c87d530be54b9a2ee2d575462beda0c920e23f44b2c24ff4",
        "time": "2016-07-05 13:07:56 UTC",
        "mediantime": "2016-07-05 12:15:24 UTC",
        "nonce": 3430795024,
        "bits": "180526fd",
        "difficulty": 213398925331.3239,
        "chainwork": "0000000000000000000000000000000000000000001eb413e634b72bd107f569",
        "previousblockhash": "0000000000000000039b2f5bf42183b25299c9ffb4a99111ea35819a701e84a2",
        "nextblockhash": "00000000000000000016e54e255f112a015c15f92dfd30f7f5259df6729280c7",
        "transactions": 1768,
        "tx": [
            "48d0c5e7d7f1004e4fda1ad02529b024d59e8d663486d9b9cad4fe92d3f9d63e",
            "2046a3a6affe4886c53060f5f5637b9369f188046b2ea2d3172ca99a0bcb7137",
            ...
            "14f18a93af7ffb3dacec0d419e68efa8a436068390691a5d1f54baedbab55a00"
        ],
        "confirmations": 0,
        "timestamp": 1467724076
    }
}
```

### Get transactions by index and limit

```js
const blockNumber = 553381;
const index = 23;
const limit = 2;

caClient.BC.BTC.transaction.getTransactionIndexByBlock(blockNumber, index, limit).then(console.log);
caClient.BC.LTC.transaction.getTransactionIndexByBlock(blockNumber, index, limit).then(console.log);
caClient.BC.BCH.transaction.getTransactionIndexByBlock(blockNumber, index, limit).then(console.log);
caClient.BC.DOGE.transaction.getTransactionIndexByBlock(blockNumber, index, limit).then(console.log);
caClient.BC.DASH.transaction.getTransactionIndexByBlock(blockNumber, index, limit).then(console.log);
```

```json
{
	"payload": [{
		"txid": "cacb2282399e250bbbe60fbb49e62e60f0bd123563ff853730e038be8e4a116f",
		"hash": "cacb2282399e250bbbe60fbb49e62e60f0bd123563ff853730e038be8e4a116f",
		"index": 23,
		"version": 1,
		"size": 3190,
		"vsize": 3190,
		"locktime": 0,
		"time": "2014-04-22 03:48:34 UTC",
		"blockhash": "3334d66be09560433bda17f335c4c6d0017be0bc18a887f9596249c2123d3e15",
		"blockheight": 553381,
		"blocktime": "2014-04-22 03:48:34 UTC",
		"timestamp": 1398138514,
		"confirmations": 1055211,
		"txins": [{
			"txout": "ee9f6d825607b6ceb1482139a43394ef9b640383f12b809a046a9dae62f7bd5b",
			"vout": 1,
			"amount": "0.0139",
			"addresses": ["LeqLW7KgkYfaaz2DTSbzh2cZCm8LbUU1NX"],
			"script": {
				"asm": "304402204d6dde1a7f0db805eccafa7a401f4a6b47d6b144c02a40de8dc77d4743f9691e0220689c55f64912b9cb17387d49ac33326bb8200c81325c0ca257078b1123d40f7a[ALL] 036b503d5b9d37d295aa710179686696a26097c5ded86779d517d99d139e3268e8",
				"hex": "47304402204d6dde1a7f0db805eccafa7a401f4a6b47d6b144c02a40de8dc77d4743f9691e0220689c55f64912b9cb17387d49ac33326bb8200c81325c0ca257078b1123d40f7a0121036b503d5b9d37d295aa710179686696a26097c5ded86779d517d99d139e3268e8"
			},
			"votype": "pubkeyhash"
		  },
		 ...
		 {
			"txout": "72229f239e1e07de267310dafca1546d046b2ccb7a8ed97166377e0a029bc7a9",
			"vout": 1,
			"amount": "1.9639",
			"addresses": ["LhUwWyncweni85nat8g6b7YVKfNuJsxi3p"],
			"script": {
				"asm": "304502201dbaed3e5d9424df9f2c9fded04ff26462dabd94670bdbb343ae81eeaa1c4c8802210087d58c21bca9d8da42f498951afbb43aab1e97247111e13de5caacde994b4317[ALL] 033e300857f2b1751a96fb8dd2262b5a4cd5fd34958a485d5bc33e30fe0a66e6c0",
				"hex": "48304502201dbaed3e5d9424df9f2c9fded04ff26462dabd94670bdbb343ae81eeaa1c4c8802210087d58c21bca9d8da42f498951afbb43aab1e97247111e13de5caacde994b43170121033e300857f2b1751a96fb8dd2262b5a4cd5fd34958a485d5bc33e30fe0a66e6c0"
			},
			"votype": "pubkeyhash"
		}],
		"txouts": [{
			"amount": "40",
			"type": "pubkeyhash",
			"spent": true,
			"addresses": ["LTi2gMpBpV73VeiY3CiSqbkQ5QSeUP2GPC"],
			"script": {
				"asm": "OP_DUP OP_HASH160 5d1056fa8321e89a47d2718f659c320ea1b9851d OP_EQUALVERIFY OP_CHECKSIG",
				"hex": "76a9145d1056fa8321e89a47d2718f659c320ea1b9851d88ac",
				"reqsigs": 1
			}
		}, {
			"amount": "0.01000521",
			"type": "pubkeyhash",
			"spent": true,
			"addresses": ["LTKqrfL2kjgzBhMJ5JBcSfLY8Mm77FdLEg"],
			"script": {
				"asm": "OP_DUP OP_HASH160 58de278f79671418afb6dedca037ed28c8e88301 OP_EQUALVERIFY OP_CHECKSIG",
				"hex": "76a91458de278f79671418afb6dedca037ed28c8e8830188ac",
				"reqsigs": 1
			}
		}]
	}, {
		"txid": "79f9ff7ea230c4bd2a214cf37b577773a2bfe5b6827ca86258a7aa7c538f00ee",
		"hash": "79f9ff7ea230c4bd2a214cf37b577773a2bfe5b6827ca86258a7aa7c538f00ee",
		"index": 24,
		"version": 1,
		"size": 967,
		"vsize": 967,
		"locktime": 0,
		"time": "2014-04-22 03:48:34 UTC",
		"blockhash": "3334d66be09560433bda17f335c4c6d0017be0bc18a887f9596249c2123d3e15",
		"blockheight": 553381,
		"blocktime": "2014-04-22 03:48:34 UTC",
		"timestamp": 1398138514,
		"confirmations": 1055211,
		"txins": [{
			"txout": "61feafc03b11107e86c3f8e6699a75b87b766d7e222eb9664c1738d05eba74e2",
			"vout": 1,
			"amount": "0.00015",
			"addresses": ["LXwpBzPnMoMAcv4FKnZYXDZE1KkrYC4Dy2"],
			"script": {
				"asm": "304502206225d41fb743b045e3c8733525a4ae1c6c58a1461f690f722bc2655bdc8fb3e602210081ad463354073dacd8ed0d1da3f418258197508e68508fe54cf27d9299ea348f[ALL] 028b42eb7e6a01fc2cbd1c4a44a212cbd097e2084d70dab167f469e1356cb5116a",
				"hex": "48304502206225d41fb743b045e3c8733525a4ae1c6c58a1461f690f722bc2655bdc8fb3e602210081ad463354073dacd8ed0d1da3f418258197508e68508fe54cf27d9299ea348f0121028b42eb7e6a01fc2cbd1c4a44a212cbd097e2084d70dab167f469e1356cb5116a"
			},
			"votype": "pubkeyhash"
		}, 
		 ...
		 {
			"txout": "cacb2282399e250bbbe60fbb49e62e60f0bd123563ff853730e038be8e4a116f",
			"vout": 1,
			"amount": "0.01000521",
			"addresses": ["LTKqrfL2kjgzBhMJ5JBcSfLY8Mm77FdLEg"],
			"script": {
				"asm": "3045022057d48cdd2ba3eaf0c5b6fb04768170e50830f001ec2f476a0cf5e490e2673450022100b9a057699d913a2215b147a27e1c61b6b2d196a6a2aa7b5247f4e75259d51108[ALL] 02f442706d23bf3400d96ba54c9ab54a7ac0a15a4a969b5756ca72588c6c9c9963",
				"hex": "483045022057d48cdd2ba3eaf0c5b6fb04768170e50830f001ec2f476a0cf5e490e2673450022100b9a057699d913a2215b147a27e1c61b6b2d196a6a2aa7b5247f4e75259d51108012102f442706d23bf3400d96ba54c9ab54a7ac0a15a4a969b5756ca72588c6c9c9963"
			},
			"votype": "pubkeyhash"
		}],
		"txouts": [{
			"amount": "0.05",
			"type": "pubkeyhash",
			"spent": true,
			"addresses": ["LbonesQ7pYjfeX8SCnihs4Y53BRYkuxor7"],
			"script": {
				"asm": "OP_DUP OP_HASH160 b5e8223d2f49348c99f0b8a9971ccedd9a6fb3da OP_EQUALVERIFY OP_CHECKSIG",
				"hex": "76a914b5e8223d2f49348c99f0b8a9971ccedd9a6fb3da88ac",
				"reqsigs": 1
			}
		}, {
			"amount": "0.00014521",
			"type": "pubkeyhash",
			"spent": true,
			"addresses": ["LQgaa4x3Dh8bs1ZdB1LgrWWTAiwWK7QD4U"],
			"script": {
				"asm": "OP_DUP OP_HASH160 3be1c0903a68529c07f048b474c000208e82b619 OP_EQUALVERIFY OP_CHECKSIG",
				"hex": "76a9143be1c0903a68529c07f048b474c000208e82b61988ac",
				"reqsigs": 1
			}
		}]
	}],
	"meta": {
		"totalCount": 25,
		"index": 23,
		"limit": 2,
		"results": 2
	}
}
```

### Create, sign and send a transaction to the blockchain

```java
final TransactionService btcTransactionService = btc.getTransactionService();
CreateTransaction ct = new CreateTransaction();

List<CreateTransaction.Inputs> inputs = new ArrayList<>();
CreateTransaction.Inputs input1 = new CreateTransaction.Inputs();
input1.setAddress("mtFYoSowT3i649wnBDYjCjewenh8AuofQb");
input1.setValue(0.0003);
inputs.add(input1);

CreateTransaction.Inputs input2 = new CreateTransaction.Inputs();
input2.setAddress("mn6GtNFRPwXtW7xJqH8Afck7FbVoRi6NF1");
input2.setValue(0.001);
inputs.add(input2);

ct.setInputs(inputs);

List<CreateTransaction.Outputs> outputs = new ArrayList<>();
CreateTransaction.Outputs output = new CreateTransaction.Outputs();
output.setAddress("mrnWMV41vXivQX9yiY9ACSK5uPo3TfJdv9");
output.setValue(0.0013);
outputs.add(output);

ct.setOutputs(outputs);

//setting fee value is mandatory, however setting fee address is optional
CreateTransaction.Fee fee = new CreateTransaction.Fee();
fee.setValue(0.00145);
fee.setAddress("mmskWH7hG9CJNzb16JaVFJyWdgAwcVEAkz");
ct.setFee(fee);

final List<String> wifs = new ArrayList<String>(){{
   add("cUGddnJmuzfzpWXNwt1SRnQ8GMqZdQ1vg8BtwjG8f275pvExPzaX");
   add("cSEjySAREyai8eQhgoqixzmxCeSP8QtbwHxptL8ijofg68ZMjoud");
   add("cPo4XXgsnkVdg93GqR8M1iCDGk6Tgywk5gng4rSpoMVzpQx13WmA");
}};

ApiResponse res = btcTransactionService.newTx(ct, wifs);
System.out.println(res.getResponse());
```

```json
{
	"payload": {
		"txid": "fa4ea6eb1947ae94040fd416afd8262016e6f8c0e69bae94c1dd9a4a80a92b7e"
	}
}
```
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
