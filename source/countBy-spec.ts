import {countBy} from 'rambda'

const transformFn = (x: string) => x.toLowerCase()
const list = ['a', 'A', 'b', 'B', 'c', 'C']

describe('R.countBy', () => {
  it('happy', () => {
    const result = countBy(transformFn, list)

    result // $ExpectType Record<string, number>
  })
  it('curried', () => {
    const result = countBy(transformFn)(list)

    result // $ExpectType Record<string, number>
  })
})
