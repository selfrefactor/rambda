import { result } from 'lodash'

import { delay } from './delay.js'
import { isValidAsync } from './isValidAsync.js'

const simplePredicate = async x => {
  await delay(100)

  return x > 5
}

test('happy', async () => {
  const input = {
    a          : 1,
    additional : 'foo',
    b          : 7,
    c          : 9,
  }
  const invalidInput = {
    a : 1,
    b : 2,
    c : 9,
  }
  const schema = {
    a : Number,
    b : simplePredicate,
    c : simplePredicate,
  }
  const invalidSchema = {
    a : Boolean,
    b : simplePredicate,
    c : simplePredicate,
  }
  const result = await isValidAsync({
    input,
    schema,
  })
  const invalidResult = await isValidAsync({
    input,
    schema : invalidSchema,
  })
  const withInvalidInput = await isValidAsync({
    input : invalidInput,
    schema,
  })
  expect(result).toBeTruthy()
  expect(invalidResult).toBeFalsy()
  expect(withInvalidInput).toBeFalsy()
})

test('without async rules', async () => {
  const input = {
    a : 1,
    b : 7,
  }
  const schema = {
    a : Number,
    b : x => x > 2,
  }
  const invalidSchema = {
    a : Number,
    b : Boolean,
  }
  const result = await isValidAsync({
    input,
    schema,
  })
  const invalidResult = await isValidAsync({
    input,
    schema : invalidSchema,
  })

  expect(result).toBeTruthy()
  expect(invalidResult).toBeFalsy()
})

test('readme example', async () => {
  const input = {
    a : 1,
    b : 2,
  }
  const invalidInput = {
    a : 1,
    b : 'foo',
  }
  const schema = {
    a : Number,
    b : async x => {
      await delay(100)

      return typeof x === 'number'
    },
  }
  const result = await Promise.all([
    isValidAsync({
      input,
      schema,
    }),
    isValidAsync({
      input : invalidInput,
      schema,
    }),
  ])
  expect(result).toEqual([ true, false ])
})
