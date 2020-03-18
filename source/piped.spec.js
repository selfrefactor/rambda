import { piped } from './piped'
import { add } from './add'
import { filter } from './filter'
import { map } from './map'

test('', () => {
  const result = piped(
    [ 1, 2, 3 ],
    filter(x => x > 1),
    map(x => x * 10),
    map(add(1))
  )
  const expectedResult = [ 21, 31 ]

  expect(result).toEqual(expectedResult)
})