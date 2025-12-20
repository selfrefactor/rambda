import { filter, includes, pipe, reject, sort, split, uniq } from 'rambda'

const list = [1, 2, 3]

describe('R.filter with array', () => {
  it('within pipe', () => {
    const _result = pipe(
      list,
      filter(x => {
        x // $ExpectType number
        return x > 1
      }),
    )
    _result // $ExpectType number[]
  })

  it('complex example', () => {
    const text = `Dies ist ein einfacher Beispielsatz. Il fait beau aujourd'hui!`
    const language = 'de'
		const SENTENCE_END_CHARS = ['.', '!', '?', '।', '؟']
    const result = pipe(
      text,
      split(''),
      uniq,
      filter(char => {
        if (language === 'de') {
          return /[A-Za-zäßüöÜÖÄ]/g.test(char) === false
        }
        if (language === 'fr') {
          return /[A-Za-zÀÉàâçèéêîïôùû']/g.test(char) === false
        }
        throw new Error(`Language ${language} not supported`)
      }),
      sort((a, b) => (a === b ? 0 : a > b ? 1 : -1)),
      filter(char => char.trim().length > 0),
      reject(includes(SENTENCE_END_CHARS)),
    )

    result // $ExpectType string[]
  })
  it('narrowing type', () => {
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
    const _result = pipe(testList, filter(filterBar))
    _result // $ExpectType Bar[]
  })

  it('narrowing type - readonly', () => {
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
    const _result = pipe(testList, filter(filterBar))
    _result // $ExpectType Bar[]
  })

  it('filtering NonNullable - list of objects', () => {
    const testList = [{ a: 1 }, { a: 2 }, false, { a: 3 }]
    const _result = pipe(testList, filter(Boolean))
    _result // $ExpectType { a: number; }[]
  })

  it('filtering NonNullable - readonly', () => {
    const testList = [1, 2, true, false, null, undefined, 3] as const
    const result = pipe(testList, filter(Boolean))
    result.includes(1)
    // @ts-expect-error
    result.includes(true)
    // @ts-expect-error
    result.includes(false)
    // @ts-expect-error
    result.includes(4)
    // @ts-expect-error
    result.includes(undefined)
    // @ts-expect-error
    result.includes(null)
  })
})
