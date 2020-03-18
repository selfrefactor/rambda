import { range } from './range'
import { uniq } from './uniq'
import { shuffle } from './shuffle'

test('happy', () => {
  const list = range(0, 7)
  const result = range(0, 300).map(() => shuffle(list))
  const allUniq = uniq(result)
  expect(allUniq.length > 150).toBe(true)
})
