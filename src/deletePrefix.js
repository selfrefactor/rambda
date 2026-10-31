export function deletePrefix(prefix) {
  return (str) => (str.startsWith(prefix) ? str.slice(prefix.length) : str)
}
