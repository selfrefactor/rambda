import { curry } from './curry'

function clampFn(
  min, max, input
){
  if (input >= min && input <= max) return input

  if (input > max) return max
  if (input < min) return min
}

export const clamp = curry(clampFn)
