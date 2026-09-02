import { uniqWith } from './uniqWith'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe(
    [{ a: 1 }, { a: 1 }],
    uniqWith((x, y) => x.a === y.a),
  )

  expectTypeOf(result).toEqualTypeOf<{ a: number }[]>()
  expect(result).toEqual([{ a: 1 }])
})

test('with list of strings', () => {
  const fn = (x: string, y: string) => x.length === y.length
  const list = ['0', '11', '222', '33', '4', '55']
  const result = uniqWith(fn)(list)
  expect(result).toEqual(['0', '11', '222'])
})

test('should return items that are not equal to themselves', () => {
  const data = [
    { id: 1, reason: 'No name' },
    { id: 1, reason: 'No name' },
    { reason: 'No name' },
    { reason: 'No name' },
  ]
  const expectedResult = [
    { id: 1, reason: 'No name' },
    { reason: 'No name' },
    { reason: 'No name' },
  ]
  const result = uniqWith(
    (errorA: { id?: number; reason: string }, errorB: { id?: number; reason: string }) => {
    if (errorA.id === undefined || errorB.id === undefined) {
      return false
    }
    return errorA.id === errorB.id
  })(data)

  expect(result).toEqual(expectedResult)
})
