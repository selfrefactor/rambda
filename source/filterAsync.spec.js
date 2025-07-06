import { filterAsync } from './filterAsync.js'

test('happy', async () => {
  const isEven = async n => n % 2 === 0

  expect(await filterAsync(isEven)([1, 2, 3, 4])).toEqual([2, 4])
})

