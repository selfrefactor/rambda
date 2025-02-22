import { intersperse } from './intersperse.js'

test('intersperse', () => {
  const list = [{ id: 1 }, { id: 2 }, { id: 10 }, { id: 'a' }]
  expect(intersperse('!', list)).toEqual([
    { id: 1 },
    '!',
    { id: 2 },
    '!',
    { id: 10 },
    '!',
    { id: 'a' },
  ])

  expect(intersperse('!')([])).toEqual([])
})
