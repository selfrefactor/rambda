import { mapToObjectAsync } from './mapToObjectAsync'

test('simple', async () => {
  const list = [ 1, 2, 3 ]
  const fn = async x => x % 2 ? { [ x ] : x + 1 } : { [ x ] : x + 10 }
  const result = await mapToObjectAsync(fn, list)
  const expected = {
    1 : 2,
    2 : 12,
    3 : 4,
  }

  expect(result).toEqual(expected)
})
