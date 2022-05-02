const math = require("../src/lib/math");

describe('App test!', function () {
    it('sayHello should return hello', function (done) {
      if (math.add(10, 20) === 30) {
        done();
      }
    });
  });