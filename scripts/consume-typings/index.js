'use strict'
exports.__esModule = true
const rambda_1 = require('rambda')
const applySpecResult = rambda_1.applySpec({ a : rambda_1.add(1) })(1)
console.log({ applySpecResult : applySpecResult })
const add1 = rambda_1.add(1)(2)
const add2 = rambda_1.add(1)(3)
const morebs = rambda_1.transpose([ [ 1, 2 ], [], [ 1, 2, 3 ], [ 3 ] ])
console.log({ morebs : morebs })
const bs = rambda_1.and(1)(2)
const a = rambda_1.reject((a, c) => a > 1,
  [ 1, 2, 3 ])
function fn(input){
  return input.c ? input.a : input.b
}
const foo = { bar : [ '1', '2', '3' ] }
// const curried = partialCurry<Input, PartialInput, string|number>(fn, {a:1, b:'foo'});
// curried // $ExpectType (input: Pick<Input, "c">) => string | number
// const result = curried({c:false})
// result// $ExpectType string | number
// const partialInput = {a:1}
// type B = Exclude<keyof Input, keyof PartialInput>
