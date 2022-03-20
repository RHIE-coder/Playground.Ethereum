# :dart: Examples

## :lock: Grammar Basics

### :key: Hello World

```s
// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.10 <0.9.0;

contract HelloWorld {
    string public great = "Hello World!";
}
```

<br>
<br>
<br>

## :key: First Application

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Counter {
    uint public count;

    //function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    //function to increment count by 1
    function inc() public {
        count += 1;
    }

    //function to decrement count by 1
    function dec() public {
        count -= 1;
    }
}
```

<br>
<br>
<br>

### :key: Prmitive Data Types

```s
// SPDX-License-Identifer: MIT
pragma solidity >=0.8.0 <0.9.0;

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
    bool public defaultBoo; //false
    uint public defaultUint; //0
    int public defaultint; //0
    address public defaultAddress; //0x0000000000000000000000000000000000000000
}
```

<br>
<br>
<br>

### :key: Variables

Solidity에는 3가지 타입의 변수들이 존재한다.

#### - local
 - 함수 안에 정의됨
 - 블록체인에 저장되지 않음

### - state
 - 함수 밖에 정의됨
 - 블록체인에 저장됨

### - global
 - 블록체인에 대한 정보를 제공함

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Variables {
    // State varialbes are stored on the blockchain.
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public{
        // Local variables are not saved to the blockchain
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }
}
```

<br>
<br>
<br>

### :key: Constants

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Constants {
    // coding convention to uppercase constant variables
    address public constant MY_ADDRESS = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UINT = 123;
}
```

<br>
<br>
<br>

### :key: Immutable

immutable 변수는 constant와 비슷하다. 그러나 immutable로 선언된 변수는 생성자(constructor) 함수에서 수정될 수 있으며 이후 수정할 수 없다.

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Immutable {
    // coding convention to uppercase constant variables
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;

    contstructor(uint _myUint){
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }
}
```

<br>
<br>
<br>

### :key: State Variable

To write or update a state variable you need to send a transaction.

On the other hand, you can read state variables, for free, without any transaction fee.

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
    // State variable to store a number
    uint public num;

    // You need to send a transaction to write to a state variable.
    function set(uint _num) public {
        num = _num;
    }

    // You can read from a state variable without sending a transactions
    function get() public view returns (uint) {
        return num;
    }
}
```

<hr>
<hr>
<hr>

### :key: Ether and Wei

Transactions are paid with ether.

Similar to how one dollar is equal to 100 cent, one ether is equal to 1018 wei.

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract EtherUnits {
    uint public oneWei = 1 wei;
    // 1 wei is equal to 1
    bool public isOneWei = 1 wei == 1;

    uint public oneEther = 1 ether;
    // 1 ether is equal to 10^18 wei
    bool public isOneEther = 1 ether == 1e18;
}
```

<br>
<br>
<br>

### :key: Gas

How much `ether` do you need to pay for a transaction?

You pay gas spent * gas price amount of ether, where

 - gas is unit of computation
 - gas spent is the total amount of gas used in transaction
 - gas price is how much ether you are willing to pay per gas

Transactions with higher gas price have higher priority to be included in a block.

Unspent gas will be refunded.

#### - Gas Limit

There are 2 upper bounds to the amount of gas you can spend

 - gas limit (max amount of gas you're willing to use for your transaction, set by you)
 - block gas limit (max amount of gas allowed in a block, set by the network)

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Gas {
    uint public i = 0;

    /* 
        Using up all of the gas that you send causes your transaction to fail.
        State changes are undone.
        Gas spent are not refunded.
    */
    function forever() public {
        // Here we run a loop until all of the gas are spent and the transaction fails
        while(true){
            i += 1;
        }
    }
}
```

<br>
<br>
<br>

### :key: If / Else

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

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
        return _x < 10 ? 1 : 2;
    }
}
```

<br>
<br>
<br>

### :key: For and While Loop

Solidity는 `for`, `while`, 그리고 `do while`문을 지원한다.

그러나 `while`과 `do while`은 거의 쓰이지 않는다.

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Loop {
    function loop() public {
        for (uint i = 0; i < 10; i++){
            if (i == 3) {
                continue;
            }
            if (i == 5) {
                break;
            }
        }

        uint j;
        while (j < 10){
            j++;
        }
    }
}
```

<br>
<br>
<br>

### :key: Mapping

`mapping(keyType => valueType)`

The keyType can be any built-in value type, bytes, string, or any contract.

valueType can be any type including another mapping or an array.

Mappings are not iterable.

```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Mapping {
    // Mapping form address to uint
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
        // You can get values from a nested mapping even when it is not initialized
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
<br>

### :key: Array

Array can have a compile-time fixed size or a dynamic size.


```s
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Array {
    // Several ways to initialize an array
    uint[] public arr;
    uint[] public arr2;
    // Fixed sized array, all elements initialize to 0
    uint[10] public myFixedSizeArr;

    function get(uint i) public view returns (uint) {
        return arr[i];
    }

    /* 
        Solidity can return the entire array.
        But this function should be avoided for arrays that can grow indefinitely in length.
    */
    function getArr() public view returns (uint[] memory) {
        return arr;
    }

    function push(uint i) public {
        // append to array. this will increase the array length by 1.
        arr.push(1);
    }

    function pop() public {
        // remove last element from array. this will decrease the array length by 1.
        arr.pop();
    }

    function getLength() public view returns (uint) {
        return arr.length;
    }

    function remove(uint index) public {
        /* 
            Delete does not change the array length.
            It resets the value at index to it's default value, in this case 0
        */
        delete arr[index];
    }

    function examples() external {
        //create array in memory, only fixed size can be created
        uint[] memory a = new uint[](5);
    }
}
```


<hr>
<br>
<br>
<br>
<br>
<br>

## :lock: ---
