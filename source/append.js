export function append(x, input){
  if (arguments.length === 1) return _input => append(x, _input)

  if (typeof input === 'string') return input.split('').concat(x)

  const clone = input.slice()
  clone.push(x)

  return clone
}
