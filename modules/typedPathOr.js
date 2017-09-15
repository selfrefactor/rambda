import typedDefaultTo from './typedDefaultTo'
import path from './path'

function typedPathOr (defaultValue, inputPath, inputObject) {
  if(arguments.length === 2){

    return inputObjectHolder => pathOr(defaultValue, inputPath, inputObjectHolder)
  }else if(arguments.length === 1){

    return (inputPathHolder, inputObjectHolder) => pathOr(defaultValue, inputPathHolder, inputObjectHolder)
  }

  return typedDefaultTo(defaultValue, path(inputPath, inputObject))
}

export default typedPathOr
