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

// create() 팩토리 함수에 Model, string[] 멀티 타입 설정
create<Model, string[]>(Model, ['class type']);
*/

class Box<T> {
  private _data: T[];

  constructor(data: T[]) {
    this._data = data;
  }
}
export = () => (1 ? 2 : 3);
