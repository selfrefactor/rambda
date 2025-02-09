import { groupBy, prop } from 'rambda'

interface Thing {
  name: string
  position: string
}

const things = [
  { name: 'one', position: 'left' },
  { name: 'two', position: 'left' },
  { name: 'three', position: 'right' },
  { name: 'four', position: 'right' },
]

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'bar']

    const result = groupBy(groupByFn, list)
    result // $ExpectType Partial<Record<string, string[]>>

    const curriedResult = groupBy(groupByFn)(list)
    curriedResult // $ExpectType Partial<Record<string, string[]>>
  })
  it('with one explicit types', () => {
    const groupByPosition = groupBy<Thing>(prop('position'))

    const result = groupByPosition(things)
    result // $ExpectType Partial<Record<string, Thing[]>>
    result[9] // $ExpectType Thing[] | undefined
    result.foo // $ExpectType Thing[] | undefined
  })
})
