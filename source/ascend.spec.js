import { ascend } from './ascend.js'
import { descend } from './descend.js'
import { sort } from './sort.js'

const people = [
  {
    name: 'Emma',
    age: 70,
  },
  {
    name: 'Peter',
    age: 78,
  },
  {
    name: 'Mikhail',
    age: 62,
  },
]

test('ascend', () => {
  const result = sort(
    ascend(x => x?.age),
    people,
  )
  const expected = [
    {
      name: 'Mikhail',
      age: 62,
    },
    {
      name: 'Emma',
      age: 70,
    },
    {
      name: 'Peter',
      age: 78,
    },
  ]
  expect(result).toEqual(expected)
})

test('descend', () => {
  const result = sort(
    descend(x => x?.age),
    people,
  )
  const expected = [
    {
      name: 'Peter',
      age: 78,
    },
    {
      name: 'Emma',
      age: 70,
    },
    {
      name: 'Mikhail',
      age: 62,
    },
  ]

  expect(result).toEqual(expected)
})
