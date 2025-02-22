import { range } from './range.js'
import { shuffle } from './shuffle.js'
import { uniq } from './uniq.js'

test('happy', () => {
  const list = range(0, 7)
  const result = range(0, 300).map(() => shuffle(list))
  const allUniq = uniq(result)
  expect(allUniq.length > 150).toBeTruthy()
})
