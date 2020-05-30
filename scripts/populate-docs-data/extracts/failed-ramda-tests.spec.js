import { failedRamdaTests } from './failed-ramda-tests'

test('happy', () => {
  expect(failedRamdaTests()).toMatchSnapshot()
})
