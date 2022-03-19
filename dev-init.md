# :dart: Development

## :lock: 개발 살펴보기

### :key: 첫경험(Truffle-based)

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


### :key: 디렉토리 구조

1. contracts : Solidity 스마트 컨트랙트 소스
2. migrations : 블록체인 네트워크에 Deploy
3. test : mocha 기반 테스팅
4. build : 컴파일된 스마트 컨트랙트 소스
 - JSON안의 Bytecode는 블록체인 내부에 올라가고 ABI는 웹 어플리케이션에서 사용

<hr>
<br><br><br><br><br>

## :lock: 스마트 컨트렉트

### :key: 솔리디티 레이아웃

#### pragma

컴파일러 버전 체크. 만일 다른 파일을 import하면 import된 파일에 명시된 pragma는 자동으로 적용되지 않는다.

```sol
pragma solidity ^0.4.0;
```

#### import

자바스크립트의 import와 같이 솔리디티도 import를 지원하지만 자바스크립트의 "default import"의 컨셉은 사용하지 않는다.

```sol
import "filename";
import * as symbolName from "filename";
import {symbol1 as alias, symbol2} from "filename";
```

#### comments

```sol
// This is a single-line comment.

/*
This is a
multi-line comment.
*/
```
 - 주석 기법

```sol
pragma solidity >=0.4.0 <0.6.0;

/** @title Shape calculator. */
contract ShapeCalculator {
    /** @dev Calculates a rectangle's surface and perimeter.
      * @param w Width of the rectangle.
      * @param h Height of the rectangle.
      * @return s The calculated surface.
      * @return p The calculated perimeter.
      */
    function rectangle(uint w, uint h) public pure returns (uint s, uint p) {
        s = w * h;
        p = 2 * (w + h);
    }
}
```

#### Grammar Structure

 - `State Variable` : State variables are variables whose values are permanently stored in contract storage.

 - `Functions`

 - `Function Modifiers`

 - `Events`

 - `Errors`

 - `Struct Types`

 - `Enum Types`


### :key: Data Types and Usages


#### Booleans
 - `bool`
 - Operators: `!` `&&` `||` `==` `!=`


#### Integers
 - `int`/`uint` + `8~256`(8비트 단위)
 - Operators: 
    - Comparisons: `<=` `<` `==` `!=` `>=` `>`
    - Bit: `&` `|` `^` `~`
    - Arithmetic: `+` `-` `*` `/` `%` `**`
    - Shift : `<<` `>>`

#### Address
 - `address`: Holds a 20 byte value (size of an Ethereum address)
    - Members:
       - `balance`
       - `transfer`
 - `address payable`: Same as address, but with the additional members `transfer` and `send`.
    - Send is the low-level counterpart of transfer. If the execution fails, the current contract will not stop with an exception, but send will return false.(`transfer` 사용 추천)


#### bytes

#### Strings

#### Enums

#### Functions
 - Usage:
```sol
function (<parameter types>) {internal|external} [pure|view|payable] [returns (<return types>)]
```
 - contract 단위 제한
    - public
    - external : 같은 contract 내에서 사용 불가
    - private
    - internal : 자바의 protected와 비슷


 - function 범위 제한
    - view : 함수 밖 선언 값을 읽을 수 있지만 선언 값을 변경하지 않는다.
    - pure : 함수 밖 선언 값을 읽을 수 없다.

#### References

#### Arrays

 - Example:
```s
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract C {
    function f() public pure {
        uint[] memory x = new uint[](3);
        x[0] = 1;
        x[1] = 3;
        x[2] = 4;
    }
}
```
 - Members:
    - length
    - push()
    - pop()

#### Structs

#### Mappings


### :key: About Contract

#### - 영역

 - `storage`: 영속성 있음. 선언된 변수와 함수 등
 - `memory`: 함수 안의 값, 파라미터 등 영속성이 없음
 - `call data`: external function의 파라미터
 - `stack`: EVM에서 관리하는 1024MB의 스택메모리 영역

#### - 상속
 - `is`
 - Override:
   - Target(Parent): `virtual`
   - Action(Child): `Override`

##### 추상 Contract 사용 가능

```js
abstract contract A {
    function spam() virtual pure public;
    function ham() public virtual pure;
}

contract B is A {
    function spam() public pure override {
        // ...
    }
    function ham() public pure override {
        // ...
    }
}
```


#### - 이벤트
 - OUTPUT
 - 블록안에 각인
 - `indexed`


#### - payable

```js
event howMuch(uint256 _value);

function sendFunc(address payable _to) public payable{
    bool sent = _to.send(msg.value); //성공시 true, 실패시 false
    require(sent, "Fail to send Ether);
    emit howMuch(msg.value);
}

function transferFunc(address payable _to) public payable{
    _to.transfer(msg.value); //실패시 에러(revert)
    emit howMuch(msg.value); 
}
/* 
    call과 같이 가스를 지정해주는 것은 미래의 가스 가격이 달라져서
    스마트 컨트렉트를 구동하는데 힘들 수 있기 때문에 지정하지 않는 것을 추천
*/
function callFunc(address payable _to) public payable{
    (bool sent,) = _to.call{value: msg.value, gas: 1000}("");
    require(sent, "Fail to send the Ether);
    emit howMuch(msg.value);
}
```

 - `msg.balance`는 해당 특정 주소의 현재 갖고 있는 Ether 잔액
 - `msg.value`는 보낸 Ether액


#### - Enum

```js
enum ResultMsg {
    Success,
    Fail,
    Error
}

ResultMsg rm;

constructor(){
    rm = ResultMsg.Success;
}

function doSomething(){
    require(rm=ResultMsg.Success, "something is failed");
}
```

#### - Interface

external로 표시하고 enum, struct 생성 가능

변수X, 생성자X

```js
interface ItemInfo{
    struct item {
        String name;
        uint256 price;
    }
    function addItem(string memory _name, uint256 _price) external;
    function getItem(uint _index) external view returns(item memory);
}

contract ActionHere is ItemInfo{
    item[] public itemList;
    function addItem(string memory _name, uint256 _price) override public{
        itemList.push(item(_name, _price));
    }
    function getItem(uint256 _index) override public view returns(item memory){
        return itemList[_index];
    }
}
```

#### -Libray

fallback 불가, payable 불가, 그러므로 Ether를 받을 수 없음

```js
library Math{
    function add(uint64 a, uint64 b) internal pure returns (uint8){
        return a + b;
    }
}

contract Usage{
    using Math for uint64;
    uint64 public num;

    function do(uint64 _n1, uint64 _n2) public {
        num = _n1.add(_n2)
    }
}
```