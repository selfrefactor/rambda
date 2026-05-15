import { test as ramdaTest } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const input = 'foo   '
const regex = /foo/

it('R.test', () => {
  const result = ramdaTest(regex)(input)

  expectTypeOf(result).toEqualTypeOf<boolean>()
})
