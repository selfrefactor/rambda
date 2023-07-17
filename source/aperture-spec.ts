import {aperture} from 'rambda'

describe('R.aperture', () => {
  it('happy', () => {
    const result = aperture()

    result // $ExpectType number
  })
  it('curried', () => {
    const result = aperture()

    result // $ExpectType number
  })
})
