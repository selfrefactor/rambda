import {when} from 'rambda'

const ruleResult = 88
const rule = (x: number) => x > 2

describe('when', () => {
  it('without passing type', () => {
    const fn = when(rule, ruleResult)
    const result = [
      fn(1),
      fn(2)
    ]
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })

  it('with passing type', () => {
    const fn = when<number>(rule, ruleResult)
    const result = fn(1) 
    result // $ExpectType number
  })

  it('curry', () => {
    const fn = when<number>(rule)(ruleResult)
    const result = fn(1) 
    result // $ExpectType number
  })
})
