import { on } from './on.js'

const binaryFn = (a, b) => a === b
const unaryFn = x => x.a
const a = {
  b : 0,
  a : 1,
}
const b = { a : 1 }

test('happy', () => {
  expect(on(
    binaryFn, unaryFn, a, b
  )).toBeTrue()
})

test('return type is not limited to boolean', () => {
  expect(on(
    binaryFn, unaryFn, a, b
  )).toBeTrue()
})

test('curried - last input', () => {
  expect(on(
    binaryFn, unaryFn, a
  )(b)).toBeTrue()
})

test('curried - last two inputs', () => {
  expect(on(binaryFn, unaryFn)(a, b)).toBeTrue()
})

test('not supported curried case', () => {
  expect(() => on(binaryFn, unaryFn)(a)(b)).toThrow()
})
