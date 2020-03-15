import { groupBy } from './groupBy'
import { prop } from './prop'

test('groupBy', () => {
  const list = [
    {
      age  : 12,
      name : 'john',
    },
    {
      age  : 12,
      name : 'jack',
    },
    {
      age  : 24,
      name : 'mary',
    },
    {
      age  : 24,
      name : 'steve',
    },
  ]
  const expectedResult = {
    12 : [ {
      age  : 12,
      name : 'john',
    }, {
      age  : 12,
      name : 'jack',
    } ],
    24 : [ {
      age  : 24,
      name : 'mary',
    }, {
      age  : 24,
      name : 'steve',
    } ],
  }

  expect(groupBy(prop('age'))(list)).toEqual(expectedResult)
  expect(groupBy(prop('age'), list)).toEqual(expectedResult)
})
