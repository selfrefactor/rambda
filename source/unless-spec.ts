import {unless, inc} from 'rambda'

describe('R.unless', () => {
  it('happy', () => {
    const fn = unless(x => x > 5, inc)
    const result = fn(1)
    result // $ExpectType number
  })
  it('with one explicit type', () => {
    const result = unless(x => {
      x // $ExpectType number
      return x > 5
    }, x => {
      x // $ExpectType number
      return x + 1
    }, 1)
    result // $ExpectType number
  })
  it('with two different explicit types', () => {
    const result = unless(x => {
      x // $ExpectType number
      return x > 5
    }, x => {
      x // $ExpectType number
      return `${x}-foo`
    }, 1)
    result // $ExpectType string | number
  })
})

describe('R.unless - curried', () => {
  it('happy', () => {
    const fn = unless(x => x > 5, inc)
    const result = fn(1)
    result // $ExpectType number
  })
  it('with one explicit type', () => {
    const fn = unless<number>(x => {
      x // $ExpectType number
      return x > 5
    }, x => {
      x // $ExpectType number
      return x + 1
    })
    const result = fn(1)
    result // $ExpectType number
  })
  it('with two different explicit types', () => {
    const fn = unless<number, string>(x => {
      x // $ExpectType number
      return x > 5
    }, x => {
      x // $ExpectType number
      return `${x}-foo`
    })
    const result = fn(1)
    result // $ExpectType string | number
  })
})
