import {when, add} from 'rambda'

const ruleResult = 88
const rule = (x: number) => x > 2

describe('when', () => {
  it('without passing type - happy', () => {
    const fn = when(rule, ruleResult)
    const result = [fn(1), fn(2)]
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })

  it('without passing type - second argument is function', () => {
    const fn = when(rule, add(1))
    const fnCurried = when(rule)(add(1))
    const [result1, result2] = [fn(1), fnCurried(2)]
    result1 // $ExpectType number
    result2 // $ExpectType unknown
  })

  it('with passing type', () => {
    const fn = when<number>(rule, ruleResult)
    const result = fn(1)
    result // $ExpectType number
  })

  it('with passing type - second argument is function', () => {
    const fn = when<number>(rule, add(1))
    const fnCurried = when<number>(rule)(add(1))
    const [result1, result2] = [fn(1), fnCurried(2)]
    result1 // $ExpectType number
    result2 // $ExpectType number
  })

  it('curry', () => {
    const fn = when<number>(rule)(ruleResult)
    const result = fn(1)
    result // $ExpectType number
  })
})
