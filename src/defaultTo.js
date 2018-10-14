export default function defaultTo (defaultArgument, inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder => defaultTo(defaultArgument, inputArgumentHolder)
  }

  return inputArgument === undefined || inputArgument === null || Number.isNaN(inputArgument) === true ?
    defaultArgument :
    inputArgument
}
