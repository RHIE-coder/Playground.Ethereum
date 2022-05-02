//https://www.typescriptlang.org/docs/handbook/decorators.html
/*  
각 데코레이터 표현식은 위에서 아래 방향(⬇︎)으로 평가됩니다. 
결과는 아래에서 위로(⬆︎) 함수를 호출합니다

// Size 데코레이터 팩토리
function Size() {
  console.log('Size(): 평가됨');
  // Size 데코레이터
  return function(target:any, prop:string, desc:PropertyDescriptor){
    console.log('Size(): 실행됨')
  }
}
​
// Color 데코레이터 팩토리
function Color() {
  console.log('Color(): 평가됨');
  // Color 데코레이터
  return function(target:any, prop:string, desc:PropertyDescriptor){
    console.log('Color(): 실행됨')
  }
}
​
// Button 클래스 정의
class Button {
  // 메서드에 멀티 데코레이터 적용
  @Size()
  @Color()
  isPressed() {}
}

Size(): 평가됨
Color(): 평가됨
Color(): 실행됨
Size(): 실행
*/

function MethodDeco(){

    return function(target:any, prop:string, desc:PropertyDescriptor){
        console.log(target);
        console.log(prop);
        console.log(desc);
    }
}

function ClassDeco(target:Function){
    console.log("ClassDeco");
    console.log(target);
}

// @ClassDeco
// class Test{}

/*  
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
*/

export = async function(){
    // new Test();
}