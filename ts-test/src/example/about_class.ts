class Sample {
    protected num : number;
    // public(기본값), private, protected
    
    constructor(num : number){
        this.num = num;
    }
}

/*  
interface Notebook { 
  readonly CPU: string; 
  readonly RAM: string;
};

interface ButtonInterface {
  // 속성 이름 뒤에 ? 기호가 붙으면 옵션 속성이 됩니다.
  onInit?():void;
  onClick():void;
}

class ButtonComponent implements ButtonInterface {

  // onInit 메서드가 설정되지 않아도 오류를 발생하지 않습니다.
  onClick() { console.log('버튼 클릭') }

}

인터페이스에 인덱스 시그니처(Index Signature) 속성
interface ButtonInterface {
  onInit?():void;
  onClick():void;
  // 인덱스 시그니처
  [prop:string]: any;
}

const button:ButtonInterface = {
  type: 'button',
  disabled: false,
  onClick() { console.log('버튼 클릭') }
};

--> 함수타입
// 펙토리얼 함수 인터페이스 정의
interface FactorialInterface {
  (n: number): number;  
}
​
// 인터페이스를 함수 타입에 설정했기에 별도의 매개변수, 리턴 값 설정을 생략해도 됩니다.
const facto: FactorialInterface = (n) => {
  if (n === 0) { return 0; }
  if (n === 1) { return 1; }
  return n * facto(n - 1);
}


*/

export = async function(){

}