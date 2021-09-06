import {join, unapply, sum} from 'rambda'

describe('R.unapply', () => {
  it('happy', () => {
    const fn = unapply(sum)
    
    fn(1, 2, 3) // $ExpectType number
  })

  it('joins a string', () => {
    const fn = unapply(join(''))

    fn('s', 't', 'r', 'i', 'n', 'g') // $ExpectType string
  })
})
