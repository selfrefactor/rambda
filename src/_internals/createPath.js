export function createPath(path, delimiter = '.') {
  return typeof path === 'string'
    ? path.split(delimiter).map(x => (Number.isInteger(Number(x)) ? Number(x) : x))
    : path
}
