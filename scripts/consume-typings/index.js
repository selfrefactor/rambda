"use strict";
exports.__esModule = true;
var rambda_1 = require("rambda");
var applySpecResult = rambda_1.applySpec({
    a: rambda_1.add(1)
})(1);
console.log({ applySpecResult: applySpecResult });
var add1 = rambda_1.add(1)(2);
var add2 = rambda_1.add(1)(3);
var morebs = rambda_1.transpose([[1, 2], [], [1, 2, 3], [3]]);
console.log({ morebs: morebs });
var bs = rambda_1.and(1)(2);
var a = rambda_1.reject(function (a, c) { return a > 1; }, [1, 2, 3]);
function fn(input) {
    return input.c ? input.a : input.b;
}
var foo = {
    bar: ['1', '2', '3']
};
// const curried = partialCurry<Input, PartialInput, string|number>(fn, {a:1, b:'foo'});  
// curried // $ExpectType (input: Pick<Input, "c">) => string | number
// const result = curried({c:false}) 
// result// $ExpectType string | number
// const partialInput = {a:1}
// type B = Exclude<keyof Input, keyof PartialInput>
