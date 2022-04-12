:chicken: 
:rooster:
:hatched_chick:
:hatching_chick: 
:egg:
:fried_egg: 

https://www.tutorialspoint.com/solidity/solidity_interfaces.htm

https://solidity-by-example.org/


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

# 🐓 Solidity By Example

## 🐥 Hello World

pragma specifies the compiler version of Solidity.

```js
// SPDX-License-Identifier: GPL-3.0
// compiler version must be greater than or equal to 0.8.10 and less than 0.9.0
pragma solidity ^0.8.0; 

contract HelloWorld {
    string public greet = "Hello World!";
}
```

<br>
<br>
<br>

## 🐥 First Application

Here is a simple contract that you can get, increment and decrement the count store in this contract.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint public count;

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count++;
    }

    // Function to decrement count by 1
    function dec() public {
        // This function will fail if count = 0
        count -= 1;
    }
}
```

<br>
<br>
<br>

## 🐥 First Application

Here we introduce you to some primitive data types available in Solidity.

 - boolean
 - uint
 - int
 - address

 ```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Primitives {
    bool public boo = true;

    /*
    uint stands for unsigned integer, meaning non negative integers
    different sizes are available
        uint8   ranges from 0 to 2 ** 8 - 1
        uint16  ranges from 0 to 2 ** 16 - 1
        ...
        uint256 ranges from 0 to 2 ** 256 - 1
    */
    uint8 public u8 = 1;
    uint public u256 = 456;
    uint public u = 123; // uint is an alias for uint256

    /*
    Negative numbers are allowed for int types.
    Like uint, different ranges are available from int8 to int256
    
    int256 ranges from -2 ** 255 to 2 ** 255 - 1
    int128 ranges from -2 ** 127 to 2 ** 127 - 1
    */
    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // int is same as int256

    // minimum and maximum of int
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    /*
    In Solidity, the data type byte represent a sequence of bytes. 
    Solidity presents two type of bytes types :

     - fixed-sized byte arrays
     - dynamically-sized byte arrays.
     
     The term bytes in Solidity represents a dynamic array of bytes. 
     It’s a shorthand for byte[] .
    */
    bytes1 a = 0xb5; //  [10110101]
    bytes1 b = 0x56; //  [01010110]

    // Default values
    // Unassigned variables have a default value
    bool public defaultBoo; // false
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}
 ```

<br>
<br>
<br>

## 🐥 Variables
There are 3 types of variables in Solidity

 - local
    - declared inside a function
    - not stored on the blockchain
 - state
    - declared outside a function
    - stored on the blockchain
 - global (provides information about the blockchain)

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Variables {
    // State variables are stored on the blockchain.
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        // Local variables are not saved to the blockchain.
        uint i = 456;

        // Here are some global variables
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }
}
```

<br>
<br>
<br>

## 🐥 Constants

Constants are variables that cannot be modified.

Their value is hard coded and using constants can save gas cost.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Constants {
    // coding convention to uppercase constant variables
    address public constant MY_ADDRESS = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UINT = 123;
}
```

<br>
<br>
<br>

## 🐥 Immutable

Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Immutable {
    // coding convention to uppercase constant variables
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;

    constructor(uint _myUint) {
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }
}
```

<br>
<br>
<br>

## 🐥 Reading and Writing to a State Variable

To write or update a state variable you need to send a transaction.

On the other hand, you can read state variables, for free, without any transaction fee.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract SimpleStorage {
    // State variable to store a number
    // internal is the default visibility for state variables.
    uint public num;

    // You need to send a transaction to write to a state variable.
    function set(uint _num) public {
        num = _num;
    }

    // You can read from a state variable without sending a transaction.
    function get() public view returns (uint) {
        return num;
    }
}
```

<br>
<br>
<br>

## 🐥 Ether and Wei

Transactions are paid with ether.

Similar to how one dollar is equal to 100 cent, one ether is equal to `10^18` wei.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherUnits {
    uint public oneWei = 1 wei;
    // 1 wei is equal to 1
    bool public isOneWei = 1 wei == 1;

    uint public oneEther = 1 ether;
    // 1 ether is equal to 10^18 wei
    // 'e'(exponent) means 10^N
    //     1e+03: 1000
    //     1e-03: 0.001
    bool public isOneEther = 1 ether == 1e18;
}
```

<br>
<br>
<br>

## 🐥 Gas

How much `ether` do you need to pay for a transaction?

You pay `gas spent * gas price` amount of `ether, where:

 - `gas` is a unit of computation
 - `gas spent` is the total amount of gas used in a transaction
 - `gas price` is how much `ether` you are willing to pay per `gas`

Transactions with higher gas price have higher priority to be included in a block. Unspent gas will be refunded.

### 🐣 Gas Limit

There are 2 upper bounds to the amount of gas you can spend

- `gas limit` (max amount of gas you're willing to use for your transaction, set by you)
- `block gas limit` (max amount of gas allowed in a block, set by the network)

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Gas {
    uint public i = 0;

    // Using up all of the gas that you send causes your transaction to fail.
    // State changes are undone.
    // Gas spent are not refunded.
    function forever() public {
        // Here we run a loop until all of the gas are spent
        // and the transaction fails
        while (true) {
            i += 1;
        }
    }
}
```

###### 나중에 한번 Gas가 Refunded 되는지 확인해보자.

<br>
<br>
<br>

## 🐥 If / Else

Solidity supports conditional statements `if`, `else if` and `else`.

```js

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract IfElse {
    function foo(uint x) public pure returns (uint) {
        if (x < 10) {
            return 0;
        } else if (x < 20) {
            return 1;
        } else {
            return 2;
        }
    }

    function ternary(uint _x) public pure returns (uint) {
        // if (_x < 10) {
        //     return 1;
        // }
        // return 2;

        // shorthand way to write if / else statement
        return _x < 10 ? 1 : 2;
    }
}
```

<br>
<br>
<br>

## 🐥 For and While Loop

Solidity supports `for`, `while`, and `do while` loops.

Don't write loops that are unbounded as this can hit the gas limit, causing your transaction to fail.

For the reason above, `while` and `do while` loops are rarely used.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Loop {
    function loop() public {
        // for loop
        for (uint i = 0; i < 10; i++) {
            if (i == 3) {
                // Skip to next iteration with continue
                continue;
            }
            if (i == 5) {
                // Exit loop with break
                break;
            }
        }

        // while loop
        uint j;
        while (j < 10) {
            j++;
        }
    }
}
```

<br>
<br>
<br>

## 🐥 Mapping

Maps are created with the syntax `mapping(keyType => valueType)`.

The `keyType` can be any built-in value type, bytes, string, or any contract.

`valueType` can be any type including another mapping or an array.

Mappings are not iterable.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Mapping {
    // Mapping from address to uint
    mapping(address => uint) public myMap;

    function get(address _addr) public view returns (uint) {
        // Mapping always returns a value.
        // If the value was never set, it will return the default value.
        return myMap[_addr];
    }

    function set(address _addr, uint _i) public {
        // Update the value at this address
        myMap[_addr] = _i;
    }

    function remove(address _addr) public {
        // Reset the value to the default value.
        delete myMap[_addr];
    }
}

contract NestedMapping {
    // Nested mapping (mapping from address to another mapping)
    mapping(address => mapping(uint => bool)) public nested;

    function get(address _addr1, uint _i) public view returns (bool) {
        // You can get values from a nested mapping
        // even when it is not initialized
        return nested[_addr1][_i];
    }

    function set(
        address _addr1,
        uint _i,
        bool _boo
    ) public {
        nested[_addr1][_i] = _boo;
    }

    function remove(address _addr1, uint _i) public {
        delete nested[_addr1][_i];
    }
}
```


<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 

<br>
<br>
<br>

## 🐥 