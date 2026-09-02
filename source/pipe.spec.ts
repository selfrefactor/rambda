import { filter } from './filter'
import { map } from './map'
import { pipe } from './pipe'
import { split } from './split'

test('happy', () => {
  const result = pipe(
    [1, 2, 3],
    filter(x => x > 1),
    map(x => x * 10),
    map(x => x + 1),
  )
  expect(result).toEqual([21, 31])
})

test('split test', () => {
  const tableData = `id,title,year
1,The First,2001
2,The Second,2020
3,The Third,2018`

  const result = pipe(tableData, split('\n'), map(split(',')))
  expectTypeOf(result).toEqualTypeOf<string[][]>()
  expect(result).toEqual([
    ['id', 'title', 'year'],
    ['1', 'The First', '2001'],
    ['2', 'The Second', '2020'],
    ['3', 'The Third', '2018'],
  ])
})

test('R.pipe type test', () => {
  const obj = { a: 'foo', b: 'bar' }
  const result = pipe(
    obj,
    x => ({ a: x.a.length + x.b.length }),
    x => ({ ...x, b: x.a + 'foo' }),
    x => ({ ...x, c: x.b + 'bar' }),
  )
  expectTypeOf(result.a).toEqualTypeOf<number>()
  expectTypeOf(result.b).toEqualTypeOf<string>()
  expectTypeOf(result.c).toEqualTypeOf<string>()
  expect(result.a > 0).toBeTruthy()
})
