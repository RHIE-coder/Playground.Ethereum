"use strict";
/*
// 클래스 Model
class Model {
  constructor(public options:any) {}
}

// 팩토리 함수
function create<T, U>( C: {new (U): T}, options: U ):T {
  return new C(options);
}

function create<T, U>(C: new(U)=>T, options: U): T {
  return new C(options);
}
 ​
// create() 팩토리 함수에 Model, string[] 멀티 타입 설정
create<Model, string[]>(Model, ['class type']);
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Box {
    constructor(data) {
        this._data = data;
    }
}
module.exports = function () {
    return __awaiter(this, void 0, void 0, function* () { });
};
