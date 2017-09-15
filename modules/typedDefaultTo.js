import type from './type'

export default function typedDefaultTo (defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder => typedDefaultTo(defaultArgument, inputArgumentHolder)
  }

  return inputArgument === undefined || !(type(inputArgument) === type(defaultArgument)) ?
    defaultArgument :
    inputArgument
}
