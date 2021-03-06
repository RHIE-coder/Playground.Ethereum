:chicken: 
:rooster:
:hatched_chick:
:hatching_chick: 
:egg:
:fried_egg: 

https://solidity-by-example.org/


# π <λͺ©μ°¨>

> ## π Example

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

π λͺ©μ°¨ π λμ£Όμ  π₯ μ€μ£Όμ  π£ μμ£Όμ  π₯ λ³Έλ¬Έ π³ μμΈν 


# π Solidity By Example

## π₯ Hello World

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

## π₯ First Application

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

## π₯ Primitive Data Types

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
     Itβs a shorthand for byte[] .
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
###### Solidity does not have the concept of `typeof` or `isinstance`

<br>
<br>
<br>

## π₯ Variables
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

## π₯ Constants

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

## π₯ Immutable

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

### π£ Deep in mutability

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Mutability {

    uint[] public originArr = [1, 2, 3, 4, 5];

    function checkBoolean() public pure returns(bool, bool){
        bool originBool = true;
        bool copyBool = originBool;
        copyBool= false;
        return (originBool, copyBool);
    }

    function checkInteger() public pure returns(uint, uint){
        uint originInt = 100;
        uint copyInt = originInt;
        copyInt= 200;
        return (originInt, copyInt);
    }

    function checkAddress() public pure returns(address, address){
        address originAddr = 0xbFa1c6e350e4f74F27bC9668fb587AdE7F8dcBbE;
        address copyAddr = originAddr;
        copyAddr= 0xEBa43801C256Cc5a1f40d15a8dD26700F40bBdc3;
        return (originAddr, copyAddr);
    }

    function checkString() public pure returns(string memory, string memory){
        string memory originStr = "AAA";
        string memory copyStr = originStr;
        copyStr= "BBB";
        return (originStr, copyStr);        
    }

    
    function checkArray() public view returns(uint[] memory, uint[] memory){
        uint[] memory copyArr = originArr;
        copyArr[0] = 100;
        return (originArr, copyArr);
    }

}
```

<br>
<br>
<br>



## π₯ Reading and Writing to a State Variable

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

## π₯ Ether and Wei

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

## π₯ Gas

How much `ether` do you need to pay for a transaction?

You pay `gas spent * gas price` amount of `ether, where:

 - `gas` is a unit of computation
 - `gas spent` is the total amount of gas used in a transaction
 - `gas price` is how much `ether` you are willing to pay per `gas`

Transactions with higher gas price have higher priority to be included in a block. Unspent gas will be refunded.

### π£ Gas Limit

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

###### λμ€μ νλ² Gasκ° Refunded λλμ§ νμΈν΄λ³΄μ.

<br>
<br>
<br>

## π₯ If / Else

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

## π₯ For and While Loop

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

## π₯ Mapping

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

## π₯ Array

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

### π£ Examples of removing array element

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

## π₯ Enum

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

### π£ Declaring and importing Enum

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

## π₯ Structs

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

### π£ Declaring and importing Struct

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

## π₯ Data Locations - Storage, Memory and Calldata

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

### π£ structs is not implemented when using `calldata`

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Calldata {
    struct MyStruct {
        string name;
        uint[2] nums;
    }

    event LogStruct(MyStruct);
    event LogBytes(bytes);


    // input: ["hello",[11,22]] --> lost string literal
    function structInputAtCalldata(MyStruct calldata paramStruc) public returns(MyStruct memory){
        emit LogStruct(paramStruc);
        bytes memory b = abi.encode(paramStruc);
        emit LogBytes(b);
        MyStruct memory copyStruc = abi.decode(b, (MyStruct));
        emit LogStruct(copyStruc);
        return paramStruc;
    }

    // input: ["hello",[11,22]] --> not lost any data
    function structInputAtMemory(MyStruct memory paramStruc) public returns(MyStruct memory){
        emit LogStruct(paramStruc);
        bytes memory b = abi.encode(paramStruc);
        emit LogBytes(b);
        MyStruct memory copyStruc = abi.decode(b, (MyStruct));
        emit LogStruct(copyStruc);
        return paramStruc;
    }

    // input: ["hello",[11,22]] --> not same
    function structWithCalldata(MyStruct calldata paramStruc) public returns(MyStruct memory){
        MyStruct memory copyStruc = paramStruc;
        copyStruc.name = "world";
        emit LogStruct(paramStruc);
        emit LogStruct(copyStruc);
        return paramStruc;
    }

    // input: ["hello",[11,22]] --> same
    function structWithMemory(MyStruct memory paramStruc) public returns(MyStruct memory){
        MyStruct memory copyStruc = paramStruc;
        copyStruc.name = "world";
        emit LogStruct(paramStruc);
        emit LogStruct(copyStruc);
        return paramStruc;
    }

    event LogStr(string);

    // input: "hello world" --> not same
    function strWithCalldata(string calldata paramStr) public{
        string memory copyStr = paramStr;
        copyStr = "copy spreading";
        emit LogStr(paramStr);
        emit LogStr(copyStr);
    }

    // input: "hello world" --> not same
    function strWithMemory(string memory paramStr) public{
        string memory copyStr = paramStr;
        copyStr = "copy spreading";
        emit LogStr(paramStr);
        emit LogStr(copyStr);
    }

    event LogArr(string[]);

    // input: ["a","b","c"] --> not same
    function strArrWithCalldata(string[] calldata paramArr) public{
        require(paramArr.length > 0, "the length shuold be bigger than 0");
        string[] memory copyArr = paramArr;
        // paramArr[0] = "CHECK"; //compile error: calldata is read-only
        copyArr[0] = "CHECK";
        emit LogArr(paramArr);
        emit LogArr(copyArr);
    }
    
    // input: ["a","b","c"] --> same
    function strArrWithMemory(string[] memory paramArr) public{
        require(paramArr.length > 0, "the length shuold be bigger than 0");
        string[] memory copyArr = paramArr;
        copyArr[0] = "CHECK";
        emit LogArr(paramArr);
        emit LogArr(copyArr);
    }
}
```

 - [issue #9160](https://github.com/ethereum/solidity/issues/9160)
 - [issue #8360](https://github.com/ethereum/solidity/issues/8360)


<br>
<br>
<br>

## π₯ Function

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

## π₯ View and Pure Functions

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

## π₯ Error

An error will undo all changes made to the state during a transaction.

You can throw an error by calling `require`, `revert` or `assert`.

 - `require` : μ‘°κ±΄ λΆλ§μ‘± μ, return ν¨μ μ’λ£. λλ¬Έμ ν¨μ μ΄λ°λΆμ μ μΈλλ€. Gas λ­λΉ μ€μ. validate inputs and conditions before execution
 - `assert` : μ‘°κ±΄μ΄ λ§μ‘±λμ§ μμλ ν¨μ λκΉμ§ μ€νλ¨. κ·Έ ν μλ¬ λ°μ.
 - `revert` : μ‘°κ±΄X, similar to require. Custom Error λ°μμν¬ λ μ¬μ©.

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

## π₯ Function Modifier

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

## π₯ Events

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

###### Topicμ΄ λ¬΄μμΈμ§ μμλ³΄μ (https://ethereum.stackexchange.com/questions/12950/what-are-solidity-events-and-how-they-are-related-to-topics-and-logs)
###### `indexed`λ₯Ό νμ©νλ μμ λ₯Ό λ§λ€μ΄λ³΄μ

<br>
<br>
<br>

## π₯ Constructor

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

## π₯ Inheritance

Solidity supports multiple inheritance. Contracts can inherit other contract by using the `is` keyword.

Function that is going to be overridden by a child contract must be declared as `virtual`.

Function that is going to override a parent function must use the keyword `override`.

Order of inheritance is important.

You have to list the parent contracts in the order from βmost base-likeβ to βmost derivedβ.

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

// Inheritance must be ordered from βmost base-likeβ to βmost derivedβ.
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

## π₯ Shadowing Inherited State Variables

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

## π₯ Calling Parent Contracts

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

## π₯ Visibility

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

## π₯ Interface

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

μ μμ λ μ’ μ΄λ ΅λ€. λ€λ₯Έ μμ λ₯Ό λ§λ€μ΄λ³΄μ.

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

// ICounterμ μ μλ μΆμ λ©μλλ€μ λͺ¨λ κ΅¬νν΄μΌ ν¨
// Visibilityλ external λ° publicλ§ κ°λ₯(private, internal λΆκ°)
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

// ICounterμ λͺμλ μΆμ λ©μλλ₯Ό λͺ¨λ κ΅¬ννμ§ μμλ μ΄λ κ² κ°μ μ μΌλ‘ μ¬μ©ν  μ μμ
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

## π₯ Abstract

```js
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

abstract contract Calculator {

    function implementedFunc() public pure returns(string memory){
        return "this funcion is implemented";
    }

    function getResult() public pure virtual returns(uint);
}

contract Test is Calculator {
    function getResult() public pure override returns(uint) {
        uint a = 1;
        uint b = 2;
        uint result = a + b;
        return result;
    }
}

contract Main {
    event LogNum(uint num);
    event LogStr(string str);

    function doSomething() public {
       Test t = new Test();
       emit LogNum(t.getResult());
       emit LogStr(t.implementedFunc());
    }
}
```

<br>
<br>
<br>

## π₯ Payable

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

### π£ Do we have to use `payable` keyword to use `msg.sender` and `msg.value`?

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payable {
    function getSener() public view returns(address){
        return msg.sender;
    }

    /* "msg.value" and "callvalue()" can only be used in payable public functions. 
    Make the function "payable" or use an internal function 
    
    internalμ΄λ privateμ μ¬μ©νλ©΄ μ»΄νμΌ μλ¬ μμ΄ μ μΈν  μ μμ§λ§,
    μ§μ μ μΌλ‘ νΈμΆν΄μ νμ©ν  μ μλ€.*/
    function getValue() internal view returns(uint){
        return msg.value;
    }
}
```

### π£ `address` vs. `address payable`

- `address`: Holds a 20 byte value (size of an Ethereum address).

- `address payable`: Same as address, but with the additional members transfer and send.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payable {

    event Log(bool isSuccess, bytes data);

    // Payable address can receive ether
    address payable public owner;
    
    /* address payableλ‘ μ μΈνμ§ μμλ λ³Έ μ»¨νΈλ νΈ μ½λλ₯Ό μ λΆ μ€ννλλ° λ¬Έμ λ μλ€.
       κ·Έλ¬λ transfer, send ν¨μλ μ¬μ©νμ§ λͺ»νλ€.*/
    // address public owner;


    // Payable constructer can receive ether
    constructor() payable{
        owner = payable(msg.sender);
    }

    /* μ΄λ κ² μ μΈνμ¬λ μ»΄νμΌ μλ¬λ μλκ³  Etherμ ν¨κ» μ»¨νΈλ νΈλ₯Ό μμ±νμ§λ§ μμΌλ©΄ λ°°ν¬λ κ°λ₯νλ€.
       κ·Έλ¬λ λ§μΌ Etherμ ν¨κ» μ»¨νΈλ νΈλ₯Ό μμ±νκ² λλ©΄ 
       μμ±μ ν¨μμ Payableμ΄ μμ΄ Etherμ λ°μ μ μμ΄ μλ¬κ° λλ€.*/
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

 - [κ΄λ ¨ λ¬Έμ: Solidity 0.8.13 - Address](https://docs.soliditylang.org/en/v0.8.13/types.html#Address)

### π£ Casting (Type conversion)

Implicit conversions from `address payable` to `address` are allowed, whereas conversions from `address` to `address payable` must be explicit via `payable(address)`.

```js
address payable payableSenderAddr = msg.sender;
address itAlsoPayableAddr1 = payableSenderAddr; // μλ¬΅μ  μΊμ€ν
address itAlsoPayableAddr2 = address(payableSenderAddr); // λͺμμ  μΊμ€ν
```

<br>
<br>
<br>

## π₯ Sending Ether (transfer, send, call)

### π£ How to send Ether?

You can send Ether to other contracts by

 - `transfer` (2300 gas, throws error)
 - `send` (2300 gas, returns bool)
 - `call` (forward all gas or set gas, returns bool)

### π£ How to receive Ether?

A contract receiving Ether must have at least one of the functions below

 - `receive() external payable`
 - `fallback() external payable`

`receive()` is called if msg.data is empty, otherwise fallback() is called.

### π£ Which method should you use?

`call` in combination with re-entrancy guard is the recommended method to use after December 2019.

Guard against re-entrancy by

 - making all state changes before calling other contracts
 - using re-entrancy guard modifier

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ReceiveEther {
    /*
    Which function is called, fallback() or receive()?

           send Ether
               |
         msg.data is empty?
              / \
            yes  no
            /     \
receive() exists?  fallback()
         /   \
        yes   no
        /      \
    receive()   fallback()
    */

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    function sendViaTransfer(address payable _to) public payable {
        // This function is no longer recommended for sending Ether.
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // Send returns a boolean value indicating success or failure.
        // This function is not recommended for sending Ether.
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
```

λΉλ‘ `transfer()`μ `send()`ν¨μκ° `payable` μμ±μ μνμ¬ μ κ³΅μ΄ λμ§λ§ gasκ° 2300μ νμ΄ μκ³  μ΄ν Ethereum κ°κ²©μ λ³λμ±μ λμνμ§ λͺ»νκΈ° λλ¬Έμ μμΌλ‘λ `call()`ν¨μλ§ μ¬μ©νλ κ²μ΄ κΆμ₯(recommended)λλ€.

###### Need to study on the gas refund issues(fallback, receive)

<br>
<br>
<br>

## π₯ fallback

`fallback` is a function that does not take any arguments and does not return anything.

It is executed either when

 - a function that does not exist is called or
 - Ether is sent directly to a contract but receive() does not exist or msg.data is not empty

fallback has a 2300 gas limit when called by transfer or send.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Fallback {
    event Log(uint gas);

    // Fallback function must be declared as external.
    fallback() external payable {
        // send / transfer (forwards 2300 gas to this fallback function)
        // call (forwards all of the gas)
        emit Log(gasleft()); // msg.gas is deprecated
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
```


<br>
<br>
<br>

## π₯ Call

`call` is a low level function to interact with other contracts.

This is the recommended method to use when you're just sending Ether via calling the `fallback` function.

However it is not the recommend way to call existing functions.

<br>
<br>
<br>

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Receiver {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);

        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // Let's imagine that contract B does not have the source code for
    // contract A, but we do know the address of A and the function to call.
    function testCallFoo(address payable _addr) public payable {
        // You can send ether and specify a custom gas amount
        (bool success, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
        );

        emit Response(success, data);
    }

    // Calling a function that does not exist triggers the fallback function.
    function testCallDoesNotExist(address _addr) public {
        (bool success, bytes memory data) = _addr.call(
            abi.encodeWithSignature("doesNotExist()")
        );

        emit Response(success, data);
    }
}
```

## π₯ Delegatecall

`delegatecall` is a low level function similar to `call`.

When contract A executes delegatecall to contract B, B's code is excuted

with contract A's storage, msg.sender and msg.value.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// NOTE: Deploy this contract first
contract B {
    // NOTE: storage layout must be the same as contract A
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        // A's storage is set, B is not modified.
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}
```

<br>
<br>
<br>

## π₯ Function Selector

When a function is called, the first 4 bytes of `calldata` specifies which function to call.

This 4 bytes is called a function selector.

Take for example, this code below. It uses `call` to execute `transfer` on a contract at the address `addr`.

```js
addr.call(abi.encodeWithSignature("transfer(address,uint256)", 0xSomeAddress, 123))
```

The first 4 bytes returned from `abi.encodeWithSignature(....)` is the function selector.

Perhaps you can save a tiny amount of gas if you precompute and inline the function selector in your code?

Here is how the function selector is computed.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract FunctionSelector {
    /*
    "transfer(address,uint256)"
    0xa9059cbb
    "transferFrom(address,address,uint256)"
    0x23b872dd
    */
    function getSelector(string calldata _func) external pure returns (bytes4) {
        return bytes4(keccak256(bytes(_func)));
    }
}
```

<br>
<br>
<br>

## π₯ Calling Other Contract (not recomended)

Contract can call other contracts in 2 ways.

The easiest way to is to just call it, like `A.foo(x, y, z)`.

Another way to call other contracts is to use the low-level `call`.

This method is not recommended.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Callee {
    uint public x;
    uint public value;

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }

    function setXandSendEther(uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;

        return (x, value);
    }
}

contract Caller {
    function setX(Callee _callee, uint _x) public {
        uint x = _callee.setX(_x);
    }

    function setXFromAddress(address _addr, uint _x) public {
        Callee callee = Callee(_addr);
        callee.setX(_x);
    }

    function setXandSendEther(Callee _callee, uint _x) public payable {
        (uint x, uint value) = _callee.setXandSendEther{value: msg.value}(_x);
    }
}
```

<br>
<br>
<br>

## π₯ Contract that Creates other Contracts

Contracts can be created by other contracts using the `new` keyword. Since 0.8.0, new keyword supports `create2` feature by specifying `salt` options.


```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Car {
    address public owner;
    string public model;
    address public carAddr;

    constructor(address _owner, string memory _model) payable {
        owner = _owner;
        model = _model;
        carAddr = address(this);
    }
}

contract CarFactory {
    Car[] public cars;

    function create(address _owner, string memory _model) public {
        Car car = new Car(_owner, _model);
        cars.push(car);
    }

    function createAndSendEther(address _owner, string memory _model) public payable {
        Car car = (new Car){value: msg.value}(_owner, _model);
        cars.push(car);
    }

    function create2(
        address _owner,
        string memory _model,
        bytes32 _salt
    ) public {
        Car car = (new Car){salt: _salt}(_owner, _model);
        cars.push(car);
    }

    function create2AndSendEther(
        address _owner,
        string memory _model,
        bytes32 _salt
    ) public payable {
        Car car = (new Car){value: msg.value, salt: _salt}(_owner, _model);
        cars.push(car);
    }

    function getCar(uint _index)
        public
        view
        returns (
            address owner,
            string memory model,
            address carAddr,
            uint balance
        )
    {
        Car car = cars[_index];

        return (car.owner(), car.model(), car.carAddr(), address(car).balance);
    }
}
```

μ μμμμλ `contract CarFactory`κ° `contract Car`μ `new` ν€μλλ₯Ό ν΅ν΄ νΈμΆνμ¬ μ¬μ©νκ³  μλλ°, λ§μΌ `contract CarFactory`κ° λΈλ‘μ²΄μΈ λ€νΈμν¬μ λ°°ν¬κ° λλ©΄ `contract Car`μ μΈμ€ν΄μ€ λν λ°°ν¬κ°λκ³  `contract Car`μ state λ³μ λν ν λΉ λμ΄μ§λ€. μ¦, λ λ€λ₯Έ μ£Όμκ° μκΈ΄λ€.

μλ μμλ₯Ό ν΅ν΄ νμΈν΄λ³΄μ.


```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sample{}

contract Main{
    function checkAddress() public returns(address, address){
        address thisAddr = address(this);
        address sampleAddr = address(new Sample());
        return (thisAddr, sampleAddr);
    }
}
/*  
	"0": "address: 0xfC01E11F9eC3E3D3831C010227D84Fa3E65b2FFB",
	"1": "address: 0xb7b6b4aA81A6b0Dd20500cd19a485a95Fa206687"
*/
```

<br>
<br>
<br>

## π₯ Try Catch

`try / catch` can only catch errors from external function calls and contract creation.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// External contract used for try / catch examples
contract Foo {
    address public owner;

    constructor(address _owner) {
        require(_owner != address(0), "invalid address");
        assert(_owner != 0x0000000000000000000000000000000000000001);
        owner = _owner;
    }

    function myFunc(uint x) public pure returns (string memory) {
        require(x != 0, "require failed");
        return "my func was called";
    }
}

contract Bar {
    event Log(string message);
    event LogBytes(bytes data);

    Foo public foo;

    constructor() {
        // This Foo contract is used for example of try catch with external call
        foo = new Foo(msg.sender);
    }

    // Example of try / catch with external call
    // tryCatchExternalCall(0) => Log("external call failed")
    // tryCatchExternalCall(1) => Log("my func was called")
    function tryCatchExternalCall(uint _i) public {
        try foo.myFunc(_i) returns (string memory result) {
            emit Log(result);
        } catch {
            emit Log("external call failed");
        }
    }

    // Example of try / catch with contract creation
    // tryCatchNewContract(0x0000000000000000000000000000000000000000) => Log("invalid address")
    // tryCatchNewContract(0x0000000000000000000000000000000000000001) => LogBytes("")
    // tryCatchNewContract(0x0000000000000000000000000000000000000002) => Log("Foo created")
    function tryCatchNewContract(address _owner) public {
        try new Foo(_owner) returns (Foo foo) {
            // you can use variable foo here
            emit Log("Foo created");
        } catch Error(string memory reason) {
            // catch failing revert() and require()
            emit Log(reason);
        } catch (bytes memory reason) {
            // catch failing assert()
            emit LogBytes(reason);
        }
    }
}
```


<br>
<br>
<br>

## π₯ Import

You can import local and external files in Solidity.

### π£ Local

Here is our folder structure.

```js
βββ Import.sol
βββ Foo.sol
```

`Foo.sol`

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

struct Point {
    uint x;
    uint y;
}

error Unauthorized(address caller);

function add(uint x, uint y) pure returns (uint) {
    return x + y;
}

contract Foo {
    string public name = "Foo";
}
```

`Import.sol`

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// import Foo.sol from current directory
import "./Foo.sol";

// import {symbol1 as alias, symbol2} from "filename";
import {Unauthorized, add as func, Point} from "./Foo.sol";

contract Import {
    // Initialize Foo.sol
    Foo public foo = new Foo();

    // Test Foo.sol by getting it's name.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}
```

### π£ External

You can also import from GitHub by simply copying the url

```js
// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ECDSA.sol from openzeppelin-contract repo, release-v4.5 branch
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";
```

<br>
<br>
<br>

## π₯ Library

Libraries are similar to contracts, but you can't declare any state variable and you can't send ether.

A library is embedded into the contract if all library functions are internal.

Otherwise the library must be deployed and then linked before the contract is deployed.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

library Math {
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // else z = 0 (default value)
    }
}

contract TestSafeMath {
    using SafeMath for uint;

    uint public MAX_UINT = 2**256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        return x.add(y);
    }

    function testSquareRoot(uint x) public pure returns (uint) {
        return Math.sqrt(x);
    }
}

// Array function to delete element at index and re-organize the array
// so that their are no gaps between the elements.
library Array {
    function remove(uint[] storage arr, uint index) public {
        // Move the last element into the place to delete
        require(arr.length > 0, "Can't remove from empty array");
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            arr.push(i);
        }

        arr.remove(1);

        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
    }

    function getArr() view public returns(uint[] memory){
        return arr;
    }
}
```
μ¬κΈ°μ `contract TestSafeMath`λ₯Ό μλμ κ°μ΄ λ€λ₯Έ λ°©μμΌλ‘ μ¬μ©ν  μλ μλ€.

```js
contract TestSafeMath {
    using SafeMath for uint;
    using Math for uint; // add for using "x.sqrt()"

    uint public MAX_UINT = 2**256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        return SafeMath.add(x, y); // return x.add(y);
    }

    function testSquareRoot(uint x) public pure returns (uint) {
        return x.sqrt(); // return Math.sqrt(x);
    }
}
```

λ¬Όλ‘  `Library`λ₯Ό μλ£νμ ν λΉνλ κ³Όμ μμ κ°μ μ΄λ¦μ ν¨μκ° μ€λ³΅μ΄ λλ©΄ μ»΄νμΌ μλ¬κ° λ°μνλ€.

```js
library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

library DupMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y + 10;
        require(z >= x, "uint overflow");

        return z;
    }
}

contract TestSafeMath {
    using SafeMath for uint;
    using DupMath for uint;

    uint public MAX_UINT = 2**256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        return x.add(y); // compile error occured here.
    }
}
```

`Library`λ§ λ°λ‘ νμΌλ‘ λλμ΄ `import`νμ¬ μ¬μ©ν  μλ μλ€.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./lib.sol";

contract TestSafeMath {
    using SafeMath for uint;

    uint public MAX_UINT = 2**256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        return x.add(y);
    }

    function testSquareRoot(uint x) public pure returns (uint) {
        return Math.sqrt(x);
    }
}

contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            arr.push(i);
        }

        arr.remove(1);

        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
    }

    function getArr() view public returns(uint[] memory){
        return arr;
    }
}
```

<br>
<br>
<br>

## π₯ ABI Decode

`abi.encode` encodes data into `bytes`.

`abi.decode `decodes `byte`s back into data.

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract AbiDecode {
    struct MyStruct {
        string name;
        uint[2] nums;
    }

    /* Let's input below to test: 
           100
           0xad153c5e12dB58a47f2454691b26582A430803fB
           [50, 55]
           ["hello",[11,22]]
    */
    function encode(
        uint x,
        address addr,
        uint[] calldata arr,
        MyStruct calldata myStruct
    ) external pure returns (bytes memory) {
        return abi.encode(x, addr, arr, myStruct);
    }

    function decode(bytes calldata data)
        external
        pure
        returns (
            uint x,
            address addr,
            uint[] memory arr,
            MyStruct memory myStruct
        )
    {
        // (uint x, address addr, uint[] memory arr, MyStruct myStruct) = ...
        (x, addr, arr, myStruct) = abi.decode(data, (uint, address, uint[], MyStruct));
    }
}
```

<br>
<br>
<br>

## π₯ Hashing with Keccak256

`keccak256` computes the Keccak-256 hash of the input.

Some use cases are:

 - Creating a deterministic unique ID from a input
 - Commit-Reveal scheme
 - Compact cryptographic signature (by signing the hash instead of a larger input)

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract HashFunction {
    function hash(
        string memory _text,
        uint _num,
        address _addr
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_text, _num, _addr));
    }

    // Example of hash collision
    // Hash collision can occur when you pass more than one dynamic data type
    // to abi.encodePacked. In such case, you should use abi.encode instead.
    function collision(string memory _text, string memory _anotherText)
        public
        pure
        returns (bytes32)
    {
        // encodePacked(AAA, BBB) -> AAABBB
        // encodePacked(AA, ABBB) -> AAABBB
        return keccak256(abi.encodePacked(_text, _anotherText));
    }
}

contract GuessTheMagicWord {
    bytes32 public answer =
        0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;

    // Magic word is "Solidity"
    function guess(string memory _word) public view returns (bool) {
        return keccak256(abi.encodePacked(_word)) == answer;
    }
}
```

<br>
<br>
<br>

## π₯ Gas Saving Techniques

Some gas saving techniques.

 - Replacing memory with calldata
 - Loading state variable to memory
 - Replace for loop i++ with ++i
 - Caching array elements
 - Short circuit

```js
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// gas golf
contract GasGolf {
    // start - 50908 gas
    // use calldata - 49163 gas
    // load state variables to memory - 48952 gas
    // short circuit - 48634 gas
    // loop increments - 48244 gas
    // cache array length - 48209 gas
    // load array elements to memory - 48047 gas
    uint public total;

    // start - not gas optimized : spent 50908
    function notOptimizedSumIfEvenAndLessThan99(uint[] memory nums) external {
        for (uint i = 0; i < nums.length; i += 1) {
            bool isEven = nums[i] % 2 == 0;
            bool isLessThan99 = nums[i] < 99;
            if (isEven && isLessThan99) {
                total += nums[i];
            }
        }
    }

    // gas optimized : spent 30969
    // [1, 2, 3, 4, 5, 100]
    function sumIfEvenAndLessThan99(uint[] calldata nums) external {
        uint _total = total;
        uint len = nums.length;

        for (uint i = 0; i < len; ++i) {
            uint num = nums[i];
            if (num % 2 == 0 && num < 99) {
                _total += num;
            }
        }

        total = _total;
    }
}
```

<br>
<br>
<br>
<br>
<br>
<br>
<hr>


# π Question

## π₯ Remix IDE input Tuple arguments method

https://remix-ide.readthedocs.io/en/latest/udapp.html

## π₯ `tx.origin` and `msg.sender`

https://ethereum.stackexchange.com/questions/1891/whats-the-difference-between-msg-sender-and-tx-origin
