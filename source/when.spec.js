import { add } from './add'
import { is } from './is'
import { when } from './when'

const ruleResult = 'RULE_RESULT'
const rule = x => typeof x === 'number'
const fn = when(rule, ruleResult)
const curriedFn = when(rule)(ruleResult)

test('when rule returns true', () => {
  const input = 7

  expect(fn(input)).toBe(ruleResult)
})

test('when rule returns false', () => {
  const input = 'foo'

  expect(fn(input)).toBe(input)
  expect(curriedFn(input)).toBe(input)
})

test('second argument can be a function', () => {
  const fn = when(is(Number), add(1))
  expect(fn(10)).toBe(11)
})
