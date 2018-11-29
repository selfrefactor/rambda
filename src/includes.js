export function includes(target, input) {
  if (arguments.length === 1) {
    return inputHolder => includes(target, inputHolder)
  }
  const ok = Array.isArray(input) || typeof input === 'string'
  if (!ok) return false

  return input.includes(target)
}
