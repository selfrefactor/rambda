import { delay } from './delay.js'
import { join } from './join.js'
import { map } from './map.js'
import { mapAllSettled } from './mapAllSettled.js'
import { pipeAsync } from './pipeAsync.js'

const fn = async (x, i) => {
  await delay(100)
  if (i % 2) throw new Error(`foo-${ i }`)

  return x + 1
}

test('happy', async () => {
  await expect(mapAllSettled(fn, [ 1, 2, 3, 4 ])).resolves
    .toMatchInlineSnapshot(`
    [
      {
        "status": "fulfilled",
        "value": 2,
      },
      {
        "reason": [Error: foo-1],
        "status": "rejected",
      },
      {
        "status": "fulfilled",
        "value": 4,
      },
      {
        "reason": [Error: foo-3],
        "status": "rejected",
      },
    ]
  `)
})

test('inside pipe', async () => {
  const result = await pipeAsync(
    mapAllSettled(fn),
    map(({ status }) => status),
    join('-')
  )([ 1, 2, 3 ])
  expect(result).toBe('fulfilled-rejected-fulfilled')
})
