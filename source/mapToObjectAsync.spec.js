import { composeAsync } from './composeAsync'
import { delay } from './delay'
import { mapToObjectAsync } from './mapToObjectAsync'

const list = [ 1, 2, 3, 12 ]
const fn = async x => {
  await delay(100)
  if (x > 10) return false

  return x % 2 ? { [ `key${ x }` ] : x + 1 } : { [ `key${ x }` ] : x + 10 }
}

const expected = {
  key1 : 2,
  key2 : 12,
  key3 : 4,
}

test('happy', async () => {
  const result = await mapToObjectAsync(fn, list)
  expect(result).toEqual(expected)
})

test('with R.composeAsync', async () => {
  const result = await composeAsync(mapToObjectAsync(fn), x =>
    x.filter(xx => xx > 1))(list)

  expect(result).toEqual({
    key2 : 12,
    key3 : 4,
  })
})
