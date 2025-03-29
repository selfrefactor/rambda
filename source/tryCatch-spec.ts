import { map, pipe, tryCatch } from 'rambda'

describe('R.tryCatch', () => {
  it('happy', () => {
    const result = pipe(
      ['{a:1', '{"b": 2}'],
      map(
        tryCatch(x => {
          return JSON.parse(x) as string
        }, null),
      ),
    )

    result // $ExpectType (string | null)[]
  })
})
