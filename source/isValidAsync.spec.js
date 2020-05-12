import { delay } from './delay'
import { isValidAsync } from './isValidAsync.js'

const simplePredicate = async x => {
  await delay(100)

  return x > 5
}

test('happy', async () => {
  const input = {
    a          : 1,
    b          : 7,
    c          : 9,
    additional : 'foo',
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
