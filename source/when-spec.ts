import {when} from 'rambda'

const predicate = (x: number) => x > 2
const whenTrueFn = (x: number) => x + 2

describe('R.when', () => {
  it('happy', () => {
    const result = when(predicate, whenTrueFn, 1)
    result // $ExpectType number
  })

  it('curry 1', () => {
    const fn = when(predicate, whenTrueFn)
    const result = fn(1)
    result // $ExpectType number
  })

  it('curry 2 require explicit types', () => {
    const fn = when<number, number>(predicate)(whenTrueFn)
    const result = fn(1)
    result // $ExpectType number
  })

  it('curry 3 require explicit types', () => {
    const result = when<number, number>(predicate)(whenTrueFn, 1)
    result // $ExpectType number
  })
})
