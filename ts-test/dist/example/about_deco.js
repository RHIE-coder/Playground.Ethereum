'use strict'
// https://www.typescriptlang.org/docs/handbook/decorators.html
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

// Color 데코레이터 팩토리
function Color() {
  console.log('Color(): 평가됨');
  // Color 데코레이터
  return function(target:any, prop:string, desc:PropertyDescriptor){
    console.log('Color(): 실행됨')
  }
}

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
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
    function rejected (value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }
    function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
function MethodDeco () {
  return function (target, prop, desc) {
    console.log(target)
    console.log(prop)
    console.log(desc)
  }
}
function ClassDeco (target) {
  console.log('ClassDeco')
  console.log(target)
}
module.exports = function () {
  return __awaiter(this, void 0, void 0, function * () {
    // new Test();
  })
}
