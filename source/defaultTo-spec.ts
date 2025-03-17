import { defaultTo, pipe } from 'rambda'

describe('R.defaultTo', () => {
  it('happy', () => {
    const result = pipe('bar' as unknown, defaultTo('foo'))

    result // $ExpectType string
  })
})
