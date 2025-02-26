import { dropRepeats } from './dropRepeats.js'

const list = [1, 2, 2, 3, 4, 4, 5, 5, 3, 2, 2, { a: 1 }, { a: 1 }]
const listClean = [1, 2, 3, 4, 5, 3, 2, { a: 1 }]

test('happy', () => {
  const result = dropRepeats(list)
  expect(result).toEqual(listClean)
})

