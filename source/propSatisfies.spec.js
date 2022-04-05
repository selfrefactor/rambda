import {propSatisfies} from './propSatisfies'

const obj = {a: 1}

test('when true', () => {
  expect(propSatisfies(x => x > 0, 'a', obj)).toBeTrue()
})

test('when false', () => {
  expect(propSatisfies(x => x < 0, 'a')(obj)).toBeFalse()
})
