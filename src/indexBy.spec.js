import { indexBy } from './indexBy'
import { prop } from './prop'

test('indexBy', () => {
  const list = [ { id : 1 }, { id : 2 }, { id : 10 }, { id : 'a' } ]

  expect(indexBy(prop('id'))(list)).toStrictEqual({
    1  : { id : 1 },
    2  : { id : 2 },
    10 : { id : 10 },
    a  : { id : 'a' },
  })
})
