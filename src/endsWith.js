export function endsWith(suffix, input){
  if (arguments.length === 1) return _input => endsWith(suffix, _input)

  return input.endsWith(suffix)
}
