import combinate from 'combinate'
import { equals, filter, type } from 'rambdax'

const PENDING = 'PENDING'
const RESULTS_EQUAL = 'results are equal'
const ERRORS_EQUAL = 'errors are equal'
const SHOULD_THROW = 'Rambda should throw'
const SHOULD_NOT_THROW = 'Rambda should throw'

export function compareToRamda(fn, fnRamda){
  return (...inputs) => {
    let ramdaResult = PENDING
    let result = PENDING
    let ramdaError = PENDING
    let error = PENDING
    try {
      result = fn(...inputs)
    } catch (e){
      error = e.message
    }
    try {
      ramdaResult = fnRamda(...inputs)
    } catch (e){
      ramdaError = e.message
    }
    const toReturn = {
      result,
      ramdaResult,
      ramdaError,
      error,
    }
    if (result !== PENDING && equals(result, ramdaResult)){
      return {
        ...toReturn,
        ok    : true,
        label : RESULTS_EQUAL,
      }
    } else if (error !== PENDING && equals(error, ramdaError)){
      return {
        ...toReturn,
        ok    : true,
        label : ERRORS_EQUAL,
      }
    } else if (result !== PENDING){
      return {
        ...toReturn,
        ok    : false,
        label : SHOULD_THROW,
      }
    } else if (error !== PENDING){
      return {
        ...toReturn,
        ok    : false,
        label : SHOULD_NOT_THROW,
      }
    }

    return {
      ...toReturn,
      ok    : false,
      label : 'unknown',
    }
  }
}

export const show = x => x
export const getTestTitle = (...inputs) =>
  inputs.map(x => `${ type(x) } ${ show(x) }`).join(' | ')

export const compareCombinations = ({
  firstInput,
  secondInput = undefined,
  thirdInput = undefined,
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

      if (!compared.ok){
        expect({
          ...compared,
          inputs,
        }).toMatchSnapshot()
      }
    })
  })
}
