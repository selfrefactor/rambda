import { once } from 'rambda'

describe('R.once', () => {
  it('happy', () => {
    const runOnce = once((x: number) => {
      return x + 2
    })

    const result = runOnce(1)
    result // $ExpectType number
  })
  it('with context', () => {
    const runOnce = once(function (this: any, x: number) {
      return x + 2
    })

    const result = runOnce.call({}, 1)
    result // $ExpectType number
  })
})
