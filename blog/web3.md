# 🐔 <목차>

> ## 🐓 Example

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<hr>

🐔 목차 🐓 대주제 🐥 중주제 🐣 소주제 🥚 본문 🍳 자세히 

# 🐓 Web3 Library Overview

## 🐥 About `web3.js`

### 🐣 Library Desc

 - `web3-eth` is for the ethereum blockchain and smart contracts.
 - `web3-shh` is for the whisper protocol, to communicate p2p and broadcast.
 - `web3-bzz` is for the swarm protocol, the decentralized file storage.
 - `web3-utils` contains useful helper functions for Dapp developers.

#### 🥚 Metamask

크롬의 확장 프로그램인 메타마스크를 설치하였다면 `window.ethereum`의 객체를 확인할 수 있다.

```js
// In Node.js use: const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
```

<br>
<br>
<br>

## 🐥 Web3 Object

```js
var Web3 = require('web3');

> Web3.version
> Web3.utils
> Web3.modules
> Web3.givenProvider
> Web3.providers
```

### 🐣 `utils`의 주요 속성 및 메서드

#### :egg: randomHex()
#### :egg: BN()
- BN()
- wordSize
- isBN()
- max()
- min()
- red()
- mont() 
#### :egg: isBN()
#### :egg: isBigNumber()
#### :egg: isHex()
#### :egg: isHexStrict()
#### :egg: sha3()
#### :egg: sha3Raw()
#### :egg: keccak256()
#### :egg: soliditySha3()
#### :egg: soliditySha3Raw()
#### :egg: encodePacked()
#### :egg: isAddress()
#### :egg: checkAddressChecksum()
#### :egg: toChecksumAddress()
#### :egg: toHex()
#### :egg: toBN()
#### :egg: bytesToHex()
#### :egg: hexToBytes()
#### :egg: hexToNumberString()
#### :egg: hexToNumber()
#### :egg: toDecimal()
#### :egg: numberToHex()
#### :egg: fromDecimal()
#### :egg: hexToUtf8()
#### :egg: hexToString()
#### :egg: toUtf8()
#### :egg: stripHexPrefix()
#### :egg: utf8ToHex()
#### :egg: stringToHex()
#### :egg: fromUtf8()
#### :egg: hexToAscii()
#### :egg: toAscii()
#### :egg: asciiToHex()
#### :egg: fromAscii()
#### :egg: unitMap
 - noether:     '0',
 - wei:         '1',
 - kwei:        '1 000',
 - femtoether:  '1 000',
 - mwei:        '1 000 000',
 - picoether:   '1 000 000',
 - gwei:        '1 000 000 000',
 - nanoether:   '1 000 000 000',
 - szabo:       '1 000 000 000 000',
 - microether:  '1 000 000 000 000',
 - finney:      '1 000 000 000 000 000',
 - milliether:  '1 000 000 000 000 000',
 - ether:       '1 000 000 000 000 000 000',
 - kether:      '1 000 000 000 000 000 000 000',
 - grand:       '1 000 000 000 000 000 000 000',
 - mether:      '1 000 000 000 000 000 000 000 000',
 - gether:      '1 000 000 000 000 000 000 000 000 000',
 - tether:      '1 000 000 000 000 000 000 000 000 000 000'
#### :egg: toWei()
#### :egg: fromWei()
#### :egg: padLeft()
#### :egg: leftPad()
#### :egg: padRight()
#### :egg: rightPad()
#### :egg: toTwosComplement()
#### :egg: isBloom()
#### :egg: isUserEthereumAddressInBloom()
#### :egg: isContractAddressInBloom()
#### :egg: isTopic()
#### :egg: isTopicInBloom()
#### :egg: isInBloom()
#### :egg: compareBlockNumbers()
#### :egg: toNumber()

### 🐣 `modules`

```js
modules: {
    Eth: [Function: Eth] { givenProvider: null, providers: [Object] },
    Net: [Function: Net] { givenProvider: null, providers: [Object] },
    Personal: [Function: Personal] { givenProvider: null, providers: [Object] },
    Shh: [Function: Shh] { givenProvider: null, providers: [Object] },
    Bzz: [Function: Bzz] { givenProvider: null }
},
```

#### :egg: `Web3.modules`가 반환하는 대표적인 Object Constructor

 - `Eth` - Constructor: The Eth module for interacting with the Ethereum network (web3.eth).
 - `Net` - Constructor: The Net module for interacting with network properties (web3.eth.net).
 - `Personal` - Constructor: The Personal module for interacting with the Ethereum accounts (web3.eth.personal).
 - `Shh` - Constructor: The Shh module for interacting with the whisper protocol (web3.shh).
 - `Bzz` - Constructor: The Bzz module for interacting with the swarm network (web3.bzz).


### 🐣 `givenProvider` and `providers`

```js
givenProvider: null,
providers: {
    WebsocketProvider: [Function: WebsocketProvider],
    HttpProvider: [Function: HttpProvider],
    IpcProvider: [Function: IpcProvider]
}
```

<br>
<br>
<br>

## 🐥 Web3 Instance

### 🐣 base

 - version
 - utils
 - givenProvider
 - providers

### 🐣 `Request Manager` to manage providers and interaction setting

#### :egg: `currentProvider`: [Getter/Setter]
#### :egg: `setProvider`: [Function (anonymous)]
#### :egg: `setRequestManager`: [Function (anonymous)]

```js
_requestManager: RequestManager {
provider: null,
providers: {
    WebsocketProvider: [Function: WebsocketProvider],
    HttpProvider: [Function: HttpProvider],
    IpcProvider: [Function: IpcProvider]
},
subscriptions: Map(0) {}
}
```
#### :egg: `BatchRequest`: [Function: bound Batch]
#### :egg: `Method`: [Function: Method]

### 🐣 `Eth`

#### :egg: `Request Manager` are included
#### :egg: Contract

```js
Contract: [Function: Contract] {
    setProvider: [Function (anonymous)],
    defaultAccount: null,
    defaultBlock: 'latest',
    transactionBlockTimeout: 50,
    transactionConfirmationBlocks: 24,
    transactionPollingTimeout: 750,
    transactionPollingInterval: 1000,
    blockHeaderTimeout: 10,
    handleRevert: false,
    _requestManager: [RequestManager],
    _ethAccounts: [Accounts],
    currentProvider: null
}
```
#### :egg: Accounts

```js
accounts: Accounts {
    currentProvider: [Getter/Setter],
    _requestManager: [RequestManager],
    givenProvider: null,
    providers: [Object],
    _provider: null,
    setProvider: [Function (anonymous)],
    setRequestManager: [Function (anonymous)],
    _ethereumCall: [Object],
    wallet: [Wallet]
},
```
#### :egg: Net

```js
net: Net {
    currentProvider: [Getter/Setter],
    _requestManager: [RequestManager],
    givenProvider: null,
    providers: [Object],
    _provider: null,
    setProvider: [Function (anonymous)],
    setRequestManager: [Function (anonymous)],
    BatchRequest: [Function: bound Batch],
    extend: [Function],
    getId: [Function],
    isListening: [Function],
    getPeerCount: [Function],
    getNetworkType: [Function: bound getNetworkType]
}
```
#### :egg: Personal

```js
personal: Personal {
    currentProvider: [Getter/Setter],
    _requestManager: [RequestManager],
    givenProvider: null,
    providers: [Object],
    _provider: null,
    setProvider: [Function (anonymous)],
    setRequestManager: [Function (anonymous)],
    BatchRequest: [Function: bound Batch],
    extend: [Function],
    net: [Net],
    defaultAccount: [Getter/Setter],
    defaultBlock: [Getter/Setter],
    getAccounts: [Function],
    newAccount: [Function],
    unlockAccount: [Function],
    lockAccount: [Function],
    importRawKey: [Function],
    sendTransaction: [Function],
    signTransaction: [Function],
    sign: [Function],
    ecRecover: [Function]
}
```
#### :egg: 메서드 리스트

```js
getNodeInfo: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'web3_clientVersion'
}
getProtocolVersion: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_protocolVersion'
}
```
```js
getCoinbase: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_coinbase'
}
```
```js
isMining: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_mining'
}
```
```js
getHashrate: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_hashrate'
}
```
```js
isSyncing: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_syncing'
}
```
```js
getGasPrice: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_gasPrice'
}
```
```js
getFeeHistory: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_feeHistory'
}
```
```js
getAccounts: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_accounts'
}
```
```js
getBlockNumber: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_blockNumber'
}
```
```js
getBalance: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getBalance'
}
```
```js
getStorageAt: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getStorageAt'
}
```
```js
getCode: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getCode'
}
```
```js
getBlock: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: [Function: blockCall]
}
```
```js
getUncle: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: [Function: uncleCall]
}
```
```js
getBlockTransactionCount: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: [Function: getBlockTransactionCountCall]
}
```
```js
getBlockUncleCount: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: [Function: uncleCountCall]
}
```
```js
getTransaction: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getTransactionByHash'
}
```
```js
getTransactionFromBlock: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: [Function: transactionFromBlockCall]
}
```
```js
getTransactionReceipt: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getTransactionReceipt'
}
```
```js
getTransactionCount: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getTransactionCount'
}
```
```js
sendSignedTransaction: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_sendRawTransaction'
}
```
```js
signTransaction: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_signTransaction'
}
```
```js
sendTransaction: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_sendTransaction'
}
```
```js
sign: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_sign'
}
```
```js
call: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_call'
}
```
```js
estimateGas: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_estimateGas'
}
```
```js
submitWork: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_submitWork'
}
```
```js
getWork: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getWork'
}
```
```js
getPastLogs: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getLogs'
}
```
```js
getChainId: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_chainId'
}
```
```js
requestAccounts: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_requestAccounts'
}
```
```js
getProof: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_getProof'
}
```
```js
getPendingTransactions: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_pendingTransactions'
}
```
```js
createAccessList: [Function: send] {
    method: [Method],
    request: [Function: bound ],
    call: 'eth_createAccessList'
}
```
```js
subscribe: [Function (anonymous)]
```
#### :egg: Ens, Iban, ABICoder

 - Ens

```js
ens: ENS {
    eth: [Circular *2],
    _detectedAddress: null,
    _lastSyncCheck: null,
    registry: [Getter],
    resolverMethodHandler: [Getter],
    registryAddress: [Getter/Setter]
}
```
 - Iban

```js
Iban: [class Iban]
```

 - ABICoder

```js
abi: ABICoder {}
```
#### :egg: ETC
```js
handleRevert: [Getter/Setter],
defaultCommon: [Getter/Setter],
defaultHardfork: [Getter/Setter],
defaultChain: [Getter/Setter],
transactionPollingTimeout: [Getter/Setter],
transactionPollingInterval: [Getter/Setter],
transactionConfirmationBlocks: [Getter/Setter],
transactionBlockTimeout: [Getter/Setter],
blockHeaderTimeout: [Getter/Setter],
defaultAccount: [Getter/Setter],
defaultBlock: [Getter/Setter],
maxListenersWarningThreshold: [Getter/Setter],
clearSubscriptions: [Function: bound ],
removeSubscriptionById: [Function: bound ],
```
### 🐣 Net

```js
net: Net {
      currentProvider: [Getter/Setter],
      _requestManager: [RequestManager],
      givenProvider: null,
      providers: [Object],
      _provider: null,
      setProvider: [Function (anonymous)],
      setRequestManager: [Function (anonymous)],
      BatchRequest: [Function: bound Batch],
      extend: [Function],
      getId: [Function],
      isListening: [Function],
      getPeerCount: [Function]
    },
    subscribe: [Function (anonymous)],
    getVersion: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_version'
    },
    getInfo: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_info'
    },
    setMaxMessageSize: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_setMaxMessageSize'
    },
    setMinPoW: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_setMinPoW'
    },
    markTrustedPeer: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_markTrustedPeer'
    },
    newKeyPair: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_newKeyPair'
    },
    addPrivateKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_addPrivateKey'
    },
    deleteKeyPair: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_deleteKeyPair'
    },
    hasKeyPair: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_hasKeyPair'
    },
    getPublicKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_getPublicKey'
    },
    getPrivateKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_getPrivateKey'
    },
    newSymKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_newSymKey'
    },
    addSymKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_addSymKey'
    },
    generateSymKeyFromPassword: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_generateSymKeyFromPassword'
    },
    hasSymKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_hasSymKey'
    },
    getSymKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_getSymKey'
    },
    deleteSymKey: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_deleteSymKey'
    },
    newMessageFilter: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_newMessageFilter'
    },
    getFilterMessages: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_getFilterMessages'
    },
    deleteMessageFilter: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_deleteMessageFilter'
    },
    post: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_post'
    },
    unsubscribe: [Function: send] {
      method: [Method],
      request: [Function: bound ],
      call: 'shh_unsubscribe'
    }
  }
```
### 🐣 Shh

```js
shh: Shh {
    currentProvider: [Getter/Setter],
    _requestManager: RequestManager {
        provider: null,
        providers: [Object],
        subscriptions: Map(0) {}
    },
    givenProvider: null,
    providers: {
        WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider]
    },
    _provider: null,
    setProvider: [Function (anonymous)],
    setRequestManager: [Function (anonymous)],
    BatchRequest: [Function: bound Batch],
    extend: [Function: ex] {
        formatters: [Object],
        utils: [Object],
        Method: [Function: Method]
},
```
### 🐣 Bzz
```js
bzz: Bzz {
    givenProvider: null,
    currentProvider: null,
    isAvailable: [Function (anonymous)],
    upload: [Function (anonymous)],
    download: [Function (anonymous)]
}
```

<br>
<br>
<br>

### :key: web3 contract

#### - 간단한 코드

```js
(async () => {
    const Web3 = require("web3");
    const account = "0x5fD31f16Da87cCB3D34CEC4F08FE4be090B8F04D";
    const contract_address = '0x6c28Cef55caE63Ade447B81107A199c55FC9E6d6';
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    const abi = JSON.parse(await fs.readFile("../build/contracts/hello.json"));
    const helloContract = new web3.eth.Contract(abi.abi, contract_address);
    await helloContract.methods.setNum(10).call(); // just get return value if the return value is exists
    const set_result = await helloContract.methods.setNum(10).send({from:account});
    const get_result = await helloContract.methods.getNum().call();
    console.log(set_result) // will print json that is related to transaction informations
    console.log(get_result) // 10;
})()
```
 - 유의사항

`Ethereum "write" transaction do not have return values`