import { curry } from './curry'

function clampFn(
  lowLimit, highLimit, input
){
  if (input >= lowLimit && input <= highLimit) return input

  if (input > highLimit) return highLimit
  if (input < lowLimit) return lowLimit
}

export const clamp = curry(clampFn)
