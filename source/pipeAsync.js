import { reduce } from "./reduce";

export function pipeAsync(...fnList){
  return function (startArgument){
    return reduce(async (value, fn) => fn(await value), startArgument, fnList)
  }
}
