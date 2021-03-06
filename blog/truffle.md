# ๐ Getting Started

## ๐ฅ Basic command to deploy the smart contract

```bash
truffle init
```
์ค๋งํธ ์ปจํธ๋ํธ ์์ฑ ํ `truffle-config.js` ๊ธฐ๋ฐ์ผ๋ก ์ปดํ์ผ ์งํ

```bash
truffle compile
```
๋ฆฌ์์ ํ์ง ์์ผ๋ฉด ์ด์ ์ ๋ฐฐํฌ๋ ํ์ผ์ ์ ์ธํ๊ณ  ๋ฐฐํฌํ๊ฒ ๋๋ค.
```bash
truffle migrate --reset
```
์ ๊ทผํ๊ธฐ(web3 ํจ์ ์ฌ์ฉ๊ฐ๋ฅ)
```bash
truffle console
```

```bash
truffle test test/example.test.js
```

<br>
<br>
<br>


## ๐ฅ Directory information

1. contracts : Solidity ์ค๋งํธ ์ปจํธ๋ํธ ์์ค
2. migrations : ๋ธ๋ก์ฒด์ธ ๋คํธ์ํฌ์ Deploy
3. test : mocha ๊ธฐ๋ฐ ํ์คํ
4. build : ์ปดํ์ผ๋ ์ค๋งํธ ์ปจํธ๋ํธ ์์ค
 - JSON์์ Bytecode๋ ๋ธ๋ก์ฒด์ธ ๋ด๋ถ์ ์ฌ๋ผ๊ฐ๊ณ  ABI๋ ์น ์ดํ๋ฆฌ์ผ์ด์์์ ์ฌ์ฉ

<br>
<br>
<br>


## ๐ฅ Migration

[more details](https://trufflesuite.com/docs/truffle/getting-started/running-migrations/)

### ๐ฃ `artifacts.require()`

The name specified should match the name of the contract definition within that source file. Do not pass the name of the source file, as files can contain more than one contract.

 - `./contracts/Contracts.sol`

```js
contract ContractOne {
  // ...
}

contract ContractTwo {
  // ...
}
```

and this is how to import them

```js
const ContractOne = artifacts.require("ContractOne");
const ContractTwo = artifacts.require("ContractTwo");
```

### ๐ฃ `module.exports`

All migrations must export a function via the `module.exports` syntax. The function exported by each migration should accept a deployer object as its first parameter. This object aides in deployment by both providing a clear syntax for deploying smart contracts as well as performing some of deployment's more mundane duties, such as saving deployed artifacts for later use. The deployer object is your main interface for staging deployment tasks, and its API is described at the bottom of this page.

```js
const ContractOne = artifacts.require("ContractOne");
const ContractTwo = artifacts.require("ContractTwo");

module.exports = function(deployer) {
  deployer.deploy(ContractOne);
  deployer.deploy(ContractTwo);
};
```

### ๐ฃ Deployer API

 - `deployer.deploy(contract, args..., options)`
 - `deployer.link(library, destinations)`

Addictionally, you also can use the `Promise` and `Async/Await`.

