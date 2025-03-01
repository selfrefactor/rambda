import {baseSlice} from './_internals/baseSlice.js'

export function take(numberOfItems){
	return input => {
  if (howMany < 0) return input.slice()
  if (typeof input === 'string') return input.slice(0, howMany)

  return baseSlice(
    input, 0, howMany
  )
}
}
