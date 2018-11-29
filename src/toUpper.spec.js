import { compose } from './compose'
import { join } from './join'
import { map } from './map'
import { split } from './split'
import { toUpper } from './toUpper'

test('toUpper', () => {
  expect(
    compose(
      join(''),
      map(toUpper),
      split('')
    )('foo|bar|baz')
  ).toEqual('FOO|BAR|BAZ')
})
