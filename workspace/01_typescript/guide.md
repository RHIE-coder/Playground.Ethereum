## :lock: Env Setting

### :key: installation

```js
npm install typescript --save-dev
```

<br><br><br>

### :key: Setting

#### - `package.json`

```js
{
  "name": "01_typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "ts-init": "tsc --init",
    "ts-build": "tsc",
    "start": "node ./build/sandbox.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.6.3"
  }
}

```

#### - `make tsconfig.json`

```bash
npm run ts-init
```

<br><br><br>

### :key: About `tsconfig.json`

```js
{
  "compilerOptions": {
    "target": "es2016",                            
    "module": "commonjs",                          
    "outDir": "./build/",
    "esModuleInterop": true,                       
    "forceConsistentCasingInFileNames": true,      
    "strict": true,                                
    "noImplicitAny": true,                         
  },
  "exclude": ["node_modules"],
  "include": ["src/**/*", "tests/**/*"]
}
```

#### - `test running`

 - make `src/sandbox.ts`

```ts
// This is an industrial-grade general-purpose greeter function:
function greet(person: String, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", new Date());
```

```bash
npm run ts-build
```

check created `build` dir and `build/sandbox.js`

#### - `target`과 `module`의 차이

 - target : 컴파일 버전
 - module : 모듈 사용 방식 (NodeJS - CommonJS)

<hr>
<br>
<br>
<br>
<br>
<br>

## :lock: Basics

### :key: 기본 타입

 - Boolean
 - Number
 - String
 - Object
 - Array
 - Tuple
 - Enum
 - Any
 - Void
 - Null
 - Undefined
 - Never

<br>
<br>
<br>

### :key: 함수 매개변수와 반환 값 타입 지정 가능

<br>
<br>
<br>

### :key: 인터페이스

 - 객체의 스펙(속성과 속성의 타입)
 - 함수의 파라미터
 - 함수의 스펙(파라미터, 반환 타입 등)
 - 배열과 객체를 접근하는 방식
 - 클래스

#### - 옵션 속성

```js
interface 인터페이스_이름 {
  속성: 타입;  // required
  속성?: 타입; // optional
}
```

#### - 읽기 전용

```js
interface CraftBeer {
  readonly brand: string;
}
```

#### - 인터페이스 정의하지 않은 속성들을 추가로 사용하고 싶을 때

```js
interface CraftBeer {
  [propName: string]: any;
}
```

#### - 함수

```js
interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;

loginUser = function(id: string, pw: string) {
  console.log('로그인 했습니다');
  return true;
}
```

#### - 클래스

```js
interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = 'Baby Guinness';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}
```

#### - 인터페이스 확장

```js
interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
```

```js
interface Person {
  name: string;
}
interface Drinker {
  drink: string;
}
interface Developer extends Person, Drinker {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';
```

#### - index signature, Indexable

```js
const obj = {
  a: '에이',
  b: '비',
};
Object.keys(obj).forEach(key => console.log(obj[key]));
```

에러 발생 : 프로퍼티에 접근할 때 어떤 타입인지 확인할 수 없어 암묵적으로 any 타입을 사용

```js
// TS
interface IndexSignature {
    [key: string]: string;
}
const obj: IndexSignature = {
  a: '에이',
  b: '비',
};
Object.keys(obj).forEach(key => console.log(obj[key]));
```

 - 주의

```js
// TS
// Error!
interface Interface {
    [key: boolean]: string;
}
//  TS1023: An index signature parameter type must be 'string' or 'number'.
```

<br>
<br>
<br>

## :key: Enum

```js
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right // 3
}
```

```js
enum Response {
  No = 0,
  Yes = 1,
}
```

```js
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

<br>
<br>
<br>

### :key: Union Type

유니온 타입(Union Type)이란 자바스크립트의 OR 연산자(||)와 같이 A이거나 B이다 라는 의미의 타입

```js
function logText(text: string | number) {
  // ...
}
```

```js
// any를 사용하는 경우
function getAge(age: any) {
  age.toFixe(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === 'number') {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
    return age;
  }
  if (typeof age === 'string') {
    return age;
  }
  return new TypeError('age must be number or string');
}
```

#### - 주의

```js
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}
```


<br>
<br>
<br>

### :key: Intersaction Type

인터섹션 타입(Intersection Type)은 여러 타입을 모두 만족하는 하나의 타입

```js
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
type Capt = Person & Developer;
/*  
{
  name: string;
  age: number;
  skill: string;
}
*/
```

<br>
<br>
<br>

### :key: 클래스

#### - Readonly

```js
class Developer {
    readonly name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
let john = new Developer("John");
john.name = "John"; // error! name is readonly.
```

#### - getter/setter

```js
class Developer {
  private name: string;
  
  get name(): string {
    return this.name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error('이름이 너무 깁니다');
    }
    this.name = newValue;
  }
}
const josh = new Developer();
josh.name = 'Josh Bolton'; // Error
josh.name = 'Josh';
```

<br>
<br>
<br>

### :key: Abstract Class

```js
abstract class Developer {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log('drink sth');
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log('develop web');
  }
  design(): void {
    console.log('design web');
  }
}
const dev = new Developer(); // error: cannot create an instance of an abstract class
const josh = new FrontEndDeveloper();
josh.coding(); // develop web
josh.drink(); // drink sth
josh.design(); // design web
```

<br>
<br>
<br>

### :key: 제네릭

#### - 기본 사용법

```js
function getText(text) {
  return text;
}

getText('hi'); // 'hi'
getText(10); // 10
getText(true); // true
```

```js
function getText<T>(text: T): T {
  return text;
}

getText<string>('hi');
getText<number>(10);
getText<boolean>(true);
```

#### - 축약표현

```js
function logText<T>(text: T): T {
  return text;
}
// #1
let str: <T>(text: T) => T = logText;
// #2
let str: {<T>(text: T): T} = logText;s
```


#### - 제약조건

```js
function logText<T>(text: T): T {
  console.log(text.length); // Error: T doesn't have .length
  return text;
}
```

```js
interface LengthWise {
  length: number;
}

function logText<T extends LengthWise>(text: T): T {
  console.log(text.length);
  return text;
}
```

#### - 속성제약

```js
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];  
}
let obj = { a: 1, b: 2, c: 3 };

getProperty(obj, "a"); // okay
getProperty(obj, "z"); // error: "z"는 "a", "b", "c" 속성에 해당하지 않습니다.
```

<br>
<br>
<br>

### :key: 타입스크립트의 타입 체킹

타입 체킹에 있어서 타입스크립트의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야 한다는 점입니다. 이걸 Duck Typing 또는 Structural Subtyping 이라고 합니다.

 - `Duck Typing` : 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미. 동적 타이핑의 한 종류 
 - `Structural Subtyping` : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미

#### - 타입호환

```js
interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // OK, because of structural typing
```

#### - `type`

타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다. 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다. 따라서, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천합니다.


<br>
<br>
<br>


### :key: `d.ts`

타입스크립트 선언 파일 d.ts는 타입스크립트 코드의 타입 추론을 돕는 파일입니다. 예를 들어, 전역 변수로 선언한 변수를 특정 파일에서 import 구문 없이 사용하는 경우 해당 변수를 인식하지 못합니다. 그럴 때 아래와 같이 해당 변수를 선언해서 에러가 나지 않게 할 수 있습니다.

```js
declare const global = 'sth';
```

```js
// 전역 변수
declare const pi = 3.14;

// 전역 함수
declare namespace myLib {
  function greet(person: string): string;
  let name: string;
}
myLib.greet('캡틴');
myLib.name = '타노스';
```