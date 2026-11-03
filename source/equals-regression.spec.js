import { equals } from './equals.js'

test('objects with different undefined-valued keys are not equal', () => {
  expect(equals({ a: undefined })({ b: undefined })).toBe(false)
})

test('inherited properties cannot substitute for own object keys', () => {
  const right = Object.assign(Object.create({ a: 1 }), { b: 1 })
  expect(equals({ a: 1 })(right)).toBe(false)
})

test('equal own keys still compare nested values', () => {
  expect(equals({ a: undefined, b: { c: 1 } })({ b: { c: 1 }, a: undefined })).toBe(true)
})

test('set equality requires a distinct match for each element', () => {
  const left = new Set([{ id: 1 }, { id: 1 }])
  const right = new Set([{ id: 1 }, { id: 2 }])
  expect(equals(left)(right)).toBe(false)
  expect(equals(right)(left)).toBe(false)
})

test('sets with repeated structural values compare independently of insertion order', () => {
  const left = new Set([{ id: 1 }, { id: 2 }, { id: 1 }])
  const right = new Set([{ id: 1 }, { id: 1 }, { id: 2 }])
  expect(equals(left)(right)).toBe(true)
  expect(equals(right)(left)).toBe(true)
})

