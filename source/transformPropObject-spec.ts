import type { transformPropObject } from 'rambda'
import { expectTypeOf, it } from 'vitest'

/**
 * `transformPropObject` is declared in typings but not exported from the JS bundle yet.
 * Keep compile-time-only assertions so Vitest does not execute missing runtime.
 */
it('R.transformPropObject', () => {
  expectTypeOf<typeof transformPropObject>().toBeFunction()
})
