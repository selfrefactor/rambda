import { switcher } from 'rambda'

describe('R.switcher', () => {
  it('no transformation', () => {
    const list = [1, 2, 3]

    const result = switcher(list.length)
      .is(x => x < 2, 4)
      .is(x => x < 4, 6)
      .default(7)

    result // $ExpectType number
  })
  it('with transformation', () => {
    const list = [1, 2, 3]
    type Stage = 'firstStage' | 'secondStage' | 'thirdStage'

    const result = switcher<number, Stage>(list.length)
      .is(x => x < 2, 'firstStage')
      .is(x => x < 4, 'secondStage')
      .default('thirdStage')

    result // $ExpectType Stage
  })
})
