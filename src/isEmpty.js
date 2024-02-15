import { type } from './type.js'

export function isEmpty(input){
  const inputType = type(input)
  if ([ 'Undefined', 'NaN', 'Number', 'Null' ].includes(inputType))
    return false
  if (!input) return true

  console.error(type(input.isEmpty), input.isEmpty);

  if (type(input.isEmpty) === 'Function') {
	return input.isEmpty();
  } else if (input.isEmpty) {
	return input.isEmpty;
  }

  if (inputType === 'Object'){
    return Object.keys(input).length === 0
  }

  if (inputType === 'Array'){
    return input.length === 0
  }

  return false
}
