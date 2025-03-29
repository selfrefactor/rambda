export function mapParallelAsync(fn) {
  return async list =>  Promise.all(list.map((x, i) => fn(x, i)))
}
