import { delay } from './delay'
import { pipedAsync } from './pipedAsync'
import { add } from './add'

test('', async () => {
  const result = await pipedAsync(
    100,
    async x => {
      await delay(100)

      return x + 2
    },
    add(2),
    async x => {
      const delayed = await delay(100)

      return delayed + x
    }
  )
  const expectedResult = 'RAMBDAX_DELAY104'

  expect(result).toEqual(expectedResult)
})
