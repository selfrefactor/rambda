import { reduce } from './reduce.js'

export function pipeAsync(input, ...fnList) {
  return reduce(async (value, fn) => fn(await value), input, fnList)
}
