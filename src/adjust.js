import { curry } from './curry'

function adjustFn(
  index, fn, list
){
  const actualIndex = index < 0 ? list.length + index : index
  if (index >= list.length || actualIndex < 0) return list

  const clone = list.slice()
  clone[ actualIndex ] = fn(clone[ actualIndex ])

  return clone
}

export const adjust = curry(adjustFn)
