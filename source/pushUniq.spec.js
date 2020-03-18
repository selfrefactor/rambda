import { pushUniq } from './pushUniq'

test('happy', () => {
  const x = 4
  const list = [ 1, 2, 3 ]

  pushUniq(x, list)

  expect(list).toEqual([ 1, 2, 3, 4 ])
})

test('when such element already exists', () => {
  const x = 2
  const list = [ 1, 2, 3 ]

  pushUniq(x, list)

  expect(list).toEqual([ 1, 2, 3 ])
})

