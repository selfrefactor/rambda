export function endsWith (substr, str) {
  if (arguments.length === 1) { return strHolder => endsWith(substr, str) }

  return str.endsWith(substr)
}
