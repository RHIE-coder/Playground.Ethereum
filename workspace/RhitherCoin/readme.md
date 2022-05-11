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
 - Use [Web3](https://web3js.readthedocs.io/) deploy smart contract to `local network`.
 - Use [Web3](https://web3js.readthedocs.io/) deploy smart contract to `test network`.
 - Use [Web3](https://web3js.readthedocs.io/) deploy smart contract to `test network` via [infura.io](https://infura.io/).
 
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

 1. Go to `/eth/go-ethereum`

 2. The `solc` module is required to compile source files written in `solidity`

```
npm i -D solc@0.8.13
```

 3. Create directory and get inside

```
mkdir contracts
cd contracts
```

 4. Create `SafeMath.sol`, `Context.sol`, `IERC20.sol`, `IERC20Metadata.sol`,`ERC20.sol`, `RhitherCoin.sol`

 - [Reference - Open Zeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20)

 - `utils/SafeMath.sol`

```sol
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @author rhie-coder
 * @dev To prevent underflow or overflow.
 * We need to add the `unchecked` keyword to use `require`.
 * We don't need SafeMath anymore since ^0.8.0, 
 * because the overflow checking is built-in function now (occur `revert`).
 */
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

 - `utils/Context.sol`

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

 - `extensions/IERC20Metadata.sol`

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/** 
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 */ 
interface IERC20Metadata{

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);
}
```

 - `IERC20.sol`

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
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

 - `ERC20.sol`

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./extensions/IERC20Metadata.sol";
import "./utils/Context.sol";
import "./utils/SafeMath.sol";

/**
 * @author rhie-coder
 * @dev It has removed hook functions.
 * Added Modifiers and the SafeMath library version.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {

    // These are defined in {IERC20}
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;

    // These are defined in {IERC20Metadata}
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

 - `RhitherCoin.sol`

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
