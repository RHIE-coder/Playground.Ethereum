# Geth (Go Ethereum)

## [ 1 ] Build Private Network(`Local Network`)

#### 1. Go to `eth/go-ethereum`

#### 2. Create 3 accounts and password files

 - miner account
```sh
geth account new --datadir data
--> Public address of the key:   0x9E199512339F8Ed8182A92F52D51EaE90ACeCD73
```
 - developer account
```sh
geth account new --datadir data
--> Public address of the key:   0xd6c36E40DE2d010b7325386Db5975e99a082505d
```
 - client account
```
geth account new --datadir data
--> Public address of the key:   0xA2401d5935191E50C6D1a49450dc0aA1d3247d5e
```

The directory `data/keystore` will be created.

 - check accounts

```sh
geth account list --datadir data
```
#### 4. Create password files `miner.txt`, `dev.txt`,`client.txt`, and input the password text entered on the terminal when we created the account.

#### 5. Create genesis json

 - `genesis.json`

```js
{
  "config": {
    "chainId": 15,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "ethash": {}
  },
  "difficulty": "10",
  "gasLimit": "8000000",
  "alloc": {
    "9e199512339f8ed8182a92f52d51eae90acecd73": { "balance": "0" },
    "d6c36e40de2d010b7325386db5975e99a082505d": { "balance": "5000000000000000000" },
    "a2401d5935191e50c6d1a49450dc0aa1d3247d5e": { "balance": "5000000000000000000" }
  }
}
```
#### 6. Create genesis block

```sh
geth init --datadir data genesis.json
```

The `data/geth` directory will be created.

#### 7. Running as `local network` via `miner` (need 2 terminals)

<!-- 
```sh
geth --networkid 15 --nodiscover --maxpeers 0 --datadir data --http --allow-insecure-unlock --mine console
``` -->

<br><br><br>

### -  `terminal A`

```sh
geth --datadir data --http --http.api personal,eth,net,web3 --dev --allow-insecure-unlock --unlock 0x9e199512339f8ed8182a92f52d51eae90acecd73 --keystore data/keystore --password miner.txt --rpc.allow-unprotected-txs console
```
As we can see the output text in terminal, we will get network(chainid=15) and http server(endpoint=127.0.0.1:8545)

 - (1) check accounts

```sh
eth.accounts
```

 - (2) check balances

```sh
eth.getBalance(eth.accounts[0]) //0
eth.getBalance(eth.accounts[1]) //500000
eth.getBalance(eth.accounts[2]) //500000
```

<br><br><br>

### - `terminal B`

 - (3) attach to `local network`

```sh
geth attach http://localhost:8545
```

 - (4) unlock account1

```
personal.unlockAccount(eth.accounts[1])
```

 - (5) send transaction

```sh
eth.sendTransaction({from: eth.accounts[1],to: eth.accounts[2], value: "2000000000000000000"})
```

 - (6) check balances

```sh
eth.getBalance(eth.accounts[1]) //5000000000000000000
eth.getBalance(eth.accounts[2]) //5000000000000000000
```
We need to mine transactions.

<br><br><br>

### -  `terminal A`

 - (7) The network still has one block(genesis block)

```sh
eth.blockNumber //0
```
 - (8) We can see the genesis block using below command.

```sh
eth.getBlock(0)
```
 - (9)  Start mining, afterwhile stop mining.

```sh
miner.start(1)
```

```sh
miner.stop()
```

 - (10) Check block number. If it's still `0`, mining again.

```sh
eth.blockNumber
```

 - (11) We can see transactions list at `second block`

```sh
eth.getBlock(1)
```

 - (12) Let's see balances again

```sh
eth.getBalance(eth.accounts[0]) //6000000000000021000
eth.getBalance(eth.accounts[1]) //2999999999999979000
eth.getBalance(eth.accounts[2]) //7000000000000000000
```

<br><br><br><br><br>

## [ 2 ] Linking Accounts with `Metamask`

We need private keys, but Geth does not offer commands to export private key.

#### 1. Import `keythereum` module

```sh
npm i -D keythereum
```

#### 2. Create JS file : `eth/go-ethereum/get-pri-key.js`

```js
/* eslint-disable prettier/prettier */
const keythereum = require("keythereum");
const path = require("path");
const fs = require("fs");

/**
 * @author rhie-coder
 * @desc This script file will help you get private keys.
 * Geth's not support to export private key directly.
 */
const rootDir = path.join(__dirname, "data");
const keystoreDir = path.join(rootDir, "keystore");

function printHelp() {
  console.log(` -- usage
      node get-pri-key.js <password1> <password2> ... : get private keys
      node get-pri-key.js help : print help
  `);
}

function argsFilter(fileList) {
  const data = [];
  for (let i = 2; i < fileList.length + 2; i++) {
    const arg = process.argv[i];
    if (arg) {
      data.push(arg);
    } else {
      printHelp();
      throw new Error("<please check password arguments>");
    }
  }
  return data;
}

function mapping(fileList, passwordList) {
  const objList = [];

  if (fileList.length !== passwordList.length) {
    throw new Error("<lists of file and password is not matched>");
  }

  for (let i = 0; i < fileList.length; i++) {
    objList.push({ account: fileList[i], password: passwordList[i] });
  }

  return objList;
}

function getPrivateKey(targets, dir) {
  targets.map((obj) => {
    const keyInfo = keythereum.importFromFile(obj.account, dir);
    const privateKey = keythereum.recover(obj.password, keyInfo);
    obj.privateKey = privateKey.toString("hex");
    return obj;
  });
}

if (process.argv[2] === "help") {
  printHelp();
  process.exit(0);
}

const fileList = fs.readdirSync(keystoreDir);
const passwordList = argsFilter(fileList);

const targets = mapping(fileList, passwordList);

// change filename to address
targets.map((obj) => {
  obj.account = JSON.parse(
    fs.readFileSync(path.join(keystoreDir, obj.account))
  ).address;

  return obj;
});

getPrivateKey(targets, rootDir);

console.log(targets);

```

#### 2. Importing accounts using private keys from `Metamask`

```sh
$ node get-pri-key.js 1111 2222 3333
[
  {
    account: '9e199512339f8ed8182a92f52d51eae90acecd73',
    password: '1111',
    privateKey: '13c17497d3820fb224f00625b51573272b234ea46890665274e14b3dc972d367'
  },
  {
    account: 'd6c36e40de2d010b7325386db5975e99a082505d',
    password: '2222',
    privateKey: '6c7d10de8059d105bd4a49c98575acff9fe11f89bb6a2e9b5462834a5be72bfb'
  },
  {
    account: 'a2401d5935191e50c6d1a49450dc0aa1d3247d5e',
    password: '3333',
    privateKey: '269ee69d6041cb90422bf3b00fc5fe3120668119857ebfbe85515b8229421047'
  }
]
```
It may take several minutes to display the balance of your local network account.

<br><br><br><br><br>

## [ 3 ] Create Smart Contract

#### 1. Go to `eth/go-ethereum`

#### 2. Create directory and get inside

```sh
mkdir contracts
cd contracts
```

#### 3. Create smart contracts

[ERC20 Samples](./contracts.md)



<br><br><br><br><br>

## [ 4 ] Compile Smart Contracts

#### 1. Go to `eth/go-ethereum/contracts`

#### 2. The `solc` module is required to compile source files written in `solidity`
 
```sh
npm i -D solc@0.8.13
```

#### 3. Create `bin` and `abi`, using `solc` module.

```sh
npm run solc
```

<br><br><br><br><br>

## [ 5 ] Deploy Smart Contract

#### 1. Import `Web3` module

```sh
npm i --save web3
```
```sh
npm i -D @types/web3
```

#### 2. 

```sh
const RhitherContract =  eth.contract("./contracts/abi/eth_go-ethereum_contracts_RhitherCoin_sol_RhitherCoin.abi")

const bytecode =  eth.contract("./contracts/abi/eth_go-ethereum_contracts_RhitherCoin_sol_RhitherCoin.abi")
```