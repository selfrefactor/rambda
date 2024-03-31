import { once } from './once.js'

test('with counter', () => {
  let counter = 0
  const runOnce = once(x => {
    counter++

    return x + 2
  })
  expect(runOnce(1)).toBe(3)
  runOnce(1)
  runOnce(1)
  runOnce(1)
  expect(counter).toBe(1)
})

test('happy path', () => {
  const addOneOnce = once((
    a, b, c
  ) => a + b + c, 1)

  expect(addOneOnce(
    10, 20, 30
  )).toBe(60)
  expect(addOneOnce(40)).toBe(60)
})

test('with context', () => {
  const context = { name: 'fris' }
  const getNameOnce = once(function (){
    return this.name
  }, context)

  expect(getNameOnce()).toBe('fris')
  expect(getNameOnce()).toBe('fris')
  expect(getNameOnce()).toBe('fris')
})
