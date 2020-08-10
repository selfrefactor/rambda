"use strict";
exports.__esModule = true;
var ramda_1 = require("ramda");
var moveResult = ramda_1.move(1, 2, [1, 2, 3]);
var unionResult = ramda_1.union([1, 2, 4], [1, 2, 3]);
var applySpecResult = ramda_1.applySpec({
    a: ramda_1.add(1)
})(1);
var transposeResult = ramda_1.transpose([[1, 2], [], [1, 2, 3], [3]]);
console.log({ applySpecResult: applySpecResult, transposeResult: transposeResult, moveResult: moveResult, unionResult: unionResult });
var bs = ramda_1.and(1)(2);
var a = ramda_1.reject(function (a) { return a > 1; }, [1, 2, 3]);
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
