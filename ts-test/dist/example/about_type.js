'use strict'
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
    function rejected (value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }
    function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
// https://yamoo9.gitbook.io/typescript/types/type-assertions
function line () {
  console.log('*    ---------------    *')
}
module.exports = function () {
  return __awaiter(this, void 0, void 0, function * () {
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
    const a1 = [10, 20, 30, 40]
    console.log(a1) // [ 10, 20, 30, 40 ]
    const a2 = ['A', 10, 'B', 20]
    console.log(a2) // [ 'A', 10, 'B', 20 ]
    line()
    /* Tuple type
              - []
              순서가 보장됨
          */
    const b1 = ['A', 10]
    console.log(b1) // [ 'A', 10 ]
    const b2 = [
      {
        name: '쇼트트랙',
        type: '혼성 계주'
      }
      // {
      //     name:"goodman",
      //     type:"kind"
      // } //Error
    ]
    console.log(b2) // [ { name: '쇼트트랙', type: '혼성 계주' } ]
    console.log(b2[0].name) // 쇼트트랙
    line()
    /* Enum
            - enum
          */
    let c1;
    (function (c1) {
      c1[c1.A = 0] = 'A'
      c1[c1.B = 1] = 'B'
      c1[c1.C = 2] = 'C'
      c1[c1.D = 3] = 'D'
    })(c1 || (c1 = {}))
    const c2 = c1.C
    console.log(c2) // 2
    line()
    /* function, union, void
         */
    function d1 (id) {
      console.log(d1)
    }
    d1(10) // 10
    function d2 (params) {
      console.log(params)
    }
    d2('AAA') // AAA
    d2(20) // 20
    function d3 (n1, n2) {
      return n1 + n2
    }
    console.log(d3(30, 40)) // 70
    line()
    /* Object
         */
    const Dom = {
      version: '0.0.1',
      el () { },
      css () { }
    }
    let Dom2
    Dom2 = {
      version: '0.0.1',
      el () { },
      css () { }
    }
    Dom2.each = function () { }
    Dom2.map = function () { }
    Dom2.filter = function () { }
    line()
    const samp = {
      add (n1, n2) {
        return n1 + n2
      },
      data: [1, 2, 3, 4]
    }
    console.log(samp)
    line()
  })
}
