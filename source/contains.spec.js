import { contains } from './contains.js'

const target = { a : 1 }
const compareTo = {
  a : 1,
  b : 2,
}

test('happy', () => {
  expect(contains(target, compareTo)).toBeTrue()
})

test('curried', () => {
  expect(contains({
    ...target,
    c : 3,
  }, compareTo)).toBeFalse()
})
