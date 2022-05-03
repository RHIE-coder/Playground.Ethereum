import { expect } from 'chai'
import * as math from '../src/lib/math'

describe('App test!', function () {
  it('sayHello should return hello', async function () {
    console.log(await math.add(10, 20))
    expect(await math.add(10, 20)).to.be.equal(30)
  })
})
