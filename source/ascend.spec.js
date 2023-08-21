import { ascend } from './ascend.js'
import { descend } from './descend.js'
import { sort } from './sort.js'

const people = [
  {
    age  : 70,
    name : 'Emma',
  },
  {
    age  : 78,
    name : 'Peter',
  },
  {
    age  : 62,
    name : 'Mikhail',
  },
]

test('ascend', () => {
  const result = sort(ascend(x => x?.age),
    people)
  const expected = [
    {
      age  : 62,
      name : 'Mikhail',
    },
    {
      age  : 70,
      name : 'Emma',
    },
    {
      age  : 78,
      name : 'Peter',
    },
  ]
  expect(result).toEqual(expected)
})

test('descend', () => {
  const result = sort(descend(x => x?.age),
    people)
  const expected = [
    {
      age  : 78,
      name : 'Peter',
    },
    {
      age  : 70,
      name : 'Emma',
    },
    {
      age  : 62,
      name : 'Mikhail',
    },
  ]

  expect(result).toEqual(expected)
})
