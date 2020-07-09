import {piped} from 'rambda'

describe('R.piped', () => {
  it('happy',  () => {
    const result = piped<number>(
      4,
      x => {
        return x + 1
      },
       x => {
        return x + 10
      }
    )

    result // $ExpectType number
  })
})
