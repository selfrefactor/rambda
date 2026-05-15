import { switcher } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.switcher', () => {
  it('no transformation', () => {
    const list = [1, 2, 3]

    const result = switcher(list.length)
      .is(x => x < 2, 4)
      .is(x => x < 4, 6)
      .default(7)

    expectTypeOf(result).toEqualTypeOf<number>()
  })
  it('with transformation', () => {
    const list = [1, 2, 3]
    type Stage = 'firstStage' | 'secondStage' | 'thirdStage'

    const result = switcher<number, Stage>(list.length)
      .is(x => x < 2, 'firstStage')
      .is(x => x < 4, 'secondStage')
      .default('thirdStage')

    expectTypeOf(result).toEqualTypeOf<Stage>()
  })
})
