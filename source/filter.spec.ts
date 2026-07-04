import { filter } from './filter'
import { includes } from './includes'
import { pipe } from './pipe'
import { reject } from './reject'
import { sort } from './sort'
import { split } from './split'
import { uniq } from './uniq'

test('happy', () => {
  const isEven = (n: number) => n % 2 === 0
  expect(filter(isEven)([1, 2, 3, 4])).toEqual([2, 4])
})

test('using Boolean', () => {
  expect(filter(Boolean)([null, 0, 1, 2])).toEqual([1, 2])
})

test('within pipe', () => {
  const result = pipe(
    [1, 2, 3],
    filter((x: number) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      return x > 1
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([2, 3])
})

test('with index', () => {
  const result = pipe(
    [1, 2, 3],
    filter((x: number, i: number) => {
      expectTypeOf(x).toEqualTypeOf<number>()
      expectTypeOf(i).toEqualTypeOf<number>()
      return x > 1
    }),
  )
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([2, 3])
})

test('complex example', () => {
  const text = `Dies ist ein einfacher Beispielsatz. Il fait beau aujourd'hui!`
  const language = 'de'
  const SENTENCE_END_CHARS = ['.', '!', '?', '।', '؟']
  const result = pipe(
    text,
    split(''),
    uniq,
    filter((char: string) => {
      if (language === 'de') {
        return /[A-Za-zäßüöÜÖÄ]/g.test(char) === false
      }
      if (language === 'fr') {
        return /[A-Za-zÀÉàâçèéêîïôùû']/g.test(char) === false
      }
      throw new Error(`Language ${language} not supported`)
    }),
    sort((a: string, b: string) => (a === b ? 0 : a > b ? 1 : -1)),
    filter((char: string) => char.trim().length > 0),
    reject(includes(SENTENCE_END_CHARS)),
  )
  expectTypeOf(result).toEqualTypeOf<string[]>()
})

test('narrowing type', () => {
  interface Foo {
    a: number
  }
  interface Bar extends Foo {
    b: string
  }
  type T = Foo | Bar
  const testList: T[] = [{ a: 1 }, { a: 2 }, { a: 3 }]
  const filterBar = (x: T): x is Bar => {
    return typeof (x as Bar).b === 'string'
  }
  const result = pipe(testList, filter(filterBar))
  expectTypeOf(result).toEqualTypeOf<Bar[]>()
})

test('narrowing type - readonly', () => {
  interface Foo {
    a: number
  }
  interface Bar extends Foo {
    b: string
  }
  type T = Foo | Bar
  const testList: T[] = [{ a: 1 }, { a: 2 }, { a: 3 }] as const
  const filterBar = (x: T): x is Bar => {
    return typeof (x as Bar).b === 'string'
  }
  const result = pipe(testList, filter(filterBar))
  expectTypeOf(result).toEqualTypeOf<Bar[]>()
})

test('filtering NonNullable - list of objects', () => {
  const testList = [{ a: 1 }, { a: 2 }, false, { a: 3 }]
  const result = pipe(testList, filter(Boolean))
  expectTypeOf(result).toEqualTypeOf<{ a: number }[]>()
})

test('filtering NonNullable - readonly', () => {
  const testList = [1, 2, true, false, null, undefined, 3] as const
  const result = pipe(testList, filter(Boolean))
  expectTypeOf(result).toEqualTypeOf<1 | 2 | 3>()
})
