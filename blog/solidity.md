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

    // 160-bit Ethereum address (20 Bytes)
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

## 🐥 Array

Array can have a compile-time fixed size or a dynamic size.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Array {
    // Several ways to initialize an array
    uint[] public arr;
    uint[] public arr2 = [1, 2, 3];
    // Fixed sized array, all elements initialize to 0
    uint[10] public myFixedSizeArr;

    function get(uint i) public view returns (uint) {
        return arr[i];
    }

    // Solidity can return the entire array.
    // But this function should be avoided for
    // arrays that can grow indefinitely in length.
    function getArr() public view returns (uint[] memory) {
        return arr;
    }

    function push(uint i) public {
        // Append to array
        // This will increase the array length by 1.
        arr.push(i);
    }

    function pop() public {
        // Remove last element from array
        // This will decrease the array length by 1
        arr.pop();
    }

    function getLength() public view returns (uint) {
        return arr.length;
    }

    function remove(uint index) public {
        // Delete does not change the array length.
        // It resets the value at index to it's default value,
        // in this case 0
        delete arr[index];
    }

    function examples() external {
        // create array in memory, only fixed size can be created
        uint[] memory a = new uint[](5);
    }
}
```

### 🐣 Examples of removing array element

Remove array element by shifting elements from right to left

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ArrayRemoveByShifting {
    // [1, 2, 3] -- remove(1) --> [1, 3, 3] --> [1, 3]
    // [1, 2, 3, 4, 5, 6] -- remove(2) --> [1, 2, 4, 5, 6, 6] --> [1, 2, 4, 5, 6]
    // [1, 2, 3, 4, 5, 6] -- remove(0) --> [2, 3, 4, 5, 6, 6] --> [2, 3, 4, 5, 6]
    // [1] -- remove(0) --> [1] --> []

    uint[] public arr;

    function remove(uint _index) public {
        require(_index < arr.length, "index out of bound");

        for (uint i = _index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    function test() external {
        arr = [1, 2, 3, 4, 5];
        remove(2);
        // [1, 2, 4, 5]
        assert(arr[0] == 1);
        assert(arr[1] == 2);
        assert(arr[2] == 4);
        assert(arr[3] == 5);
        assert(arr.length == 4);

        arr = [1];
        remove(0);
        // []
        assert(arr.length == 0);
    }
}
```

Remove array element by copying last element into to the place to remove

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ArrayReplaceFromEnd {
    uint[] public arr;

    // Deleting an element creates a gap in the array.
    // One trick to keep the array compact is to
    // move the last element into the place to delete.
    function remove(uint index) public {
        // Move the last element into the place to delete
        arr[index] = arr[arr.length - 1];
        // Remove the last element
        arr.pop();
    }

    function test() public {
        arr = [1, 2, 3, 4];

        remove(1);
        // [1, 4, 3]
        assert(arr.length == 3);
        assert(arr[0] == 1);
        assert(arr[1] == 4);
        assert(arr[2] == 3);

        remove(2);
        // [1, 4]
        assert(arr.length == 2);
        assert(arr[0] == 1);
        assert(arr[1] == 4);
    }
}
```

<br>
<br>
<br>

## 🐥 Enum

Solidity supports enumerables and they are useful to model choice and keep track of state.

Enums can be declared outside of a contract.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Enum {
    // Enum representing shipping status
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    // Default value is the first element listed in
    // definition of the type, in this case "Pending"
    Status public status;

    // Returns uint
    // Pending  - 0
    // Shipped  - 1
    // Accepted - 2
    // Rejected - 3
    // Canceled - 4
    function get() public view returns (Status) {
        return status;
    }

    // Update status by passing uint into input
    function set(Status _status) public {
        status = _status;
    }

    // You can update to a specific enum like this
    function cancel() public {
        status = Status.Canceled;
    }

    // delete resets the enum to its first value, 0
    function reset() public {
        delete status;
    }
}
```

### 🐣 Declaring and importing Enum

File that the enum is declared in

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
// This is saved 'EnumDeclaration.sol'

enum Status {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}
```
File that imports the enum above

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./EnumDeclaration.sol";

contract Enum {
    Status public status;

}
```


<br>
<br>
<br>

## 🐥 Structs

You can define your own type by creating a `struct`.

They are useful for grouping together related data.

Structs can be declared outside of a contract and imported in another contract.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // An array of 'Todo' structs
    Todo[] public todos;

    function create(string memory _text) public {
        // 3 ways to initialize a struct
        // - calling it like a function
        todos.push(Todo(_text, false));

        // key value mapping
        todos.push(Todo({text: _text, completed: false}));

        // initialize an empty struct and then update it
        Todo memory todo;
        todo.text = _text;
        // todo.completed initialized to false

        todos.push(todo);
    }

    // Solidity automatically created a getter for 'todos' so
    // you don't actually need this function.
    function get(uint _index) public view returns (string memory text, bool completed) {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // update text
    function update(uint _index, string memory _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }

    // update completed
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
```

### 🐣 Declaring and importing Struct

File that the struct is declared in

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

struct Todo {
    string text;
    bool completed;
}
```
File that imports the struct above

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./StructDeclaration.sol";

contract Todos {
    // An array of 'Todo' structs
    Todo[] public todos;
}
```

<br>
<br>
<br>

## 🐥 Data Locations - Storage, Memory and Calldata

Variables are declared as either `storage`, `memory` or `calldata` to explicitly specify the location of the data.

 - `storage` : variable is a state variable (store on blockchain). Use storage if your argument will already exist in storage, to prevent copying something in storage over into memory unnecessarily.
 - `memory` : variable is in memory and it exists while a function is being called. Use memory if it needs to be mutable. It only exists within the function, and when the function is done, that var will be deleted. Data location can only be specified for `array`, `struct` or `mapping` types.
 - `calldata` : special data location that contains function arguments. Use calldata when read-only is fine. calldata is like memory but can't be changged(immutalbe)

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract DataLocations {
    uint[] public arr;
    mapping(uint => address) map;
    struct MyStruct {
        uint foo;
    }
    mapping(uint => MyStruct) myStructs;

    function f() public {
        // call _f with state variables
        _f(arr, map, myStructs[1]);

        // get a struct from a mapping
        MyStruct storage myStruct = myStructs[1];
        // create a struct in memory
        MyStruct memory myMemStruct = MyStruct(0);
    }

    function _f(
        uint[] storage _arr,
        mapping(uint => address) storage _map,
        MyStruct storage _myStruct
    ) internal {
        // do something with storage variables
    }

    // You can return memory variables
    function g(uint[] memory _arr) public returns (uint[] memory) {
        // do something with memory array
    }

    function h(uint[] calldata _arr) external {
        // do something with calldata array
    }
}
```

<br>
<br>
<br>

## 🐥 Function

There are several ways to return outputs from a function.

Public functions cannot accept certain data types as inputs or outputs

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Function {
    // Functions can return multiple values.
    function returnMany()
        public
        pure
        returns (
            uint,
            bool,
            uint
        )
    {
        return (1, true, 2);
    }

    // Return values can be named.
    function named()
        public
        pure
        returns (
            uint x,
            bool b,
            uint y
        )
    {
        return (1, true, 2);
    }

    // Return values can be assigned to their name.
    // In this case the return statement can be omitted.
    function assigned()
        public
        pure
        returns (
            uint x,
            bool b,
            uint y
        )
    {
        x = 1;
        b = true;
        y = 2;
    }

    // Use destructuring assignment when calling another
    // function that returns multiple values.
    function destructuringAssignments()
        public
        pure
        returns (
            uint,
            bool,
            uint,
            uint,
            uint
        )
    {
        (uint i, bool b, uint j) = returnMany();

        // Values can be left out.
        (uint x, , uint y) = (4, 5, 6);

        return (i, b, j, x, y);
    }

    // Cannot use map for either input or output

    // Can use array for input
    function arrayInput(uint[] memory _arr) public {}

    // Can use array for output
    uint[] public arr;

    function arrayOutput() public view returns (uint[] memory) {
        return arr;
    }
}
```

<br>
<br>
<br>

## 🐥 View and Pure Functions

Getter functions can be declared `view` or `pure`.

`View` function declares that no state will be changed.

`Pure` function declares that no state variable will be changed or read.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // Promise not to modify or read from the state.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
```

<br>
<br>
<br>

## 🐥 Error

An error will undo all changes made to the state during a transaction.

You can throw an error by calling `require`, `revert` or `assert`.

 - `require` : 조건 불만족 시, return 함수 종료. 때문에 함수 초반부에 선언된다. Gas 낭비 줄임. validate inputs and conditions before execution
 - `assert` : 조건이 만족되지 않아도 함수 끝까지 실행됨. 그 후 에러 발생.
 - `revert` : 조건X, similar to require. Custom Error 발생시킬 때 사용.

Use custom error to save gas.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Error {
    function testRequire(uint _i) public pure {
        // Require should be used to validate conditions such as:
        // - inputs
        // - conditions before execution
        // - return values from calls to other functions
        require(_i > 10, "Input must be greater than 10");
    }

    function testRevert(uint _i) public pure {
        // Revert is useful when the condition to check is complex.
        // This code does the exact same thing as the example above
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    function testAssert() public view {
        // Assert should only be used to test for internal errors,
        // and to check invariants.

        // Here we assert that num is always equal to 0
        // since it is impossible to update the value of num
        assert(num == 0);
    }

    // custom error
    error InsufficientBalance(uint balance, uint withdrawAmount);

    function testCustomError(uint _withdrawAmount) public view {
        uint bal = address(this).balance;
        if (bal < _withdrawAmount) {
            revert InsufficientBalance({balance: bal, withdrawAmount: _withdrawAmount});
        }
    }
}
```

Here is another example

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Account {
    uint public balance;
    uint public constant MAX_UINT = 2**256 - 1;

    function deposit(uint _amount) public {
        uint oldBalance = balance;
        uint newBalance = balance + _amount;

        // balance + _amount does not overflow if balance + _amount >= balance
        require(newBalance >= oldBalance, "Overflow");

        balance = newBalance;

        assert(balance >= oldBalance);
    }

    function withdraw(uint _amount) public {
        uint oldBalance = balance;

        // balance - _amount does not underflow if balance >= _amount
        require(balance >= _amount, "Underflow");

        if (balance < _amount) {
            revert("Underflow");
        }

        balance -= _amount;

        assert(balance <= oldBalance);
    }
}
```

<br>
<br>
<br>

## 🐥 Function Modifier

Modifiers are code that can be run before and / or after a function call.

Modifiers can be used to:

 - Restrict access
 - Validate inputs
 - Guard against reentrancy hack

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract FunctionModifier {
    // We will use these variables to demonstrate how to use
    // modifiers.
    address public owner;
    uint public x = 10;
    bool public locked;

    constructor() {
        // Set the transaction sender as the owner of the contract.
        owner = msg.sender;
    }

    // Modifier to check that the caller is the owner of
    // the contract.
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // Underscore is a special character only used inside
        // a function modifier and it tells Solidity to
        // execute the rest of the code.
        _;
    }

    // Modifiers can take inputs. This modifier checks that the
    // address passed in is not the zero address.
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not valid address");
        _;
    }

    function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
        owner = _newOwner;
    }

    // Modifiers can be called before and / or after a function.
    // This modifier prevents a function from being called while
    // it is still executing.
    modifier noReentrancy() {
        require(!locked, "No reentrancy");

        locked = true;
        _;
        locked = false;
    }

    function decrement(uint i) public noReentrancy {
        x -= i;

        if (i > 1) {
            decrement(i - 1);
        }
    }
}
```

<br>
<br>
<br>

## 🐥 Events

Events allow logging to the Ethereum blockchain. Some use cases for events are:

- Listening for events and updating user interface
- A cheap form of storage

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Event {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        emit Log(msg.sender, "Hello World!");
        emit Log(msg.sender, "Hello EVM!");
        emit AnotherLog();
    }
}
```

###### Topic이 무엇인지 알아보자 (https://ethereum.stackexchange.com/questions/12950/what-are-solidity-events-and-how-they-are-related-to-topics-and-logs)
###### `indexed`를 활용하는 예제를 만들어보자

<br>
<br>
<br>

## 🐥 Constructor

A `constructor` is an optional function that is executed upon contract creation.

Here are examples of how to pass arguments to constructors.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Base contract X
contract X {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }
}

// Base contract Y
contract Y {
    string public text;

    constructor(string memory _text) {
        text = _text;
    }
}

// There are 2 ways to initialize parent contract with parameters.

// Pass the parameters here in the inheritance list.
contract B is X("Input to X"), Y("Input to Y") {

}

contract C is X, Y {
    // Pass the parameters here in the constructor,
    // similar to function modifiers.
    constructor(string memory _name, string memory _text) X(_name) Y(_text) {}
}

// Parent constructors are always called in the order of inheritance
// regardless of the order of parent contracts listed in the
// constructor of the child contract.

// Order of constructors called:
// 1. X
// 2. Y
// 3. D
contract D is X, Y {
    constructor() X("X was called") Y("Y was called") {}
}

// Order of constructors called:
// 1. X
// 2. Y
// 3. E
contract E is X, Y {
    constructor() Y("Y was called") X("X was called") {}
}
```

<br>
<br>
<br>

## 🐥 Inheritance

Solidity supports multiple inheritance. Contracts can inherit other contract by using the `is` keyword.

Function that is going to be overridden by a child contract must be declared as `virtual`.

Function that is going to override a parent function must use the keyword `override`.

Order of inheritance is important.

You have to list the parent contracts in the order from “most base-like” to “most derived”.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/* Graph of inheritance
    A
   / \
  B   C
 / \ /
F  D,E

*/

contract A {
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

// Contracts inherit other contracts by using the keyword 'is'.
contract B is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}

// Contracts can inherit from multiple parent contracts.
// When a function is called that is defined multiple times in
// different contracts, parent contracts are searched from
// right to left, and in depth-first manner.

contract D is B, C {
    // D.foo() returns "C"
    // since C is the right most parent contract with function foo()
    function foo() public pure override(B, C) returns (string memory) {
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() returns "B"
    // since B is the right most parent contract with function foo()
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo();
    }
}

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}
```

<br>
<br>
<br>

## 🐥 Shadowing Inherited State Variables

Unlike functions, state variables cannot be overridden by re-declaring it in the child contract.

Let's learn how to correctly override inherited state variables.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

// Shadowing is disallowed in Solidity 0.6
// This will not compile
// contract B is A {
//     string public name = "Contract B";
// }

contract C is A {
    // This is the correct way to override inherited state variables.
    constructor() {
        name = "Contract C";
    }

    // C.getName returns "Contract C"
}
```

<br>
<br>
<br>

## 🐥 Calling Parent Contracts

Parent contracts can be called directly, or by using the keyword `super`.

By using the keyword `super`, all of the immediate parent contracts will be called.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/* Inheritance tree
   A
 /  \
B   C
 \ /
  D
*/

contract A {
    // This is called an event. You can emit events from your function
    // and they are logged into the transaction log.
    // In our case, this will be useful for tracing function calls.
    event Log(string message);

    function foo() public virtual {
        emit Log("A.foo called");
    }

    function bar() public virtual {
        emit Log("A.bar called");
    }
}

contract B is A {
    function foo() public virtual override {
        emit Log("B.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public virtual override {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("C.bar called");
        super.bar();
    }
}

contract D is B, C {
    // Try:
    // - Call D.foo and check the transaction logs.
    //   Although D inherits A, B and C, it only called C and then A.
    // - Call D.bar and check the transaction logs
    //   D called C, then B, and finally A.
    //   Although super was called twice (by B and C) it only called A once.

    function foo() public override(B, C) {
        super.foo();
    }

    function bar() public override(B, C) {
        super.bar();
    }
}
```

<br>
<br>
<br>

## 🐥 Visibility

Functions and state variables have to declare whether they are accessible by other contracts.

Functions can be declared as

- `public` - any contract and account can call
- `private` - only inside the contract that defines the function
- `internal` - only inside contract that inherits an internal function
- `external` - only other contracts and accounts can call

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Base {
    // Private function can only be called
    // - inside this contract
    // Contracts that inherit this contract cannot call this function.
    function privateFunc() private pure returns (string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    // Internal function can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    function internalFunc() internal pure returns (string memory) {
        return "internal function called";
    }

    function testInternalFunc() public pure virtual returns (string memory) {
        return internalFunc();
    }

    // Public functions can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    // - by other contracts and accounts
    function publicFunc() public pure returns (string memory) {
        return "public function called";
    }

    // External functions can only be called
    // - by other contracts and accounts
    function externalFunc() external pure returns (string memory) {
        return "external function called";
    }

    // This function will not compile since we're trying to call
    // an external function here.
    // function testExternalFunc() public pure returns (string memory) {
    //     return externalFunc();
    // }

    // State variables
    string private privateVar = "my private variable";
    string internal internalVar = "my internal variable";
    string public publicVar = "my public variable";
    // State variables cannot be external so this code won't compile.
    // string external externalVar = "my external variable";
}

contract Child is Base {
    // Inherited contracts do not have access to private functions
    // and state variables.
    // function testPrivateFunc() public pure returns (string memory) {
    //     return privateFunc();
    // }

    // Internal function call be called inside child contracts.
    function testInternalFunc() public pure override returns (string memory) {
        return internalFunc();
    }
}
```

<br>
<br>
<br>

## 🐥 Interface

 - cannot have any functions implemented
 - can inherit from other interfaces
 - all declared functions must be external
 - cannot declare a constructor
 - cannot declare state variables

 ```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Counter {
    uint public count;

    function increment() external {
        count += 1;
    }
}

interface ICounter {
    function count() external view returns (uint);

    function increment() external;
}

contract MyContract {
    function incrementCounter(address _counter) external {
        ICounter(_counter).increment();
    }

    function getCount(address _counter) external view vreturns (uint) {
        return ICounter(_counter).count();
    }
}

// Uniswap example
interface UniswapV2Factory {
    function getPair(address tokenA, address tokenB)
        external
        view
        returns (address pair);
}

interface UniswapV2Pair {
    function getReserves()
        external
        view
        returns (
            uint112 reserve0,
            uint112 reserve1,
            uint32 blockTimestampLast
        );
}

contract UniswapExample {
    address private factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
    address private dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address private weth = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function getTokenReserves() external view returns (uint, uint) {
        address pair = UniswapV2Factory(factory).getPair(dai, weth);
        (uint reserve0, uint reserve1, ) = UniswapV2Pair(pair).getReserves();
        return (reserve0, reserve1);
    }
}
 ```

위 예제는 좀 어렵다. 다른 예제를 만들어보자.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter{
    uint private num;

    function inc() public {
        num++;
    }

    function dec() public {
        num--;
    }

    function getCount() public view returns(uint){
        return num;
    }
}

interface ICounter{
    // You can declare enum and struct in interface
    enum EnumExample{
        A,B,C
    }

    struct StructExample{
        string name;
        uint age;
    }

    function inc() external;
    function dec() external;
    function getCount() external view returns(uint);
}

// ICounter에 정의된 추상 메서드들을 모두 구현해야 함
// Visibility는 external 및 public만 가능(private, internal 불가)
contract CounterImpl is ICounter{

    uint public num;

    function inc() public {
        num++;
    }

    function dec() public {
        num--;
    }

    function getCount() public view returns(uint){
        return num;
    }

}

contract CounterCaller {

    function incTwice(address _counterContract) public {
        ICounter(_counterContract).inc();
        ICounter(_counterContract).inc();
    }

    function decTwice(address _counterContract) public {
        ICounter(_counterContract).dec();
        ICounter(_counterContract).dec();
    }

}

// ICounter에 명시된 추상 메서드를 모두 구현하지 않아도 이렇게 간접적으로 사용할 수 있음
contract HalfCounter{
    uint private num;

    function inc() public {
        num++;
    }

    function getCount() public view returns(uint){
        return num;
    }
}
```

<br>
<br>
<br>

## 🐥 Payable

Functions and addresses declared `payable` can receive `ether` into the contract.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Payable {
    // Payable address can receive Ether
    address payable public owner;

    // Payable constructor can receive Ether
    constructor() payable {
        owner = payable(msg.sender);
    }

    // Function to deposit Ether into this contract.
    // Call this function along with some Ether.
    // The balance of this contract will be automatically updated.
    function deposit() public payable {}

    // Call this function along with some Ether.
    // The function will throw an error since this function is not payable.
    function notPayable() public {}

    // Function to withdraw all Ether from this contract.
    function withdraw() public {
        // get the amount of Ether stored in this contract
        uint amount = address(this).balance;

        // send all Ether to owner
        // Owner can receive Ether since the address of owner is payable
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    // Function to transfer Ether from this contract to address from input
    function transfer(address payable _to, uint _amount) public {
        // Note that "to" is declared as payable
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
    }
}
```

### 🐣 Do we have to use `payable` keyword to use `msg.sender` and `msg.value`?

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payable {
    function getSener() public view returns(address){
        return msg.sender;
    }

    /* "msg.value" and "callvalue()" can only be used in payable public functions. 
    Make the function "payable" or use an internal function 
    
    internal이나 private을 사용하면 컴파일 에러 없이 선언할 수 있지만,
    직접적으로 호출해서 활용할 수 없다.*/
    function getValue() internal view returns(uint){
        return msg.value;
    }
}
```

### 🐣 `address` vs. `address payable`

- `address`: Holds a 20 byte value (size of an Ethereum address).

- `address payable`: Same as address, but with the additional members transfer and send.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payable {

    event Log(bool isSuccess, bytes data);

    // Payable address can receive ether
    address payable public owner;
    
    /* address payable로 선언하지 않아도 본 컨트렉트 코드를 전부 실행하는데 문제는 없다.
       그러나 transfer, send 함수는 사용하지 못한다.*/
    // address public owner;


    // Payable constructer can receive ether
    constructor() payable{
        owner = payable(msg.sender);
    }

    /* 이렇게 선언하여도 컴파일 에러도 안나고 Ether와 함께 컨트렉트를 생성하지만 않으면 배포도 가능하다.
       그러나 만일 Ether와 함께 컨트렉트를 생성하게 되면 
       생성자 함수에 Payable이 없어 Ether을 받을 수 없어 에러가 난다.*/
    // constructor(){
    //     owner = payable(msg.sender);
    // }

    function deposit() public payable{}

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function withdraw() public {
        uint amount = address(this).balance;
        (bool isSuccess, bytes memory data) = owner.call{value:amount}("");
        emit Log(isSuccess, data);
        require(isSuccess, "Withdraw error is occureds");
    }

}
```

 - [관련 문서: Solidity 0.8.13 - Address](https://docs.soliditylang.org/en/v0.8.13/types.html#Address)

### 🐣 Casting (Type conversion)

Implicit conversions from `address payable` to `address` are allowed, whereas conversions from `address` to `address payable` must be explicit via `payable(address)`.

```js
address payable payableSenderAddr = msg.sender;
address itAlsoPayableAddr1 = payableSenderAddr; // 암묵적 캐스팅
address itAlsoPayableAddr2 = address(payableSenderAddr); // 명시적 캐스팅
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