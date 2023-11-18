import combinate from 'combinate'
import {
  equals,
  filter,
  forEach,
  init,
  last,
  omit,
  switcher,
  type,
} from 'rambdax'

const omitOk = omit('ok')

const PENDING = 'PENDING'
const RESULTS_EQUAL = 'results are equal'
const RESULTS_MISMATCH = 'results are different'
const ERRORS_EQUAL = 'errors are equal'
const ERRORS_MESSAGE_MISMATCH = 'errors messages are different'
const ERRORS_TYPE_MISMATCH = 'errors types are different'
const SHOULD_THROW = 'Rambda should throw'
const SHOULD_NOT_THROW = 'Rambda should not throw'
const ALL_ERROR_LABELS = {
  ERRORS_MESSAGE_MISMATCH,
  ERRORS_TYPE_MISMATCH,
  RESULTS_MISMATCH,
  SHOULD_NOT_THROW,
  SHOULD_THROW,
}
const MISSING = 'Missing error handle in parseError'

function parseError(err){
  const typeError = switcher(err)
    .is(x => x instanceof TypeError, 'TypeError')
    .is(x => x instanceof SyntaxError, 'SyntaxError')
    .is(x => x instanceof RangeError, 'RangeError')
    .is(x => x instanceof Error, 'Error')
    .default(MISSING)

  if (typeError === MISSING)
    throw new Error('typeError === MISSING')

  return {
    message : err.message,
    ok      : true,
    type    : typeError,
  }
}

function executeSync(
  fn, inputs, returnsFunctionFlag
){
  let result = PENDING
  let error = { ok : false }
  try {
    result = returnsFunctionFlag ?
      fn(...init(inputs))(last(inputs)) :
      fn(...inputs)
  } catch (e){
    error = parseError(e)
  }

  return {
    error,
    result,
  }
}

async function executeAsync(
  fn, inputs, returnsFunctionFlag
){
  let result = PENDING
  let error = { ok : false }
  try {
    result = returnsFunctionFlag ?
      await fn(...init(inputs))(last(inputs)) :
      await fn(...inputs)
  } catch (e){
    error = parseError(e)
  }

  return {
    error,
    result,
  }
}

export function profileMethod({
  firstInput,
  fn,
  returnsFunctionFlag = false,
  secondInput = undefined,
  thirdInput = undefined,
}){
  const combinationsInput = filter(Boolean, {
    firstInput,
    secondInput,
    thirdInput,
  })
  const inputKeys = Object.keys(combinationsInput)
  const combinations = combinate(combinationsInput)

  combinations.forEach(combination => {
    const inputs = [
      combination.firstInput,
      combination.secondInput,
      combination.thirdInput,
    ].filter((_, i) => i < inputKeys.length)

    test(getTestTitle(...inputs), () => {
      const { error, result } = executeSync(
        fn, inputs, returnsFunctionFlag
      )

      expect({
        error : error.ok ? omitOk(error) : PENDING,
        inputs,
        result,
      }).toMatchSnapshot()
    })
  })
}

export function profileMethodAsync({
  firstInput,
  fn,
  returnsFunctionFlag = false,
  secondInput = undefined,
  thirdInput = undefined,
}){
  const combinationsInput = filter(Boolean, {
    firstInput,
    secondInput,
    thirdInput,
  })
  const inputKeys = Object.keys(combinationsInput)
  const combinations = combinate(combinationsInput)

  combinations.forEach(combination => {
    const inputs = [
      combination.firstInput,
      combination.secondInput,
      combination.thirdInput,
    ].filter((_, i) => i < inputKeys.length)
    test(getTestTitle(...inputs), async () => {
      const { error, result } = await executeAsync(
        fn,
        inputs,
        returnsFunctionFlag
      )

      expect({
        error : error.ok ? omitOk(error) : PENDING,
        inputs,
        result,
      }).toMatchSnapshot()
    })
  })
}

export function compareToRamda(
  fn, fnRamda, returnsFunctionFlag
){
  return (...inputs) => {
    const { error, result } = executeSync(
      fn, inputs, returnsFunctionFlag
    )
    const { error: ramdaError, result: ramdaResult } = executeSync(
      fnRamda,
      inputs,
      returnsFunctionFlag
    )

    const toReturn = {
      error      : error.ok ? omitOk(error) : PENDING,
      ramdaError : ramdaError.ok ? omitOk(ramdaError) : PENDING,
      ramdaResult,
      result,
    }

    if (result !== PENDING){
      if (ramdaError.ok)
        return {
          ...toReturn,
          label : SHOULD_THROW,
          ok    : false,
        }

      if (equals(result, ramdaResult))
        return {
          ...toReturn,
          label : RESULTS_EQUAL,
          ok    : true,
        }

      return {
        ...toReturn,
        label : RESULTS_MISMATCH,
        ok    : false,
      }
    }

    if (equals(error, ramdaError))
      return {
        ...toReturn,
        label : ERRORS_EQUAL,
        ok    : true,
      }

    if (ramdaError.ok)
      return {
        ...toReturn,
        label :
          ramdaError.type === error.type ?
            ERRORS_MESSAGE_MISMATCH :
            ERRORS_TYPE_MISMATCH,
        ok : false,
      }

    return {
      ...toReturn,
      label : SHOULD_NOT_THROW,
      ok    : false,
    }
  }
}

export const getTestTitle = (...inputs) => inputs.map(type).join(' | ')

export const compareCombinations = ({
  callback = x => {},
  firstInput,
  fn,
  fnRamda,
  returnsFunctionFlag = false,
  secondInput = undefined,
  setCounter = () => {},
  thirdInput = undefined,
}) => {
  const counter = {
    ERRORS_MESSAGE_MISMATCH : 0,
    ERRORS_TYPE_MISMATCH    : 0,
    RESULTS_MISMATCH        : 0,
    SHOULD_NOT_THROW        : 0,
    SHOULD_THROW            : 0,
    TOTAL_TESTS             : 0,
  }

  const increaseCounter = comparedResult => {
    if (comparedResult.ok) return
    let counterProp
    forEach((x, prop) => {
      if (x === comparedResult.label) counterProp = prop
    }, ALL_ERROR_LABELS)
    counter[ counterProp ]++
  }

  const combinationsInput = filter(Boolean, {
    firstInput,
    secondInput,
    thirdInput,
  })
  const inputKeys = Object.keys(combinationsInput)
  const combinations = combinate(combinationsInput)
  const compareOutputs = compareToRamda(
    fn, fnRamda, returnsFunctionFlag
  )

  afterAll(() => callback(counter))

  combinations.forEach(combination => {
    const inputs = [
      combination.firstInput,
      combination.secondInput,
      combination.thirdInput,
    ].filter((_, i) => i < inputKeys.length)

    test(getTestTitle(...inputs), () => {
      const compared = compareOutputs(...inputs)
      setCounter()
      if (!compared.ok){
        // if (compared.label === RESULTS_MISMATCH){
        increaseCounter(compared)
        expect({
          ...compared,
          inputs,
        }).toMatchSnapshot()
      }
      counter.TOTAL_TESTS++
    })
  })
}

const demoMap = new Map()

demoMap.set('a', 1)
demoMap.set('b', 2)

const demoWeakMap = new WeakMap()

demoWeakMap.set({ a : 0 }, 1)
demoWeakMap.set({ b : 0 }, 2)

const demoWeakSet = new WeakSet()
const foo = { a : 1 }
const bar = { b : 2 }

demoWeakSet.add(foo)
demoWeakSet.add(bar)

const demoBigInt = BigInt(9007199254740991)

const demoRegExp = new RegExp('ab+c', 'i')
const demoSymbol = Symbol('foo')

export const FALSY_VALUES = [ null, undefined, false, NaN, '' ]
export const EXTRA_BUILD_IN_OBJECTS = [
  Infinity,
  -Infinity,
  Symbol,
  new ArrayBuffer(8),
  demoRegExp,
  demoMap,
  demoWeakMap,
  demoWeakSet,
  demoBigInt,
  demoSymbol,
]

export const FOO = 'FOO'
export const BAR = 'BAR'
export const BAZ = 'BAZ'
export const FOOBAR = 'FOOBAR'

export function eq(actual, expected){
  expect(actual).toEqual(expected)
}

export const willFailAssertion = () => {
  expect(true).toBe(false)
}
