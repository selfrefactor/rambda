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
  const result = eqProps('a', obj1)(obj2)
  expect(result).toBeTruthy()
})

test('props are not equal', () => {
  const result = eqProps('b', obj1)(obj2)
  expect(result).toBeFalsy()
})

test('prop does not exist', () => {
  const result = eqProps('c', obj1)(obj2)
  expect(result).toBeTruthy()
})
