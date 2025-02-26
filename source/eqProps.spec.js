import { eqProps } from './eqProps.js'

const obj1 = {
  a: 1,
  b: 2,
}
const obj2 = {
  a: 1,
  b: 3,
}

test('props are equal', () => {
  const result = eqProps('a', obj1, obj2)
  expect(result).toBeTruthy()
})

test('props are not equal', () => {
  const result = eqProps('b', obj1, obj2)
  expect(result).toBeFalsy()
})

test('prop does not exist', () => {
  const result = eqProps('c', obj1, obj2)
  expect(result).toBeTruthy()
})

test('can handle null or undefined object', () => {
  expect(eqProps('value', { value: 0 }, null)).toBeFalsy()
  expect(eqProps('value', { value: 0 }, undefined)).toBeFalsy()
  expect(eqProps('value', null, { value: 0 })).toBeFalsy()
  expect(eqProps('value', undefined, { value: 0 })).toBeFalsy()
  expect(eqProps('value', undefined, { value: undefined })).toBeTruthy()
  expect(eqProps('value', null, { value: undefined })).toBeTruthy()
  expect(eqProps('value', { value: undefined }, undefined)).toBeTruthy()
  expect(eqProps('value', { value: undefined }, null)).toBeTruthy()
  expect(eqProps('value', {}, null)).toBeTruthy()
  expect(eqProps('value', {}, undefined)).toBeTruthy()
  expect(eqProps('value', null, {})).toBeTruthy()
  expect(eqProps('value', undefined, {})).toBeTruthy()
})
