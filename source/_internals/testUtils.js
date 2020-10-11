import combinate from 'combinate'
import { equals, filter, omit, switcher, type } from 'rambdax'

const PENDING = 'PENDING'
const RESULTS_EQUAL = 'results are equal'
const RESULTS_MISMATCH = 'results are different'
const ERRORS_EQUAL = 'errors are equal'
const ERRORS_MISMATCH = 'errors are different'
const SHOULD_THROW = 'Rambda should throw'
const SHOULD_NOT_THROW = 'Rambda should not throw'

function parseError(err){
  const typeError = switcher(err)
    .is(x => x instanceof TypeError, 'TypeError')
    .is(x => x instanceof TypeError, 'TypeError')
    .is(x => x instanceof TypeError, 'TypeError')
    .default('Missing error handle in parseError')

  return {
    message : err.message,
    type    : typeError,
    ok      : true,
  }
}

export function compareToRamda(fn, fnRamda){
  return (...inputs) => {
    let ramdaResult = PENDING
    let result = PENDING
    let ramdaError = { ok : false }
    let error = { ok : false }
    try {
      result = fn(...inputs)
    } catch (e){
      error = parseError(e)
    }
    try {
      ramdaResult = fnRamda(...inputs)
    } catch (e){
      ramdaError = parseError(e)
    }
    const toReturn = {
      result,
      ramdaResult,
      ramdaError : ramdaError.ok ? omit('ok', ramdaError) : PENDING,
      error      : error.ok ? omit('ok', error) : PENDING,
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
        label : ERRORS_MISMATCH,
      }
    }

    return {
      ...toReturn,
      ok    : false,
      label : SHOULD_NOT_THROW,
    }
  }
}

export const getTestTitle = (...inputs) =>
  inputs.map(x => `${ type(x) } ${ x }`).join(' | ')

export const compareCombinations = ({
  firstInput,
  secondInput = undefined,
  thirdInput = undefined,
  setCounter = () => {},
  setGlobalCounter = () => {},
  fn,
  fnRamda,
}) => {
  const combinationsInput = filter(Boolean, {
    firstInput,
    secondInput,
    thirdInput,
  })
  const inputKeys = Object.keys(combinationsInput)
  const combinations = combinate(combinationsInput)
  const compareOutputs = compareToRamda(fn, fnRamda)

  combinations.forEach(combination => {
    const inputs = [
      combination.firstInput,
      combination.secondInput,
      combination.thirdInput,
    ].filter((_, i) => i < inputKeys.length)

    test(getTestTitle(...inputs), () => {
      const compared = compareOutputs(...inputs)
      setGlobalCounter()
      if (!compared.ok){
        setCounter()
        expect({
          ...compared,
          inputs,
        }).toMatchSnapshot()
      }
    })
  })
}
