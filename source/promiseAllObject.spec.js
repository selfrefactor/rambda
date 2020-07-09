import { delay } from './delay'
import { promiseAllObject } from './promiseAllObject'

test('with asynchronous functions', async () => {
  const promises = {
    foo : async () => {
      await delay(100)

      return 10
    },
    bar : async () => {
      await delay(100)

      return 20
    },
  }

  const result = await promiseAllObject(promises)
  expect(result).toEqual({
    foo : 10,
    bar : 20,
  })
})

test('with promises', async () => {
  const promises = {
    a : new Promise(resolve => {
      delay(100).then(() => resolve(1))
    }),
    b : new Promise(resolve => {
      delay(1000).then(() => resolve(2))
    }),
  }
  const result = await promiseAllObject(promises)

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('with synchronous functions', async () => {
  const functions = {
    a : () => 1,
    b : () => 2,
  }
  const result = await promiseAllObject(functions)

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('mixed', async () => {
  const promises = {
    foo : async () => {
      await delay(100)

      return 10
    },
    bar : new Promise(resolve => {
      delay(100).then(() => resolve(20))
    }),
    baz : () => 30,
  }

  const result = await promiseAllObject(promises)
  expect(result).toEqual({
    foo : 10,
    bar : 20,
    baz : 30,
  })
})
