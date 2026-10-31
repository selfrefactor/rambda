export function deleteSuffix(suffix) {
  return (str) =>
    suffix && str.endsWith(suffix) ? str.slice(0, -1 * suffix.length) : str
}
