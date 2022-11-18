import {groupBy} from 'rambda'
import {groupBy as groupByRamda, prop} from 'ramda'

interface Thing {
  name: string,
  position: string,
}

interface Output {
  left: Thing[],
  right: Thing[],
}

const things = [
  {name: 'one', position: 'left'},
  {name: 'two', position: 'left'},
  {name: 'three', position: 'right'},
  {name: 'four', position: 'right'},
]

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'barr']

    const result = groupBy(groupByFn, list)
    result // $ExpectType { [index: string]: string[]; }

    const curriedResult = groupBy(groupByFn)(list)
    curriedResult // $ExpectType { [index: string]: string[]; }
  })
  it('with one explicit types', () => {
    const groupByPosition = groupBy<Thing>(prop('position'))
    groupByRamda(prop('position'))

    const result = groupByPosition(things)
    result // $ExpectType { [index: string]: Thing[]; }
    result[9] // $ExpectType Thing[]
    result.foo // $ExpectType Thing[]
  })
  it('with two explicit types', () => {
    const groupByPosition = groupBy<Thing, Output>(prop('position'))

    const result = groupByPosition(things)
    result // $ExpectType Output
  })
})
