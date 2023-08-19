import { isInteger } from "../../source/_internals/isInteger"

export function createPath(path, delimiter = '.'){
  return typeof path === 'string' ?
  path.split(delimiter).map(x => isInteger(Number(x)) ? Number(x) : x) :
  path
}
