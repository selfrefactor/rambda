import { indexBy } from './indexBy'
import { pipe } from './pipe'

test('happy', () => {
  const list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }]
  expect(
    indexBy<{ id: string; title: string }, 'id'>('id')(list)
  ).toEqual(
    { abc: { id: 'abc', title: 'B' }, xyz: { id: 'xyz', title: 'A' } }
  )
})

test('type test', () => {
  const list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }]
  const result = pipe(list, indexBy('id'))
  expectTypeOf(result.abc).toEqualTypeOf<{ id: string; title: string; }>()
  expect(result).toEqual({ abc: { id: 'abc', title: 'B' }, xyz: { id: 'xyz', title: 'A' } })
})
