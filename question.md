# :question: address와 address payable의 차이

# :question: 변수에 address payable이 있고 함수에도 payable이 붙여있음

# :question: 스마트 컨트렉트 레이아웃 구성 순서

1. Pragma statements

1. Import statements

1. Interfaces

1. Libraries

1. Contracts

1. Type declarations

1. State variables

1. Events

1. Functions

# :question: 네이밍

스네이크 네이밍을 사용하면 빌트인 선언과 충돌이 일어날 수 있기 때문에 카멜 네이밍법을 추천

# :question: 함수 작성 전체적인 경우의 수와 스타일 가이드

## # Order of Funcions

constructor

receive function (if exists)

fallback function (if exists)

external

public

internal

private

암기 : 

## # Function Declaration

0. `function` keyword
1. Parameters
2. Visibility : `public`, `internal`, `private`, `external`
3. Mutability : `view`, `pure`
4. Virtual - Override
5. Custom modifiers
6. 뇌피셜 (payable은 맨끝에)

암기: fp-VM voM p

# :question: Solidity를 이용한 스마트 컨트랙트 기본 상식

## # Structure
 - `State Variable`

 - `Functions`

 - `Function Modifiers`

 - `Events`

 - `Errors`

 - `Struct Types`

 - `Enum Types`

## # Memory

 - `storage`: 영속성 있음. 선언된 변수와 함수 등
 - `memory`: 함수 안의 값, 파라미터 등 영속성이 없음
 - `call data`: external function의 파라미터
 - `stack`: EVM에서 관리하는 1024MB의 스택메모리 영역
 
# :question: fallback function

1. 대비책 함수. 익명 함수
2. external 필수
3. payable을 받으면 Ether를 받고나서도 동작

## # 역할
 - 스마트 컨트렉트가 Ether를 받게함
 - 이더를 받은 후 Action
 - 외부에서 함수를 불렀는데 그 함수가 없다면 기본으로 외부 스마트 컨트렉트의 fallback을 작동시킴

## # receive
순수하게 이더만 받을 때 사용

`fallback`은 불려진 함수가 없을 때, 함수를 실행하면서 이더를 보낼 때
