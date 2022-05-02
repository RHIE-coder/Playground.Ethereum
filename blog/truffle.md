# 🐓 Getting Started

## 🐥 Basic command to deploy the smart contract

```bash
truffle init
```
스마트 컨트랙트 작성 후 `truffle-config.js` 기반으로 컴파일 진행

```bash
truffle compile
```
리셋을 하지 않으면 이전에 배포된 파일을 제외하고 배포하게 된다.
```bash
truffle migrate --reset
```
접근하기(web3 함수 사용가능)
```bash
truffle console
```

```bash
truffle test test/example.test.js
```

<br>
<br>
<br>


## 🐥 Directory information

1. contracts : Solidity 스마트 컨트랙트 소스
2. migrations : 블록체인 네트워크에 Deploy
3. test : mocha 기반 테스팅
4. build : 컴파일된 스마트 컨트랙트 소스
 - JSON안의 Bytecode는 블록체인 내부에 올라가고 ABI는 웹 어플리케이션에서 사용

<br>
<br>
<br>


## 🐥 Migration

[more details](https://trufflesuite.com/docs/truffle/getting-started/running-migrations/)

### 🐣 `artifacts.require()`

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

### 🐣 `module.exports`

All migrations must export a function via the `module.exports` syntax. The function exported by each migration should accept a deployer object as its first parameter. This object aides in deployment by both providing a clear syntax for deploying smart contracts as well as performing some of deployment's more mundane duties, such as saving deployed artifacts for later use. The deployer object is your main interface for staging deployment tasks, and its API is described at the bottom of this page.

```js
const ContractOne = artifacts.require("ContractOne");
const ContractTwo = artifacts.require("ContractTwo");

module.exports = function(deployer) {
  deployer.deploy(ContractOne);
  deployer.deploy(ContractTwo);
};
```

### 🐣 Deployer API

 - `deployer.deploy(contract, args..., options)`
 - `deployer.link(library, destinations)`

Addictionally, you also can use the `Promise` and `Async/Await`.

