import { range } from './range'
import { shuffle } from './shuffle'
import { uniq } from './uniq'

test('happy', () => {
  const list = range(0, 7)
  const result = range(0, 300).map(() => shuffle(list))
  const allUniq = uniq(result)
  expect(allUniq.length > 150).toBeTrue()
})
