import * as dbSqlite from "./lib/db-sqlite";
import * as dbOrm from "./lib/db-orm";

(async () => {
  // try {
  //   await dbSqlite.isExistDatabase();
  // } catch (e) {
  //   await dbSqlite.createDatabase();
  // }
  // await dbSqlite.flow();
  await dbOrm.run();
})();

// import { add, mul } from "./lib/math";
// console.log(add(10, 20));
// console.log(mul(10, 20));

// import { strict as assert } from 'assert';
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

// import {add} from "jsmath";
// console.log(add(10, 20));

// import mocha from 'mocha'; //need @types/mocha
