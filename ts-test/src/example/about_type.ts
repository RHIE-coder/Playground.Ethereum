// https://yamoo9.gitbook.io/typescript/types/type-assertions
function line() {
  console.log("*    ---------------    *");
}

export = async function () {
  /* Primitive type
        - number
        - string
        - boolean
`   */
  /* Any type
        - any
    */
  /* Array type
        - []
    */
  const a1: number[] = [10, 20, 30, 40];
  console.log(a1); // [ 10, 20, 30, 40 ]
  const a2: (number | string)[] = ["A", 10, "B", 20];
  console.log(a2); // [ 'A', 10, 'B', 20 ]
  line();
  /* Tuple type
        - []
        순서가 보장됨
    */
  const b1: [string, number] = ["A", 10];
  console.log(b1); // [ 'A', 10 ]
  const b2: [{ name: string; type: string }] = [
    {
      name: "쇼트트랙",
      type: "혼성 계주",
    },
    // {
    //     name:"goodman",
    //     type:"kind"
    // } //Error
  ];

  console.log(b2); // [ { name: '쇼트트랙', type: '혼성 계주' } ]
  console.log(b2[0].name); // 쇼트트랙
  line();
  /* Enum
      - enum
    */
  enum c1 {
    A,
    B,
    C,
    D,
  }
  const c2: c1 = c1.C;
  console.log(c2); // 2
  line();
  /* function, union, void
   */
  function d1(id: number): void {
    console.log(d1);
  }
  d1(10); // 10
  function d2(params: number | string): void {
    console.log(params);
  }
  d2("AAA"); // AAA
  d2(20); // 20
  function d3(n1: number, n2: number): number {
    return n1 + n2;
  }
  console.log(d3(30, 40)); // 70
  line();
  /* Object
   */
  const Dom: { version: string; el: () => void; css: () => void } = {
    version: "0.0.1",
    el() {},
    css() {},
  };

  let Dom2: {
    version: string;
    el: () => void;
    css: () => void;
    [propName: string]: any; // ⬅︎
  };

  Dom2 = {
    version: "0.0.1",
    el() {},
    css() {},
  };

  Dom2.each = function () {};
  Dom2.map = function () {};
  Dom2.filter = function () {};
  line();
  /* null, undefined */
  /*
  void와 never 차이
    never는 함수가 종료하지 않아 결코 return하지 않을 때 사용된다. 무한루프 혹은 Error 메시지를 throw할 때 return type이 never이다.
    void는 return 값이 없을 뿐이지 함수는 종료한다.
  */
  /* Custom
    - type
  */
  type obj = {
    add: (n1: number, n2: number) => number;
    data: number[];
  };
  const samp: obj = {
    add(n1, n2) {
      return n1 + n2;
    },
    data: [1, 2, 3, 4],
  };
  console.log(samp);
  line();
};
