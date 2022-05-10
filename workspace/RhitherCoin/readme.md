# Rhither Coin

This is `Ethereum Coin DEMO` project. 

I hope it will be useful demonstration for those who are new to the Ethereum project development.


## 1. Overview

 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `local network`.
 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `test network`.
 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract `local network`.
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract `local network`.
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 - Use [Hardhat](https://hardhat.org/) deploy smart contract `local network`.
 - Use [Hardhat](https://hardhat.org/) deploy smart contract `local network`.
 - Use [Hardhat](https://hardhat.org/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 
 
## 2. Prerequisite

 - Install `Git` to use `bash` if your OS platform is Window > [download](https://git-scm.com/downloads)
    - Please use `bash` terminal.
 - Install `Node.js` over 14 ver. > [website](https://nodejs.org/en/)
 - Install `Geth` > [download](https://geth.ethereum.org/docs/install-and-build/installing-geth)
 - Make an account for `infura.io` > [sign up](https://infura.io/)

## 3. Versions when this project is created

The purpose of this section is to provide information if this project fails to build.

```
node -v : v14.17.6
npm -v : 6.14.15
git --version : git version 2.35.0.windows.1
geth version : 1.10.15-stable-8be800ff
solidity ^0.8.0
```

## 4. Running DEMO

## 5. Getting Started

Create a directory before you begin.

```
mkdir eth
cd eth
mkdir go-ethereum
mkdir hardhat
mkdir truffle
```

### - Geth

 - path: `/eth/go-ethereum`

 1. The `solc` module is required to compile source files written in `solidity`

```
npm i -D solc@0.8.13
```
 2. 