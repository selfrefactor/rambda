import { failedRamdaTests } from './failed-ramda-tests.js'

test('happy', () => {
  expect(failedRamdaTests()).toMatchSnapshot()
})
