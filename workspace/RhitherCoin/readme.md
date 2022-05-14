# Rhither Coin

This is `Ethereum Coin DEMO` project. 

I hope it will be useful demonstration for those who are new to the Ethereum project development.

We will not use remix IDE to understand how to fundamentally develop Ethereum-based DApps.


## 1. Overview

 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `local network`.
 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `test network`.
 - Use [Geth](https://geth.ethereum.org/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract `local network`.
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract `test network`.
 - Use [Truffle](https://trufflesuite.com/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 - Use [Hardhat](https://hardhat.org/) deploy smart contract `local network`.
 - Use [Hardhat](https://hardhat.org/) deploy smart contract `test network`.
 - Use [Hardhat](https://hardhat.org/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 
## 2. Prerequisite

 - Install `Git` to use `bash` if your OS platform is Window > [download](https://git-scm.com/downloads)
    - Please use `bash` terminal.
 - Install `Node.js` over 14 ver. > [website](https://nodejs.org/en/)
 - Install `Geth` > [download](https://geth.ethereum.org/docs/install-and-build/installing-geth)
 - Make an account for `infura.io` > [sign up](https://infura.io/)
 - Install `Metamask`(Wallet) as Google Chrome's extensions program (you need to install `Chrome Browser` before).

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

## 4. Running DEMO


<br><br><br><br><br>

## 5. Getting Started

Create a directory before you begin.

```
mkdir eth
cd eth
mkdir go-ethereum
mkdir hardhat
mkdir truffle
```

<br><br><br><br><br><hr>

### [ 1 ] Geth

#### - Build Private Network(`Local Network`)

 1. Go to `/eth/go-ethereum`

 2. Create 3 accounts and password files

 - miner
```sh
geth account new --datadir data
--> Public address of the key:   0x9E199512339F8Ed8182A92F52D51EaE90ACeCD73
```
 - account1
```sh
geth account new --datadir data
--> Public address of the key:   0xd6c36E40DE2d010b7325386Db5975e99a082505d
```
 - account2
```
geth account new --datadir data
--> Public address of the key:   0xA2401d5935191E50C6D1a49450dc0aA1d3247d5e
```

The directory `data/keystore` will be created.

 - check accounts

```sh
geth account list --datadir data
```
 4. Create password files `miner.txt`, `account1.txt`,`account2.txt`, and input the password text entered on the terminal when we created the account.

 5. Create genesis json

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
    "d6c36e40de2d010b7325386db5975e99a082505d": { "balance": "500000" },
    "a2401d5935191e50c6d1a49450dc0aa1d3247d5e": { "balance": "500000" }
  }
}
```
 6. Create genesis block

```sh
geth init --datadir data genesis.json
```

The `data/geth` directory will be created.

 7. Running as `local network` via `miner` (need 2 terminals)

<!-- 
```sh
geth --networkid 15 --nodiscover --maxpeers 0 --datadir data --http --allow-insecure-unlock --mine console
``` -->

<br><br><br>

##### `terminal A`

```sh
geth --datadir data --http --http.api personal,eth,net,web3 --dev --allow-insecure-unlock --unlock 0x9e199512339f8ed8182a92f52d51eae90acecd73 --keystore data/keystore --password miner.txt console
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

##### `terminal B`

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
eth.sendTransaction({from: eth.accounts[1],to: eth.accounts[2], value: "20000"})
```

 - (6) check balances

```sh
eth.getBalance(eth.accounts[1]) //500000
eth.getBalance(eth.accounts[2]) //500000
```
We need to mine transactions.

<br><br><br>

##### `terminal A`

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
eth.getBalance(eth.accounts[1]) //459000
eth.getBalance(eth.accounts[2]) //520000
```


<br><br><br><br><br>

#### - Create Smart Contract

 1. Go to `/eth/go-ethereum`

 2. Create directory and get inside

```sh
mkdir contracts
cd contracts
```

 3. Create `utils/SafeMath.sol`

```sol
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

library SafeMath {

    function add(uint256 num1, uint256 num2) external pure returns (uint256) {
        unchecked {
            uint256 result = num1 + num2;
            require(result >= num1, "SafeMath: Addition cannot overflow");
            return result;
        }
    }

    function sub(uint256 num1, uint256 num2) external pure returns (uint256) {
        unchecked {
            uint256 result = num1 - num2;
            require(num2 <= num1, "SafeMath: Subtraction cannot overflow");
            return result;
        }
    }

    function mul(uint256 num1, uint256 num2) external pure returns (uint256) {
        unchecked {
            if (num1 == 0) {
                return 0;
            }

            uint256 result = num1 * num2;
            require(result / num1 == num2, "SafeMath: Multiplication cannot overflow");
            return result;
        }
    }

    function div(uint256 num1, uint256 num2) external pure returns (uint256) {
        unchecked {
            require(num2 > 0, "SafeMath: The divisor cannot be zero");
            return num1 / num2;
        }
    }

    function mod(uint256 num1, uint256 num2) external pure returns (uint256) {
        unchecked {
            require(num2 > 0, "SafeMath: The divisor cannot be zero");
            return num1 % num2;
        }
    }
    
}
```

 4. Create `utils/Context.sol`
 
```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}
```
 5. Create `extensions/IERC20Metadata.sol`
 
```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IERC20Metadata{

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);
}
```

 6. Create `IERC20.sol`

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IERC20 {

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}
```

 7. Create `ERC20.sol`

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./extensions/IERC20Metadata.sol";
import "./utils/Context.sol";
import "./utils/SafeMath.sol";

contract ERC20 is Context, IERC20, IERC20Metadata {

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    bool private _locked;

    modifier noZeroAddress(address from, address to) {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");
        _;
    }

    modifier noReentrancy() {
        require(!_locked, "No reentrancy");

        _locked = true;
        _;
        _locked = false;
    }

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function name() public view virtual override returns (string memory) {
        return _name;
    }

    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender(); // from
        _transfer(owner, to, amount);
        return true;
    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public virtual override noReentrancy returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual noZeroAddress(from, to){
        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        _balances[from] = SafeMath.sub(fromBalance, amount);
        _balances[to] = SafeMath.add(_balances[to], amount);
        emit Transfer(from, to, amount);
    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual noZeroAddress(owner, spender){
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if(currentAllowance != type(uint256).max ) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            _approve(owner, spender, SafeMath.sub(currentAllowance, amount));
        }
    }
    
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");
        _totalSupply = SafeMath.add(_totalSupply, amount);
        _balances[account] = SafeMath.add(_balances[account], amount);
        emit Transfer(address(0), account, amount);
    }
}
```
 
 8. Create `RhitherCoin.sol`

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC20.sol";

contract RhitherCoin is ERC20 {
    constructor(uint256 issueAmount) ERC20("RhitherCOIN", "Rhither") {
        address tokenIssuer = _msgSender();
        require(tokenIssuer != address(0), "RhitherCoin: The tokenIssuer is zero address");
        uint256 unit = 10**uint256(decimals()); // imitating 10^18wei
        _mint(tokenIssuer, SafeMath.mul(issueAmount, unit)); 
    }
}
```

 - [Reference - Open Zeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20)

<br><br><br><br><br>

#### - Compile Smart Contracts

 1. Go to `/eth/go-ethereum/contracts`

 2. The `solc` module is required to compile source files written in `solidity`
 
```sh
npm i -D solc@0.8.13
```

 3. Create `bin` and `abi`

```sh
npm run solc
```

<br><br><br><br><br>

#### - Deploy Smart Contract to `local network`

 1. Go to `/eth/go-ethereum`

 2. install 