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
  RESULTS_MISMATCH,
  ERRORS_MESSAGE_MISMATCH,
  ERRORS_TYPE_MISMATCH,
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

  if (typeError === MISSING){
    throw new Error('typeError === MISSING')
  }

  return {
    message : err.message,
    type    : typeError,
    ok      : true,
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
    result,
    error,
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
    result,
    error,
  }
}

export function profileMethod({
  firstInput,
  secondInput = undefined,
  thirdInput = undefined,
  returnsFunctionFlag = false,
  fn,
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
      const { result, error } = executeSync(
        fn, inputs, returnsFunctionFlag
      )

      expect({
        result,
        error : error.ok ? omitOk(error) : PENDING,
        inputs,
      }).toMatchSnapshot()
    })
  })
}

export function profileMethodAsync({
  firstInput,
  secondInput = undefined,
  thirdInput = undefined,
  returnsFunctionFlag = false,
  fn,
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
      const { result, error } = await executeAsync(
        fn,
        inputs,
        returnsFunctionFlag
      )

      expect({
        result,
        error : error.ok ? omitOk(error) : PENDING,
        inputs,
      }).toMatchSnapshot()
    })
  })
}

export function compareToRamda(
  fn, fnRamda, returnsFunctionFlag
){
  return (...inputs) => {
    const { result, error } = executeSync(
      fn, inputs, returnsFunctionFlag
    )
    const { result: ramdaResult, error: ramdaError } = executeSync(
      fnRamda,
      inputs,
      returnsFunctionFlag
    )

    const toReturn = {
      result,
      ramdaResult,
      ramdaError : ramdaError.ok ? omitOk(ramdaError) : PENDING,
      error      : error.ok ? omitOk(error) : PENDING,
    }

    if (result !== PENDING){
      if (ramdaError.ok){
        return {
          ...toReturn,
          ok    : false,
          label : SHOULD_THROW,
        }
      }

      if (equals(result, ramdaResult)){
        return {
          ...toReturn,
          ok    : true,
          label : RESULTS_EQUAL,
        }
      }

      return {
        ...toReturn,
        ok    : false,
        label : RESULTS_MISMATCH,
      }
    }

    if (equals(error, ramdaError)){
      return {
        ...toReturn,
        ok    : true,
        label : ERRORS_EQUAL,
      }
    }

    if (ramdaError.ok){
      return {
        ...toReturn,
        ok    : false,
        label :
          ramdaError.type === error.type ?
            ERRORS_MESSAGE_MISMATCH :
            ERRORS_TYPE_MISMATCH,
      }
    }

    return {
      ...toReturn,
      ok    : false,
      label : SHOULD_NOT_THROW,
    }
  }
}

export const getTestTitle = (...inputs) => inputs.map(type).join(' | ')

export const compareCombinations = ({
  firstInput,
  secondInput = undefined,
  thirdInput = undefined,
  returnsFunctionFlag = false,
  setCounter = () => {},
  callback = x => {},
  fn,
  fnRamda,
}) => {
  const counter = {
    RESULTS_MISMATCH        : 0,
    SHOULD_THROW            : 0,
    SHOULD_NOT_THROW        : 0,
    ERRORS_TYPE_MISMATCH    : 0,
    ERRORS_MESSAGE_MISMATCH : 0,
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
        //   const log = {combination, }
        //   console.log(log);
        // }
        increaseCounter(compared)
        expect({
          ...compared,
          inputs,
        }).toMatchSnapshot()
      }
    })
  })
}
