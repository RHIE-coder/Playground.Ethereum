# Rhither Coin

This is `Ethereum Coin DEMO` project. 

I hope it will be useful demonstration for those who are new to the Ethereum project development.

We will not use remix IDE to understand how to fundamentally develop Ethereum-based DApps.


<br><br><br><br><br>

## 1. Overview

### - Go Ethereum (Geth)

 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `local network`.
 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `test network`.
 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `test network` via [infura.io](https://infura.io/).

### - Truffle
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract `local network`.
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract `test network`.
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract to `test network` via [infura.io](https://infura.io/).

### - Hardhat
 - Use [Hardhat](https://hardhat.org/) deploy smart contract `local network`.
 - Use [Hardhat](https://hardhat.org/) deploy smart contract `test network`.
 - Use [Hardhat](https://hardhat.org/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 
<br><br><br><br><br>

## 2. Prerequisite

 - Install `Git` to use `bash` if your OS platform is Window > [download](https://git-scm.com/downloads)
    - Please use `bash` terminal.
 - Install `Node.js` over 14 ver. > [website](https://nodejs.org/en/)
 - Install `Geth` > [download](https://geth.ethereum.org/docs/install-and-build/installing-geth)
 - Make an account for `infura.io` > [sign up](https://infura.io/)
 - Install `Metamask`(Wallet) as Google Chrome's extensions program (you need to install `Chrome Browser` before).

<br><br><br><br><br>

## 3. Versions when this project is created

The purpose of this section is to provide information if this project fails to build.

```
node -v : v14.17.6
npm -v : 6.14.15
git --version : git version 2.35.0.windows.1
geth version : 1.10.15-stable-8be800ff
solidity ^0.8.0
```

<br><br><br><br><br>

## 4. Getting Started

#### 1. Import base modules

```sh
npm install
```

#### 2. Create a directory before you begin.

```
mkdir eth
cd eth
mkdir go-ethereum
mkdir hardhat
mkdir truffle
```

####  3. Choose what you want, and deploy smart contract

 - [Go Ethereum](./tutorial/geth.md)
 - [Truffle]()
 - [Hardhat]()


#### 4. install 


<br><br><br><br><br><hr>

 2. install `Web3`

```sh
npm i --save web3
npm i -D @types/web3
```

<br><br><br><br><br><hr>
