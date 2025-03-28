import { head, pipe, tap, when } from 'rambda'

function notNull<T>(a: T | null | undefined): a is T {
  return a != null
}

describe('R.when', () => {
  it('happy', () => {
    const result = pipe(
      [1, null, 2, 3],
      head,
      when(notNull, x => x + 1),
    )
    result // $ExpectType number | null
  })
  it('happy', () => {
    const result = pipe(
      1,
      when(
        x => x > 2,
        x => x,
      ),
      tap(x => {
        x // $ExpectType number
      }),
      when(
        x => x > 2,
        x => String(x),
      ),
    )

    result // $ExpectType string | number
  })
})
