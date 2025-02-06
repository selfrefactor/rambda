import { switcher } from 'rambda'

describe('R.switcher', () => {
  it('happy', () => {
    const result = switcher<number>('foo').is('bar', 2).is('foo', 3).default(4)

    result // $ExpectType number
  })
  it('returns a function', () => {
    type Input = (x: number) => boolean

    const fn = switcher<Input>('foo')
      .is('bar', (x: number) => x % 2 === 0)
      .is('foo', (x: number) => x > 3)
      .default((x: number) => x < 77)

    const result = fn(8)
    result // $ExpectType boolean
  })
})
