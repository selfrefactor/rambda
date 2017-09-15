import defaultTo from './defaultTo'
import path from './path'

function pathOr (defaultValue, inputPath, inputObject) {
  if(arguments.length === 2){

    return inputObjectHolder => pathOr(defaultValue, inputPath, inputObjectHolder)
  }else if(arguments.length === 1){

    return (inputPathHolder, inputObjectHolder) => pathOr(defaultValue, inputPathHolder, inputObjectHolder)
  }

  return defaultTo(defaultValue, path(inputPath, inputObject))
}

export default pathOr
