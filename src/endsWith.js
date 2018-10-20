export function endsWith(substr, str) {
  if (arguments.length === 1) {
    return strHolder => endsWith(substr, strHolder)
  }

  return str.endsWith(substr)
}
