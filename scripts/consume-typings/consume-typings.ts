import { add, applySpec, reject, and, transpose, move, union, reduce } from 'rambda'
import {sortByProps} from 'rambdax'

const sortByPropsResult = sortByProps(['a.b', 'a.c'], [
  {a: {b: 2, c: 4}},
  {a: {b: 2, c: 3}},
])

const moveResult = move(1,2, [1,2,3])
const unionResult = union([1,2,4], [1,2,3])

const applySpecResult = applySpec({
  a: add(1)
})(1)

const transposeResult = transpose([[1,2],[],[1,2,3],[3]])
console.log({applySpecResult,sortByPropsResult: sortByPropsResult[0], transposeResult, moveResult, unionResult})

const bs = and(1)(2)

const a = reject((a)=> a > 1, [1,2,3])

interface Input{
  a: number
  b: string
  c: boolean
}

type PartialInput = Pick<Input, Exclude<keyof Input, "c">>;
function fn(input: Input){
  return input.c ? input.a: input.b
}

interface Foo {
  [key: string]: string[]
}

const foo: Foo = {
  bar: ['1', '2', '3'],
}

const readonlyNumberArray: readonly number[] = [1, 2, 3];
reduce<number, readonly number[]>((acc, x) => [...acc, x], [])(readonlyNumberArray)

// const curried = partialCurry<Input, PartialInput, string|number>(fn, {a:1, b:'foo'});  
// curried // $ExpectType (input: Pick<Input, "c">) => string | number

// const result = curried({c:false}) 
// result// $ExpectType string | number

// const partialInput = {a:1}
// type B = Exclude<keyof Input, keyof PartialInput>