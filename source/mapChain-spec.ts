import { mapChain, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.mapChain', () => {
  const result = pipe(
    list,
    mapChain(
      x => {
        x // $ExpectType number
        return String(x)
      },
      x => {
        x // $ExpectType string
        return x !== 'foo'
      },
    ),
  )
  result // $ExpectType boolean[]
})

it('R.mapChain - with index', () => {
  const result = pipe(
    list,
    mapChain(
      x => {
        x // $ExpectType number
        return String(x)
      },
      (x, i) => {
        i // $ExpectType number
        x // $ExpectType string
        return x !== 'foo'
      },
    ),
  )
  result // $ExpectType boolean[]
})

it('R.mapChain - 3 functions', () => {
  const result = pipe(
    list,
    x => x,
    mapChain(
      x => {
        x // $ExpectType number
        return String(x)
      },
      x => {
        x // $ExpectType string
        return x !== 'foo'
      },
      x => {
        x // $ExpectType boolean
        return x ? 'foo' : 'bar'
      },
    ),
  )
  result // $ExpectType ("foo" | "bar")[]
})
