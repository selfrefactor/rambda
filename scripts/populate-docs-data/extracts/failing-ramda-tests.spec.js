import { failingRamdaTests } from './failing-ramda-tests.js'

test('happy', () => {
  expect(failingRamdaTests()).toMatchSnapshot()
})
